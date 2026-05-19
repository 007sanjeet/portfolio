import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { SmoothScrollProvider } from '@/components/providers/smooth-scroll-provider'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: 'Sanjeet Kumar | Software Engineer',
  description: 'Software Engineer with expertise in React.js, Django, and modern web technologies. Building scalable, performant web applications.',
  keywords: ['Software Engineer', 'React Developer', 'Django Developer', 'Full Stack Developer', 'Web Developer'],
  authors: [{ name: 'Sanjeet Kumar' }],
  openGraph: {
    title: 'Sanjeet Kumar | Software Engineer',
    description: 'Software Engineer building modern scalable web experiences',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#0a0a12',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark bg-background">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
