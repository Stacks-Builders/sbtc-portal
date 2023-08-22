'use client'

import Link from 'next/link'


function NavLink({ href, children, icon, external }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between gap-2 py-2 text-xl font-medium transition text-black hover:text-gray-900 dark:text-gray-200 dark:hover:text-white group"
    >
      <span className="flex items-center gap-2">
        <span className="hidden lg:block">{icon}</span>
        {children}
      </span>
      {external ? (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="w-4 h-4 shrink-0 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transform group-hover:text-primary-500 transition" viewBox="0 0 16 16">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 13 13 3m0 0H5.5M13 3v7.5"/>
        </svg>
      ) : null}
    </Link>
  )
}

const DashboardIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      stroke="url(#link-active)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19.59 18.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12 14.98 14.98 0 0 0-12.119 6.16m5.959 5.96a14.922 14.922 0 0 1-5.84 2.58m0 0a15.53 15.53 0 0 1-.311.06 15.092 15.092 0 0 1-2.448-2.448c.019-.104.038-.208.059-.312m2.581-5.84a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.93 14.93 0 0 0-2.581 5.84m-2.239 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M20.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
    />
    <defs>
      <linearGradient
        id="link-active"
        x1={25.75}
        x2={10.409}
        y1={16}
        y2={4.803}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#ED693C" />
        <stop offset={0.904} stopColor="#FDC60B" />
      </linearGradient>
    </defs>
  </svg>
)

const BridgeIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    className="stroke-gray-900 dark:stroke-gray-100"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M26 16c0-1.643-.061-3.27-.184-4.883a5.341 5.341 0 0 0-4.933-4.933 64.904 64.904 0 0 0-9.766 0 5.341 5.341 0 0 0-4.933 4.933c-.023.294-.043.588-.061.883M26 16l4-4m-4 4-4-4M6 16c0 1.643.061 3.27.184 4.883a5.341 5.341 0 0 0 4.933 4.933 64.86 64.86 0 0 0 9.766 0 5.341 5.341 0 0 0 4.933-4.933c.023-.294.043-.588.061-.883M6 16l4 4m-4-4-4 4"
    />
  </svg>
)

export const navigation = [
  { title: 'Dashboard', href: '/', icon: <DashboardIcon /> },
  { title: 'Bridge', href: 'https://sbtc.world', icon: <BridgeIcon />, external: true},
]

export function Navigation(props) {
  return (
    <nav {...props}>
      <ul role="list">
        {navigation.map((link) => (
          <li key={link.title}
          >
            <NavLink
              href={link.href}
              icon={link.icon}
              external={link.external}
            >
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
