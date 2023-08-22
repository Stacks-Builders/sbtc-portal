'use client'

import Link from 'next/link'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Logo } from '@/components/Logo'
import { Navigation } from '@/components/Navigation'

export function Layout({ children }) {

  return (
    <div className="h-full lg:ml-64">
      <header
        className="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex"
      >
        <div className="contents lg:pointer-events-auto lg:block lg:w-64 lg:overflow-y-auto lg:border-r lg:border-gray-900/10 lg:px-6 lg:pb-8 lg:pt-4 lg:dark:border-white/10 backdrop-blur-sm backdrop-blur">
          <div className="hidden lg:flex">
            <Link href="/" aria-label="Home">
              <Logo place="layout" className="h-12" />
            </Link>
          </div>
          <Navigation className="hidden lg:mt-10 lg:block" />
        </div>
      </header>
      <Header />
      <div className="relative flex flex-col h-full px-4 pt-14 sm:px-6 lg:px-8">
        <main className="flex-auto">{children}</main>
        <Footer />
      </div>
    </div>
  )
}
