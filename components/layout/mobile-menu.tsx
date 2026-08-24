'use client'

import { useState } from 'react'
import { X, Menu } from 'lucide-react'
import { buyNowUrl } from '@/lib/shopify'

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '#problem', label: 'The Problem' },
    { href: '#object', label: 'The Object' },
    { href: '#spec', label: 'Spec' },
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
        className="p-2 text-white md:hidden"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/70 md:hidden" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile menu panel */}
      <div className={`
        fixed top-0 right-0 h-full w-72 bg-black border-l border-white/10 shadow-xl transform transition-transform duration-300 z-50 md:hidden
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="p-6">
          <div className="mb-10 flex items-center justify-between">
            <span className="text-sm font-semibold uppercase tracking-[0.4em] text-white">Nicanteen</span>
            <button onClick={() => setIsOpen(false)} aria-label="Close menu" className="text-white">
              <X size={22} />
            </button>
          </div>

          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="py-2 text-xs font-medium uppercase tracking-widest text-neutral-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <div className="mt-6 border-t border-white/10 pt-6">
              <button
                className="w-full rounded-full bg-white px-4 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.02]"
                onClick={() => {
                  window.open(buyNowUrl(), '_blank')
                  setIsOpen(false)
                }}
              >
                Shop · $13
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}