'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { MobileMenu } from '@/components/layout/mobile-menu'
import { buyNowUrl } from '@/lib/shopify'

const ACCENT = '#22c55e'

/** Fade/rise in when scrolled into view. */
function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'none' : 'translateY(28px)',
        transition: 'opacity 900ms cubic-bezier(.16,1,.3,1), transform 900ms cubic-bezier(.16,1,.3,1)',
      }}
    >
      {children}
    </div>
  )
}

function shop() {
  window.open(buyNowUrl(), '_blank')
}

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('sending')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setFormStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setFormStatus('error')
      }
    } catch {
      setFormStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/60 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <span className="text-sm font-semibold uppercase tracking-[0.4em]">Nicanteen</span>
          <nav className="hidden gap-8 text-xs uppercase tracking-widest text-neutral-400 md:flex">
            <a href="#problem" className="hover:text-white">The Problem</a>
            <a href="#object" className="hover:text-white">The Object</a>
            <a href="#spec" className="hover:text-white">Spec</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <button
              onClick={shop}
              className="hidden rounded-full border border-white/20 px-5 py-2 text-xs uppercase tracking-widest transition-colors hover:border-white hover:bg-white hover:text-black md:block"
            >
              Shop · $13
            </button>
            <MobileMenu />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <Image
          src="/product/case-4.jpg"
          alt="Nicanteen matte-black pouch carrier"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
          style={{ objectPosition: '60% 40%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,black_90%)]" />

        <div className="relative z-10 px-6 text-center">
          <p className="mb-6 text-[11px] uppercase tracking-[0.5em] text-neutral-400">
            A carrier for nicotine pouches
          </p>
          <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight md:text-8xl">
            The pouch case
            <br />
            <span className="text-neutral-500">nobody notices.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-md text-sm leading-relaxed text-neutral-300">
            Matte. Slim. Silent. Nicanteen disappears into any pocket — and looks like
            nothing you’d ever have to explain.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={shop}
              className="rounded-full bg-white px-8 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.03]"
            >
              Carry one — $13
            </button>
            <a href="#object" className="text-sm text-neutral-400 underline-offset-4 hover:text-white hover:underline">
              See the object
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-neutral-500">
          Scroll
        </div>
      </section>

      {/* Problem */}
      <section id="problem" className="border-t border-white/5 px-6 py-32">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em]" style={{ color: ACCENT }}>
              The problem
            </p>
            <h2 className="mt-6 text-3xl font-light leading-snug md:text-5xl">
              A branded tin is a{' '}
              <span className="font-semibold">billboard</span>. Loose pouches get{' '}
              <span className="font-semibold">crushed</span>. A plastic bag looks like{' '}
              <span className="text-neutral-500">something you’d hide</span>.
            </h2>
            <p className="mt-8 max-w-xl text-neutral-400">
              You shouldn’t have to choose between discretion and dignity. Nicanteen is the
              quiet answer — a precise little object that keeps twenty pouches fresh and out of sight.
            </p>
          </Reveal>
        </div>
      </section>

      {/* The Object — split */}
      <section id="object" className="border-t border-white/5">
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-square md:aspect-auto md:min-h-[70vh]">
            <Image
              src="/product/case-2.jpg"
              alt="Nicanteen carrier, open"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              style={{ objectPosition: 'center' }}
            />
          </div>
          <div className="flex items-center px-6 py-20 md:px-16">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.4em]" style={{ color: ACCENT }}>
                The object
              </p>
              <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
                One hand. One click. Done.
              </h2>
              <p className="mt-6 max-w-md text-neutral-400">
                A satisfying snap-lock flip top opens with a thumb and shuts flush. The embossed
                monogram is the only marking — no loud branding, no tell.
              </p>
              <ul className="mt-10 space-y-4 text-sm">
                {[
                  'Flip-top snap closure — one-handed',
                  'Keeps pouches fresh and uncrushed',
                  'Embossed monogram, matte finish',
                  '~10 mm slim — pocket-flat',
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-neutral-300">
                    <span className="h-1 w-1 rounded-full" style={{ background: ACCENT }} />
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Spec strip */}
      <section id="spec" className="border-t border-white/5 px-6 py-24">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-y-12 text-center md:grid-cols-4">
          {[
            ['~10 mm', 'Slim profile'],
            ['~20', 'Pouches held'],
            ['1', 'Silent monogram'],
            ['$13', 'Free shipping'],
          ].map(([big, small]) => (
            <Reveal key={small}>
              <div className="text-4xl font-semibold md:text-6xl">{big}</div>
              <div className="mt-3 text-xs uppercase tracking-[0.3em] text-neutral-500">{small}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative overflow-hidden border-t border-white/5 px-6 py-40 text-center">
        <Image src="/product/case-3.jpg" alt="" fill sizes="100vw" className="object-cover opacity-25" />
        <div className="absolute inset-0 bg-black/60" />
        <Reveal className="relative z-10">
          <h2 className="text-4xl font-semibold tracking-tight md:text-7xl">Carry quietly.</h2>
          <p className="mx-auto mt-6 max-w-md text-neutral-400">
            Precision-molded, BPA-free, and built to vanish into your day.
          </p>
          <button
            onClick={shop}
            className="mt-10 rounded-full bg-white px-10 py-4 text-sm font-medium text-black transition-transform hover:scale-[1.03]"
          >
            Get Nicanteen — $13
          </button>
        </Reveal>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-white/5 px-6 py-28">
        <div className="mx-auto max-w-xl">
          <Reveal>
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.4em]" style={{ color: ACCENT }}>
                Get in touch
              </p>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
                Questions? Say hello.
              </h2>
              <p className="mt-4 text-sm text-neutral-400">
                We usually respond within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-10 space-y-5">
              {formStatus === 'success' && (
                <div className="rounded-lg border border-green-500/40 bg-green-500/10 px-4 py-3 text-sm text-green-300">
                  Thank you — your message is on its way. We’ll be in touch soon.
                </div>
              )}
              {formStatus === 'error' && (
                <div className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                  Something went wrong. Please try again or email us directly.
                </div>
              )}

              <div>
                <label className="mb-2 block text-xs uppercase tracking-widest text-neutral-400">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-neutral-500 outline-none transition-colors focus:border-white/40"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs uppercase tracking-widest text-neutral-400">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-neutral-500 outline-none transition-colors focus:border-white/40"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs uppercase tracking-widest text-neutral-400">Message</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-neutral-500 outline-none transition-colors focus:border-white/40"
                  placeholder="Tell us what’s on your mind…"
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="w-full rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition-transform hover:scale-[1.02] disabled:opacity-50"
              >
                {formStatus === 'sending' ? 'Sending…' : 'Send message'}
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-14">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div className="text-sm font-semibold uppercase tracking-[0.4em]">Nicanteen</div>
          <nav className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-widest text-neutral-400">
            <a href="#problem" className="hover:text-white">The Problem</a>
            <a href="#object" className="hover:text-white">The Object</a>
            <a href="#spec" className="hover:text-white">Spec</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="mailto:nicanteenllc@gmail.com" className="text-xs text-neutral-400 hover:text-white">
            nicanteenllc@gmail.com
          </a>
        </div>
        <p className="mt-8 text-center text-[11px] text-neutral-600">
          © {new Date().getFullYear()} Nicanteen. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
