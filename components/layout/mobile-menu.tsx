'use client'

import { useState } from 'react'
import { X, Menu } from 'lucide-react'
import { buyNowUrl } from '@/lib/shopify'

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '#video', label: 'Watch' },
    { href: '#features', label: 'Features' },
    { href: '#product', label: 'Product' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile menu panel */}
      <div className={`
        fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 z-50 md:hidden
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="p-4">
          <div className="flex justify-between items-center mb-8">
            <span className="text-2xl font-bold text-brand">Nicanteen</span>
            <button onClick={() => setIsOpen(false)} aria-label="Close menu">
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="text-lg font-medium hover:text-green-600 py-2"
              >
                {link.label}
              </a>
            ))}
            
            <div className="border-t pt-4 mt-4">
              <button 
                className="w-full px-4 py-3 text-white rounded-md bg-brand-gradient font-medium"
                onClick={() => {
                  window.open(buyNowUrl(), '_blank')
                  setIsOpen(false)
                }}
              >
                Shop Now
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}