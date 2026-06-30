import type { Metadata, Viewport } from 'next'
import { Archivo } from 'next/font/google'
import './globals.css'

const archivo = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  variable: '--font-archivo',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://turfbook.in'),
  title: 'TurfBook — Automated WhatsApp Booking for Turfs',
  description:
    'TurfBook automates turf bookings, confirmations, reminders and payments through WhatsApp.',
  openGraph: {
    title: 'TurfBook — Automated WhatsApp Booking for Turfs',
    description:
      'Confirmations, UPI payments and reminders run themselves. Turn WhatsApp into your booking desk.',
    type: 'website',
    images: ['/hero.webp'],
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1A6B3A',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`js ${archivo.variable}`}>
      <head>
        <link rel="preload" as="image" href="/hero.webp" />
      </head>
      <body>{children}</body>
    </html>
  )
}
