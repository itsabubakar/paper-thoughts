import type { Metadata } from 'next'
import { Jost, Syne } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar/Navbar'


const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
});
const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
});

export const metadata: Metadata = {
  title: "Paper-Thoughts",
  description: 'Where words come to life',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${jost.variable} ${syne.variable} `}>
        <Navbar />
        <div className='pt-5 z-1'>
          {children}
        </div>
      </body>
    </html>
  )
}
