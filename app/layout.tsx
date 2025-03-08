import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Proffyemphy Ideal Academy',
  description: 'Specialized learning platform for university science students. Access expert-led courses, interactive materials, and a supportive community.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
