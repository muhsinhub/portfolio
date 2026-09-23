'use client'

import { useState, useEffect } from 'react'
import styles from '../styles/Navbar.module.css'

// Single-page nav: each link smooth-scrolls to a section id on the home page.
const links = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Give the header a solid background once the user scrolls past the hero,
  // so the text stays readable over the light lower sections.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#top" className={styles.logo}>brownbuilds</a>

      <button
        className={styles.menuBtn}
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        Menu
      </button>
    </header>

    {open && (
      <div className={styles.overlay}>
        <button
          className={styles.close}
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          &times;
        </button>
        <nav className={styles.overlayNav}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    )}
    </>
  )
}
