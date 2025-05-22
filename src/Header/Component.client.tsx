'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { HeaderNav } from './Nav'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()
  
  // Get the theme from the Header data
  const navTheme = data?.theme || 'light'

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  // Define theme classes based on the selected theme
  const bgClass = navTheme === 'dark' ? 'bg-gray-900/90' : 'bg-white/90'
  const borderClass = navTheme === 'dark' ? 'border-gray-800/50' : 'border-gray-200/50'
  
  return (
    <header
      className={`sticky top-0 z-50 w-full border-b ${bgClass} backdrop-blur-md max-sm:backdrop-blur-xl backdrop-saturate-150 ${borderClass}`}
      {...(theme ? { 'data-theme': theme } : {})}
      data-navbar-theme={navTheme}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 group transition-transform duration-300 hover:scale-105"
        >
          <span className={`text-xl font-bold ${navTheme === 'dark' ? 'text-white group-hover:text-gray-300' : 'text-gray-800 group-hover:text-gray-600'}`}>
            VA Jackie
          </span>
        </Link>
        <HeaderNav data={data} />
      </div>
    </header>
  )
}
