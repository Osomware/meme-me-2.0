import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React, { FC, ReactNode } from 'react'

import '~/styles/globals.css'
import { Provider } from './_trpc/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Meme me',
  description: 'Social media website for entertainment'
}

type RootLayoutProps = {
  children: ReactNode
}

const RootLayout: FC<RootLayoutProps> = ({ children }): JSX.Element => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}

export default RootLayout
