'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import styles from './Portfolio.module.css'

/* ---- content (unchanged info, new layout) ---- */
const SECTIONS = ['Intro', 'Work', 'About', 'Services', 'FAQ', 'Contact']

const accents = ['var(--cyan)', 'var(--pink)', 'var(--violet)', 'var(--lime)']

const projects = [
  {
    title: "Bella's Pizza",
    blurb: 'A cosy wood-fired pizzeria — menu, gallery and story in a warm, appetising layout.',
    image: '/work/bellas-pizza.png',
    live: 'https://bellas-pizza-nine.vercel.app/',
    tag: null,
  },
  {
    title: 'Clearwater Dental',
    blurb: 'A calm, professional dental clinic site with an interactive multi-step booking flow.',
    image: '/work/clearwater-dental.png',
    live: 'https://clearwaterdental.vercel.app/',
    tag: null,
  },
  {
    title: 'Sunday Coffee',
    blurb: 'A bright neighbourhood café with an inviting online menu and a relaxed, friendly feel.',
    image: '/work/sunday-coffee.png',
    live: 'https://sunday-coffee-demo.vercel.app/',
    tag: null,
  },
  {
    title: 'Accentuate',
    blurb: 'A clean storefront for a modest swimwear & activewear brand — fully-covered pieces, proudly made.',
    image: '/work/accentuate.png',
    live: 'https://accentuate-demo.vercel.app/',
    tag: 'In progress',
  },
]

const services = [
  { title: 'Custom website design', text: 'A site built around your business and brand — not a stock template everyone else is using.' },
  { title: 'Fast & mobile-first', text: 'Looks sharp on phones, tablets and desktops, and loads quickly so visitors never wait.' },
  { title: 'Launched & live', text: 'I handle getting it online with a real web address, hosted and ready for customers.' },
  { title: 'Easy to update', text: 'Clean, simple code so your menu, prices or photos can be refreshed as you grow.' },
]

const faqs = [
  { q: 'How much does a website cost?', a: 'Every project is quoted after a short chat, since it depends on how many pages and features you need. I keep pricing realistic for small and local businesses.' },
  { q: 'How long does it take to build?', a: 'Most small-business sites go live in about one to two weeks, depending on how quickly we settle the content and photos.' },
  { q: 'Do you get the site online for me?', a: 'Yes. I deploy it to a real web address and keep it hosted, so you never have to touch the technical setup.' },
  { q: 'Will it work on phones?', a: 'Always. Every site is built mobile-first, so it looks sharp on phones, tablets and desktops.' },
  { q: 'Can I update it later?', a: 'Yes. I build clean, simple sites and can make changes — new photos, prices or pages — as your business grows.' },
  { q: 'What do you need from me to start?', a: 'Your business details, any logo or photos you have, and a rough idea of the pages you want. I handle the design and build from there.' },
]

export default function Portfolio() {
  const [active, setActive] = useState(0)
  const [openCard, setOpenCard] = useState(null)
  const [sound, setSound] = useState(false)
  const [clock, setClock] = useState('')
  const audioRef = useRef(null)
  const soundRef = useRef(false)
  soundRef.current = sound

  /* clock */
  useEffect(() => {
    const tick = () =>
      setClock(new Date().toLocaleTimeString('en-GB', { hour12: false }))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  /* ---- Web Audio sfx ---- */
  const sfx = useCallback((type) => {
    if (!soundRef.current) return
    try {
      let ac = audioRef.current
      if (!ac) {
        const AC = window.AudioContext || window.webkitAudioContext
        if (!AC) return
        ac = audioRef.current = new AC()
      }
      if (ac.state === 'suspended') ac.resume()
      const now = ac.currentTime
      const o = ac.createOscillator()
      const g = ac.createGain()
      o.connect(g)
      g.connect(ac.destination)
      o.type = 'square'
      if (type === 'hover') {
        o.frequency.value = 880
        g.gain.setValueAtTime(0.0001, now)
        g.gain.linearRampToValueAtTime(0.025, now + 0.004)
        g.gain.exponentialRampToValueAtTime(0.0001, now + 0.06)
        o.start(now); o.stop(now + 0.07)
      } else {
        o.frequency.setValueAtTime(520, now)
        o.frequency.exponentialRampToValueAtTime(1100, now + 0.09)
        g.gain.setValueAtTime(0.05, now)
        g.gain.exponentialRampToValueAtTime(0.0001, now + 0.16)
        o.start(now); o.stop(now + 0.18)
      }
    } catch (_) { /* audio unavailable — ignore */ }
  }, [])

  const go = useCallback((i) => {
    setActive((prev) => {
      const next = (i + SECTIONS.length) % SECTIONS.length
      if (next !== prev) { setOpenCard(null); sfx('select') }
      return next
    })
  }, [sfx])

  const toggleSound = () => {
    setSound((s) => {
      const next = !s
      soundRef.current = next
      if (next) setTimeout(() => sfx('select'), 0)
      return next
    })
  }

  /* keyboard navigation */
  useEffect(() => {
    const onKey = (e) => {
      const t = e.target
      if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA')) return
      if (e.key === 'Escape') {
        if (openCard !== null) { setOpenCard(null); sfx('select') }
        else go(0)
      } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault(); go(active + 1)
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault(); go(active - 1)
      } else if (/^[1-6]$/.test(e.key)) {
        go(parseInt(e.key, 10) - 1)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active, openCard, go, sfx])

  return (
    <div className={styles.shell}>
      {/* ---------------- Sidebar ---------------- */}
      <aside className={styles.sidebar}>
        <a
          href="#"
          className={styles.brand}
          onClick={(e) => { e.preventDefault(); go(0) }}
          onMouseEnter={() => sfx('hover')}
        >
          brown<span className={styles.brandAccent}>builds</span>
          <span className={styles.caret}>_</span>
        </a>

        <nav className={styles.nav} aria-label="Sections">
          {SECTIONS.map((label, i) => (
            <button
              key={label}
              className={`${styles.navItem} ${i === active ? styles.navActive : ''}`}
              style={{ '--i-accent': accents[i % accents.length] }}
              onClick={() => go(i)}
              onMouseEnter={() => sfx('hover')}
              aria-current={i === active ? 'page' : undefined}
            >
              <span className={styles.navNum}>{String(i + 1).padStart(2, '0')}</span>
              <span className={styles.navLabel}>{label}</span>
            </button>
          ))}
        </nav>

        <div className={styles.sideFoot}>
          <div className={styles.status}>
            <span className={styles.dot} aria-hidden="true" />
            <span>AVAILABLE</span>
          </div>
          <div className={styles.clock}>{clock}</div>
          <button
            className={styles.sfxToggle}
            onClick={toggleSound}
            aria-pressed={sound}
            onMouseEnter={() => sfx('hover')}
          >
            SFX <span className={sound ? styles.sfxOn : styles.sfxOff}>{sound ? '◼' : '◻'}</span>
          </button>
        </div>
      </aside>

      {/* ---------------- Content ---------------- */}
      <main className={styles.content}>
        <div className={styles.ticker} aria-hidden="true">
          <div className={styles.tickerTrack}>
            {Array.from({ length: 2 }).map((_, k) => (
              <span key={k}>
                AVAILABLE FOR NEW PROJECTS&nbsp;&nbsp;◦&nbsp;&nbsp;FAST, MODERN WEBSITES FOR LOCAL
                BUSINESSES&nbsp;&nbsp;◦&nbsp;&nbsp;LIVE IN DAYS, NOT WEEKS&nbsp;&nbsp;◦&nbsp;&nbsp;
              </span>
            ))}
          </div>
        </div>

        <div className={styles.stage}>
          <section key={active} className={styles.panel}>
            <header className={styles.panelHead}>
              <span className={styles.panelKicker}>
                SECTION {String(active + 1).padStart(2, '0')} / {SECTIONS.length.toString().padStart(2, '0')}
              </span>
            </header>

            {active === 0 && <Intro go={go} sfx={sfx} />}
            {active === 1 && (
              <Work openCard={openCard} setOpenCard={setOpenCard} sfx={sfx} />
            )}
            {active === 2 && <About />}
            {active === 3 && <Services sfx={sfx} />}
            {active === 4 && <Faq sfx={sfx} />}
            {active === 5 && <Contact sfx={sfx} />}
          </section>
        </div>

        <footer className={styles.hint}>
          <span>↑↓ sections</span>
          <span>1–6 jump</span>
          <span>ENTER open</span>
          <span>ESC back</span>
        </footer>
      </main>
    </div>
  )
}

/* ---------------- Panels ---------------- */

function Intro({ go, sfx }) {
  return (
    <div className={styles.intro}>
      <div className={styles.introMain}>
        <h1 className={styles.introTitle}>
          Fast, modern websites for{' '}
          <span className={styles.titleCyan}>local businesses</span>.
        </h1>
        <p className={styles.introSub}>
          I design and build custom sites that make small businesses look established online —
          and get them live on the web in days, not weeks.
        </p>
        <div className={styles.introCtas}>
          <button
            className={styles.btnPrimary}
            onClick={() => go(1)}
            onMouseEnter={() => sfx('hover')}
          >
            View work →
          </button>
          <button
            className={styles.btnGhost}
            onClick={() => go(5)}
            onMouseEnter={() => sfx('hover')}
          >
            Get in touch
          </button>
        </div>
      </div>
    </div>
  )
}

function Work({ openCard, setOpenCard, sfx }) {
  const open = openCard !== null ? projects[openCard] : null
  return (
    <div className={styles.workWrap}>
      <h2 className={styles.panelTitle}>Sites I&rsquo;ve built</h2>
      <p className={styles.panelLede}>Real, deployed projects — select a card, then visit it.</p>

      <div className={styles.arcana}>
        {projects.map((p, i) => (
          <button
            key={p.title}
            className={styles.arcCard}
            style={{ '--acc': accents[i % accents.length] }}
            onClick={() => { setOpenCard(i); sfx('select') }}
            onMouseEnter={() => sfx('hover')}
          >
            <span className={styles.arcNum}>{String(i + 1).padStart(2, '0')}</span>
            <span className={styles.arcThumb}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.image} alt={`${p.title} website`} loading="lazy" />
            </span>
            <span className={styles.arcName}>{p.title}</span>
            {p.tag && <span className={styles.arcTag}>{p.tag}</span>}
          </button>
        ))}
      </div>

      {open && (
        <div
          className={styles.detailOverlay}
          onClick={() => setOpenCard(null)}
          role="dialog"
          aria-label={`${open.title} details`}
        >
          <div
            className={styles.detail}
            style={{ '--acc': accents[openCard % accents.length] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.detailClose}
              onClick={() => setOpenCard(null)}
              aria-label="Close"
            >
              ✕
            </button>
            <span className={styles.detailNum}>{String(openCard + 1).padStart(2, '0')}</span>
            <div className={styles.detailThumb}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={open.image} alt={`${open.title} website`} />
            </div>
            <div className={styles.detailBody}>
              <div className={styles.detailTopRow}>
                <h3 className={styles.detailName}>{open.title}</h3>
                {open.tag && <span className={styles.arcTag}>{open.tag}</span>}
              </div>
              <p className={styles.detailText}>{open.blurb}</p>
              <a
                className={styles.btnPrimary}
                href={open.live}
                onMouseEnter={() => sfx('hover')}
              >
                Visit site →
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function About() {
  return (
    <div className={styles.about}>
      <h2 className={styles.panelTitle}>About</h2>
      <div className={styles.aboutPanel}>
        <p className={styles.aboutLead}>
          I&rsquo;m a front-end developer who builds clean, fast websites for local and small
          businesses — sites that load quickly, look great on any screen, and are easy for
          customers to use.
        </p>
        <p className={styles.aboutText}>
          Every project in the Work section is a real, deployed site — not a mock-up. If you run a
          business and want an online home that actually reflects it, that&rsquo;s exactly what I do.
        </p>
      </div>
    </div>
  )
}

function Services({ sfx }) {
  return (
    <div className={styles.services}>
      <h2 className={styles.panelTitle}>How I can help</h2>
      <div className={styles.svcGrid}>
        {services.map((s, i) => (
          <div
            key={s.title}
            className={styles.svcCard}
            style={{ '--acc': accents[i % accents.length] }}
            onMouseEnter={() => sfx('hover')}
          >
            <span className={styles.svcNum}>{String(i + 1).padStart(2, '0')}</span>
            <h3 className={styles.svcTitle}>{s.title}</h3>
            <p className={styles.svcText}>{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function Faq({ sfx }) {
  return (
    <div className={styles.faq}>
      <h2 className={styles.panelTitle}>Common questions</h2>
      <div className={styles.faqList}>
        {faqs.map((f) => (
          <details key={f.q} className={styles.faqItem}>
            <summary className={styles.faqQ} onClick={() => sfx('select')}>
              <span>{f.q}</span>
              <span className={styles.faqSign} aria-hidden="true">+</span>
            </summary>
            <p className={styles.faqA}>{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  )
}

function Contact({ sfx }) {
  return (
    <div className={styles.contact}>
      <h2 className={styles.panelTitle}>Let&rsquo;s build something.</h2>
      <div className={styles.contactGrid}>
        <div className={styles.contactInfo}>
          <p className={styles.contactText}>
            Have a business that needs a website? Tell me a little about it and I&rsquo;ll get back
            to you.
          </p>
          <a className={styles.contactLink} href="mailto:muhsinbrown1@gmail.com" onMouseEnter={() => sfx('hover')}>
            <span className={styles.contactLabel}>EMAIL</span>
            muhsinbrown1@gmail.com
          </a>
          <a className={styles.contactLink} href="https://instagram.com/muhsinbrownn" target="_blank" rel="noreferrer" onMouseEnter={() => sfx('hover')}>
            <span className={styles.contactLabel}>INSTAGRAM</span>
            @muhsinbrownn
          </a>
        </div>
        <form className={styles.form} action="https://formspree.io/f/xbglonyp" method="POST">
          <label className={styles.field}>
            <span>Name</span>
            <input type="text" name="name" required />
          </label>
          <label className={styles.field}>
            <span>Email</span>
            <input type="email" name="email" required />
          </label>
          <label className={styles.field}>
            <span>Message</span>
            <textarea name="message" rows={4} required />
          </label>
          <button type="submit" className={styles.btnPrimary} onMouseEnter={() => sfx('hover')}>
            Send message
          </button>
        </form>
      </div>
    </div>
  )
}
