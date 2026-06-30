'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import WhatsAppIcon from './icons/WhatsAppIcon'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`} id="nav">
        <a href="#" className="logo">
          <WhatsAppIcon aria-hidden="true" />
          TurfBook
        </a>
        <div className="links">
          <a href="#benefits">Benefits</a>
          <a href="#how">How it Works</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </div>
        <a href="#contact" className="nav-cta">
          Get Started
          <WhatsAppIcon aria-hidden="true" />
        </a>
        <button
          className="burger"
          aria-label="Menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} id="mobileMenu">
        <a href="#benefits" onClick={closeMenu}>
          Benefits
        </a>
        <a href="#how" onClick={closeMenu}>
          How it Works
        </a>
        <a href="#pricing" onClick={closeMenu}>
          Pricing
        </a>
        <a href="#faq" onClick={closeMenu}>
          FAQ
        </a>
        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </div>
    </>
  )
}
