import styles from './page.module.css'

// ---- Featured work -----------------------------------------------------
// image: file in /public/work (or null → a placeholder tile is shown)
// live:  public URL (or null → "Link coming soon")
const projects = [
  {
    title: "Bella's Pizza",
    blurb: 'A cosy wood-fired pizzeria — menu, gallery and story, all in a warm, appetising layout.',
    image: '/work/bellas-pizza.png',
    live: 'https://bellas-pizza-nine.vercel.app/',
    tag: null,
  },
  {
    title: 'Clearwater Dental',
    blurb: 'A calm, professional dental clinic site featuring an interactive multi-step appointment booking flow.',
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

// ---- Services ----------------------------------------------------------
const services = [
  {
    n: '01',
    title: 'Custom website design',
    text: 'A site built around your business and brand — not a stock template everyone else is using.',
  },
  {
    n: '02',
    title: 'Fast & mobile-first',
    text: 'Looks sharp on phones, tablets and desktops, and loads quickly so visitors never wait.',
  },
  {
    n: '03',
    title: 'Launched & live',
    text: 'I handle getting it online with a real web address, hosted and ready for customers.',
  },
  {
    n: '04',
    title: 'Easy to update',
    text: 'Clean, simple code so your menu, prices or photos can be refreshed as you grow.',
  },
]

// ---- FAQ (adapted from a 21st.dev "FAQ 3" component into plain CSS + native <details>) ----
const faqs = [
  {
    q: 'How much does a website cost?',
    a: 'Every project is quoted after a short chat, since it depends on how many pages and features you need. I keep pricing realistic for small and local businesses.',
  },
  {
    q: 'How long does it take to build?',
    a: 'Most small-business sites go live in about one to two weeks, depending on how quickly we settle the content and photos.',
  },
  {
    q: 'Do you get the site online for me?',
    a: 'Yes. I deploy it to a real web address and keep it hosted, so you never have to touch the technical setup.',
  },
  {
    q: 'Will it work on phones?',
    a: 'Always. Every site is built mobile-first, so it looks sharp on phones, tablets and desktops.',
  },
  {
    q: 'Can I update it later?',
    a: 'Yes. I build clean, simple sites and can make changes — new photos, prices or pages — as your business grows.',
  },
  {
    q: 'What do you need from me to start?',
    a: 'Your business details, any logo or photos you have, and a rough idea of the pages you want. I handle the design and build from there.',
  },
]

export default function Home() {
  return (
    <>
      {/* ===== Hero ===== */}
      <section id="top" className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <p className={styles.kicker}>brownbuilds — freelance web developer</p>
          <h1 className={styles.heroTitle}>
            Fast, modern websites<br />for local businesses.
          </h1>
          <p className={styles.heroSub}>
            I design and build custom sites that make small businesses look established online —
            and get them live on the web in days, not weeks.
          </p>
          <div className={styles.heroCtas}>
            <a href="#work" className={styles.btnPrimary}>See my work</a>
            <a href="#contact" className={styles.btnGhost}>Get in touch</a>
          </div>
        </div>
      </section>

      {/* ===== Featured work ===== */}
      <section id="work" className={styles.section}>
        <div className="container">
          <div className={styles.sectionHead}>
            <p className={styles.sectionKicker}>Selected work</p>
            <h2 className={styles.sectionTitle}>Sites I&rsquo;ve built</h2>
          </div>

          <div className={styles.workGrid}>
            {projects.map((p) => (
              <article key={p.title} className={styles.card}>
                <div className={styles.thumb}>
                  {p.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.image} alt={`${p.title} website`} loading="lazy" />
                  ) : (
                    <div className={styles.placeholder}>
                      <span>{p.title.charAt(0)}</span>
                    </div>
                  )}
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardMeta}>
                    <span className={styles.techTag}>Next.js</span>
                    {p.tag && <span className={styles.statusTag}>{p.tag}</span>}
                  </div>
                  <h3 className={styles.cardTitle}>{p.title}</h3>
                  <p className={styles.cardText}>{p.blurb}</p>
                  {p.live ? (
                    <a className={styles.cardLink} href={p.live} target="_blank" rel="noreferrer">
                      Visit site &rarr;
                    </a>
                  ) : (
                    <span className={styles.cardLinkMuted}>Link coming soon</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== About ===== */}
      <section id="about" className={styles.about}>
        <div className="container">
          <p className={styles.sectionKicker}>About</p>
          <p className={styles.aboutLead}>
            I&rsquo;m a front-end developer who builds clean, fast websites for local and small
            businesses. I work with Next.js and modern web tools to create sites that load quickly,
            look great on any screen, and are easy for customers to use.
          </p>
          <p className={styles.aboutText}>
            Every project above is a real, deployed site — not a mock-up. If you run a business and
            want an online home that actually reflects it, that&rsquo;s exactly what I do.
          </p>
        </div>
      </section>

      {/* ===== Services ===== */}
      <section id="services" className={styles.section}>
        <div className="container">
          <div className={styles.sectionHead}>
            <p className={styles.sectionKicker}>What I do</p>
            <h2 className={styles.sectionTitle}>How I can help</h2>
          </div>
          <div className={styles.servicesGrid}>
            {services.map((s) => (
              <div key={s.n} className={styles.service}>
                <span className={styles.serviceNum}>{s.n}</span>
                <h3 className={styles.serviceTitle}>{s.title}</h3>
                <p className={styles.serviceText}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ (adapted from 21st.dev, restyled to plain CSS Modules) ===== */}
      <section id="faq" className={styles.faq}>
        <div className="container">
          <div className={styles.sectionHead}>
            <p className={styles.sectionKicker}>FAQ</p>
            <h2 className={styles.sectionTitle}>Common questions</h2>
          </div>
          <div className={styles.faqList}>
            {faqs.map((f) => (
              <details key={f.q} className={styles.faqItem}>
                <summary className={styles.faqQ}>
                  <span>{f.q}</span>
                  <span className={styles.faqIcon} aria-hidden="true">+</span>
                </summary>
                <p className={styles.faqA}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Contact ===== */}
      <section id="contact" className={styles.contact}>
        <div className={`container ${styles.contactGrid}`}>
          <div className={styles.contactInfo}>
            <p className={styles.sectionKicker}>Contact</p>
            <h2 className={styles.sectionTitle}>Let&rsquo;s build something.</h2>
            <p className={styles.contactText}>
              Have a business that needs a website? Tell me a little about it and I&rsquo;ll get back
              to you.
            </p>
            <a className={styles.contactEmail} href="mailto:muhsinbrown1@gmail.com">
              muhsinbrown1@gmail.com
            </a>
            <ul className={styles.contactSocials}>
              <li><a href="https://github.com/muhsinhub" target="_blank" rel="noreferrer">GitHub</a></li>
              <li><a href="https://instagram.com/muhsinbrownn" target="_blank" rel="noreferrer">Instagram</a></li>
            </ul>
          </div>

          {/* Formspree form — submissions are emailed to muhsinbrown1@gmail.com */}
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
              <textarea name="message" rows={5} required />
            </label>
            <button type="submit" className={styles.btnPrimary}>Send message</button>
          </form>
        </div>
      </section>
    </>
  )
}
