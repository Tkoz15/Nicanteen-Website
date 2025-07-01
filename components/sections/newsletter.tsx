'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { BrandButton } from '@/components/ui/brand-button'

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')
    
    try {
      const supabase = createClient()
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ 
          email, 
          subscribed_at: new Date().toISOString() 
        }])
      
      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          setErrorMessage('This email is already subscribed!')
        } else {
          throw error
        }
        setStatus('error')
        return
      }
      
      setStatus('success')
      setEmail('')
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle')
      }, 5000)
    } catch (error) {
      console.error('Newsletter signup error:', error)
      setErrorMessage('Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  return (
    <section className="py-16 bg-gradient-to-r from-green-600 to-green-400 text-white">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-4">Stay in the Loop</h3>
        <p className="mb-8 text-lg opacity-90">
          Get exclusive offers, new colors announcements, and pouch care tips
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              required
              disabled={status === 'loading'}
            />
            <BrandButton
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="bg-black bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm"
            >
              {status === 'loading' ? 'Subscribing...' : 
               status === 'success' ? '✓ Subscribed!' : 
               'Subscribe'}
            </BrandButton>
          </div>
        </form>
        
        {status === 'success' && (
          <p className="mt-4 text-green-100 font-medium">
            🎉 Welcome to the Nicanteen family! Check your email for a welcome discount.
          </p>
        )}
        
        {status === 'error' && errorMessage && (
          <p className="mt-4 text-red-200">
            {errorMessage}
          </p>
        )}
        
        <p className="mt-6 text-sm opacity-75">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}