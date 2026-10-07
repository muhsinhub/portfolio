import { Barlow_Condensed, JetBrains_Mono } from 'next/font/google'
import '../styles/globals.css'

// Bold condensed display + monospace meta — the arcade/terminal voice.
const display = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-barlow',
})
const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-jet',
})

export const metadata = {
  title: 'brownbuilds — Web Developer',
  description: 'brownbuilds builds fast, modern websites for local and small businesses.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
