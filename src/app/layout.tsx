import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Modern Web Agency - Professional Web Development Services',
  description: 'Transform your digital presence with our cutting-edge web development services. We create modern, responsive, and user-friendly websites that drive results.',
  keywords: ['web development', 'web design', 'react', 'nextjs', 'typescript', 'tailwind'],
  authors: [{ name: 'Modern Web Agency' }],
  creator: 'Modern Web Agency',
  publisher: 'Modern Web Agency',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://modernwebagency.com',
    title: 'Modern Web Agency - Professional Web Development Services',
    description: 'Transform your digital presence with our cutting-edge web development services.',
    siteName: 'Modern Web Agency',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modern Web Agency - Professional Web Development Services',
    description: 'Transform your digital presence with our cutting-edge web development services.',
    creator: '@modernwebagency',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}