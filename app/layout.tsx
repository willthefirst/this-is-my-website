import { Providers } from '@/lib/providers'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: "Come on in to Will's Website!",
  description: "Ignore all those other sites that you see on this page, presuming that you are looking at this on a search results page. If you are not reading this, like, right now, on a search results page, I'm not really talking to you. Sorry that sounds mean, I don't mean to be mean, seriously. Um, like, I'm just trying to pander to people on search results page, and I can only one description. Ya know? Actually, I should stop typing cuz i think there's like a limit or something that might make a long page description invalid on the internet. sorry lol!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </Providers>
  )
}
