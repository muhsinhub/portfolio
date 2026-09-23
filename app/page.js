import Reveal from '@/components/Reveal'
import styles from './page.module.css'

// ---- Featured work (tech tag removed per request; keep "In progress" on Accentuate) ----
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
  { n: '01', title: 'Custom website design', text: 'A site built around your business and brand — not a stock template everyone else is using.' },
  { n: '02', title: 'Fast & mobile-first', text: 'Looks sharp on phones, tablets and desktops, and loads quickly so visitors never wait.' },
  { n: '03', title: 'Launched & live', text: 'I handle getting it online with a real web address, hosted and ready for customers.' },
  { n: '04', title: 'Easy to update', text: 'Clean, simple code so your menu, prices or photos can be refreshed as you grow.' },
]

const faqs = [
  { q: 'How much does a website cost?', a: 'Every project is quoted after a short chat, since it depends on how many pages and features you need. I keep pricing realistic for small and local businesses.' },
  { q: 'How long does it take to build?', a: 'Most small-business sites go live in about one to two weeks, depending on how quickly we settle the content and photos.' },
  { q: 'Do you get the site online for me?', a: 'Yes. I deploy it to a real web address and keep it hosted, so you never have to touch the technical setup.' },
  { q: 'Will it work on phones?', a: 'Always. Every site is built mobile-first, so it looks sharp on phones, tablets and desktops.' },
  { q: 'Can I update it later?', a: 'Yes. I build clean, simple sites and can make changes — new photos, prices or pages — as your business grows.' },
  { q: 'What do you need from me to start?', a: 'Your business details, any logo or photos you have, and a rough idea of the pages you want. I handle the design and build from there.' },
]

export default function Home() {
  return (
    <>
      {/* ===== Hero ===== */}
      <section id="top" className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <span className={styles.badge}>
            <span className={styles.pulse} /> Available for new projects
          </span>
          <h1 className={styles.heroTitle}>
            Fast, modern websites for <span className="gradientText">local businesses</span>.
          </h1>
          <p className={styles.heroSub}>
            I design and build custom sites that make small businesses look established online —
            and get them live on the web in days, not weeks.
          </p>
          <div className={styles.heroCtas}>
            <a href="#work" className={styles.btnPrimary}>See my work</a>
            <a href="#contact" className={styles.btnGlass}>Get in touch</a>
          </div>
        </div>
      </section>

      {/* ===== Featured work ===== */}
      <section id="work" className={styles.section}>
        <div className="container">
          <Reveal className={styles.sectionHead}>
            <p className={styles.kicker}>Selected work</p>
            <h2 className={styles.sectionTitle}>Sites I&rsquo;ve built</h2>
          </Reveal>
          <div className={styles.workGrid}>
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <article className={styles.card}>
                  <div className={styles.thumb}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.image} alt={`${p.title} website`} loading="lazy" />
                  </div>
                  <div className={styles.cardBody}>
                    {p.tag && <span className={styles.statusTag}>{p.tag}</span>}
                    <h3 className={styles.cardTitle}>{p.title}</h3>
                    <p className={styles.cardText}>{p.blurb}</p>
                    <a className={styles.cardLink} href={p.live} target="_blank" rel="noreferrer">
                      Visit site &rarr;
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== About ===== */}
      <section id="about" className={styles.section}>
        <div className="container">
          <Reveal className={styles.aboutCard}>
            <p className={styles.kicker}>About</p>
            <p className={styles.aboutLead}>
              I&rsquo;m a front-end developer who builds clean, fast websites for local and small
              businesses — sites that load quickly, look great on any screen, and are easy for
              customers to use.
            </p>
            <p className={styles.aboutText}>
              Every project above is a real, deployed site — not a mock-up. If you run a business and
              want an online home that actually reflects it, that&rsquo;s exactly what I do.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== Services ===== */}
      <section id="services" className={styles.section}>
        <div className="container">
          <Reveal className={styles.sectionHead}>
            <p className={styles.kicker}>What I do</p>
            <h2 className={styles.sectionTitle}>How I can help</h2>
          </Reveal>
          <div className={styles.servicesGrid}>
            {services.map((s, i) => (
              <Reveal key={s.n} delay={i * 70}>
                <div className={styles.service}>
                  <span className={styles.serviceNum}>{s.n}</span>
                  <h3 className={styles.serviceTitle}>{s.title}</h3>
                  <p className={styles.serviceText}>{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className={styles.section}>
        <div className="container">
          <Reveal className={styles.sectionHead}>
            <p className={styles.kicker}>FAQ</p>
            <h2 className={styles.sectionTitle}>Common questions</h2>
          </Reveal>
          <Reveal className={styles.faqList}>
            {faqs.map((f) => (
              <details key={f.q} className={styles.faqItem}>
                <summary className={styles.faqQ}>
                  <span>{f.q}</span>
                  <span className={styles.faqIcon} aria-hidden="true">+</span>
                </summary>
                <p className={styles.faqA}>{f.a}</p>
              </details>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== Contact ===== */}
      <section id="contact" className={styles.section}>
        <div className="container">
          <Reveal className={styles.contactCard}>
            <div className={styles.contactInfo}>
              <p className={styles.kicker}>Contact</p>
              <h2 className={styles.sectionTitle}>Let&rsquo;s build something.</h2>
              <p className={styles.contactText}>
                Have a business that needs a website? Tell me a little about it and I&rsquo;ll get
                back to you.
              </p>
              <a className={styles.contactEmail} href="mailto:muhsinbrown1@gmail.com">
                muhsinbrown1@gmail.com
              </a>
              <ul className={styles.contactSocials}>
                <li><a href="https://github.com/muhsinhub" target="_blank" rel="noreferrer">GitHub</a></li>
                <li><a href="https://instagram.com/muhsinbrownn" target="_blank" rel="noreferrer">Instagram</a></li>
              </ul>
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
                <textarea name="message" rows={5} required />
              </label>
              <button type="submit" className={styles.btnPrimary}>Send message</button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}
