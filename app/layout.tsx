import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PropIntel — AI Underwriting for Real Estate Investors',
  description: 'Underwrite deals in minutes, not hours. Built by investors, for investors.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
