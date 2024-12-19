import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Noorulain - SEO Expert & Digital Marketer',
  description: 'Professional portfolio of Noorulain, an SEO Expert and Digital Marketer specializing in off-page SEO strategies.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>{children}</body>
    </html>
  )
}

