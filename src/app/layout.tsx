import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import { ThemeWrapperProvider } from './context/themeprovider'
import localFont from 'next/font/local'
import { cn } from '@/lib/utils'
import './globals.css'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

const fontHeading = localFont({
  src: '../assets/fonts/CalSans-SemiBold.woff2',
  variable: '--font-heading',
})

export const metadata: Metadata = {
  title: 'lastChance',
  description: 'ultima tentativa nessa porra',
  keywords:'criação de sites,aplicativos,aplicações,sites,sites em itanhaem, aplicativos em itanhaem'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable, fontHeading.variable)}>
      <ThemeWrapperProvider attribute='class' defaultTheme='system' enableSystem>
        {children}
      </ThemeWrapperProvider>
        </body>
    </html>
  )
}
