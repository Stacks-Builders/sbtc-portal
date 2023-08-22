'use client'

import Image from 'next/image'
import { Button } from './Button'


export function BridgeBanner() {
  return (
    <section className="relative sm:flex sm:items-center sm:justify-between px-10 py-4 sm:py-8 overflow-hidden bg-black rounded-xl">
      <div className="absolute top-0 left-0">
        <Image
          alt=""
          src={'/cornergradient.svg'}
          quality={100}
          width={99}
          height={148}
        />
      </div>
      <div className="ml-8 sm:ml-16">
        <h2 className="text-2xl sm:text-4xl text-white">sBTC Bridge is here!</h2>
        <p className="text-xl sm:text-2xl text-gray-200 font-extralight">Start minting now.</p>
      </div>
      <div className="ml-8 sm:ml-8 mt-2 sm:mt-0">
        <Button
          variant='outline'
        >
          Launch Bridge
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><mask id="mask-a1c" width="20" height="20" x="0" y="0" maskUnits="userSpaceOnUse" style={{maskType:'alpha'}}><path fill="#D9D9D9" d="M0 0h20v20H0z"/></mask><g mask="url(#mask-a1c)"><path stroke="url(#gradient-abc)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m3.75 16.25 12.5-12.5m0 0H6.875m9.375 0v9.375"/></g><defs><linearGradient id="gradient-abc" x1="1.73913" x2="11.2067" y1="10" y2="16.91" gradientUnits="userSpaceOnUse"><stop stopColor="#ED693C"/><stop offset=".9036" stopColor="#FEDB63"/></linearGradient></defs></svg>
        </Button>
      </div>
  </section>
  )
}
