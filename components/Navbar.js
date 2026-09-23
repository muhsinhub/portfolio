'use client'

import { useState, useEffect } from 'react'
import styles from '../styles/Navbar.module.css'

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <a href="#top" className={styles.logo}>
          brownbuilds<span className={styles.dot}>.</span>
        </a>

        <nav className={styles.links}>
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <a href="#contact" className={styles.cta}>Get in touch</a>

        <button className={styles.burger} onClick={() => setOpen(true)} aria-label="Open menu">
          <span /><span /><span />
        </button>
      </header>

      {open && (
        <div className={styles.overlay}>
          <button className={styles.close} onClick={() => setOpen(false)} aria-label="Close menu">
            &times;
          </button>
          <nav className={styles.overlayNav}>
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
