import { Outfit, Inter } from 'next/font/google'
import '../styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Geometric display face + clean body sans, exposed as CSS variables.
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'brownbuilds — Web Developer',
  description: 'brownbuilds builds fast, modern websites for local and small businesses.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body>
        {/* animated aurora backdrop */}
        <div className="aurora" aria-hidden="true">
          <span className="blob b1" />
          <span className="blob b2" />
          <span className="blob b3" />
        </div>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
