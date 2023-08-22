'use client'

import { Button } from "./Button"

export function DashboardData() {
  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div
          className="relative flex items-center p-6 bg-[linear-gradient(270deg,rgba(237,105,60,0.20)0%,rgba(253,198,11,0.20)90.36%)] dark:bg-primary-01 border-[0.5px] border-primary-500 rounded-lg focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2"
        >
          <dl className="min-w-0 flex-1">
            <dt className="text-xl font-bold leading-6 text-gray-800 dark:text-gray-1000">Total value locked</dt>
            <dd className="mt-1 text-4xl font-bold leading-none text-gray-900 dark:text-black">$99,728,707</dd>
          </dl>
        </div>
        <div
          className="relative flex items-center p-6 bg-white border-[0.5px] border-gray-500/50 rounded-lg focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2"
        >
          <dl className="min-w-0 flex-1">
            <dt className="text-xl font-bold leading-6 text-gray-800">Your balance</dt>
            <dd className="mt-1 text-4xl font-bold leading-none text-gray-900">
              — <span className="text-xl">sBTC</span>
              <Button variant="secondary" className="inline-block ml-2">Connect your wallet</Button>
              <span className="block text-base font-normal text-gray-800">~$—</span>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  )
}
