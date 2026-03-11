import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'Meu Portfólio',
  openGraph: {
    title: 'Meu Portfólio',
    description: 'Transformando ideias em soluções reais.',
    type: 'website',
    url: 'https://portfolio-next-gamma-liard.vercel.app/',
    images: [
      {
        url: 'https://portfolio-next-gamma-liard.vercel.app/opengraph-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: 'https://portfolio-next-gamma-liard.vercel.app/',
  },
}

const font = Montserrat({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-BR' suppressHydrationWarning>
      <body className={`${font.className} antialiased`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
