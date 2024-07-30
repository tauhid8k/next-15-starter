import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

// Config Poppins Font
const poppins = localFont({
  src: [
    {
      path: './fonts/Poppins-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Poppins-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Poppins-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Poppins-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Next Starter App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>{children}</body>
    </html>
  )
}
