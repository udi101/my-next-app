'use client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import { Menu } from './Menu'
import { RecoilRoot } from 'recoil'

const inter = Inter({ subsets: ['latin'] })

const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RecoilRoot>
          <Menu />
          <div className="pl-2 pt-2">{children}</div>
        </RecoilRoot>
      </body>
    </html>
  )
}
