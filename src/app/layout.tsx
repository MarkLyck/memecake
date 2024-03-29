import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Inter } from 'next/font/google'
import './globals.css'

import { Toaster } from '@/components/ui/sonner'

const bubblyFont = localFont({
  src: '../../public/fonts/DailyBubble-OGGdA.ttf',
  variable: '--font-bubbly',
})

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '🧁 Meme cake',
  description:
    'Invest in meme tokens and win real free meme cupcakes (memecakes) 🧁',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#7f84e8"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${bubblyFont.variable} ${inter.className}`}>
        {children}
      </body>
      <Toaster />
    </html>
  )
}
