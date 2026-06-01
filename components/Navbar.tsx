'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Photography', href: '/photography' },
  { label: 'Video', href: '/video' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled?'bg-black/90 backdrop-blur-sm py-3':'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-white font-serif text-lg tracking-[0.25em] uppercase">ArtistLens</Link>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(l => (<Link key={l.href} href={l.href} className="nav-link">{l.label}</Link>))}
        </div>
      </div>
    </nav>
  )
}
