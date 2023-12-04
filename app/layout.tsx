import type { Metadata } from 'next'
import { Jost, Syne } from 'next/font/google'
import './globals.css'

import Navbar from './_components/Navbar/Navbar'
import Context from './Context';
import Footer from './_components/Footer/Footer';




const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});
const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
  display: 'swap',
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
      <Context>
        <body className={`${jost.variable} ${syne.variable} `}>
          <Navbar />
          <div className='pt-20 z-1 mx-auto max-w-6xl px-5 xl:px-0'>
            {children}
            <Footer />
          </div>
        </body>
      </Context>

    </html>
  )
}
