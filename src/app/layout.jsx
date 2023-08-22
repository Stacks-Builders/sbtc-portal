import localFont from 'next/font/local'
import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import Image from 'next/image'

const circularStd = localFont({
  src: [
    {
      path: './fonts/CircularStd-Light.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/CircularStd-Medium.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/CircularStd-Black.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
})

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - sBTC Dashboard',
    default: 'sBTC Dashboard',
  },
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en" className={`${circularStd.className} h-full`} suppressHydrationWarning>
      <body className="flex min-h-full antialiased bg-white dark:bg-gray-1000">
        <div className="fixed w-screen h-screen overflow-hidden">
          <Image
            alt=""
            src={'/heropattern.svg'}
            quality={100}
            fill
            style={{objectFit: 'cover'}}
          />
        </div>
        <Providers>
          <div className="w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
