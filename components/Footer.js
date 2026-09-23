import styles from '../styles/Footer.module.css'

const email = 'muhsinbrown1@gmail.com'
const socials = [
  { href: 'https://github.com/muhsinhub', label: 'GitHub' },
  { href: 'https://instagram.com/muhsinbrownn', label: 'Instagram' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.wordmark}>
          Let&rsquo;s build something<span className="gradientText">.</span>
        </p>
        <a href={`mailto:${email}`} className={styles.email}>{email}</a>
        <ul className={styles.socials}>
          {socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
            </li>
          ))}
        </ul>
        <p className={styles.copyright}>&copy; {year} brownbuilds</p>
      </div>
    </footer>
  )
}
