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

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    <header
      className="sticky top-0 z-50 w-full border-b bg-white/90 dark:bg-gray-900/90 backdrop-blur-md max-sm:backdrop-blur-xl backdrop-saturate-150 border-gray-200/50 dark:border-gray-800/50"
      {...(theme ? { 'data-theme': theme } : {})}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 group transition-transform duration-300 hover:scale-105"
        >
          <span className="text-xl font-bold text-gray-800 dark:text-gray-600 group-hover:text-gray-600 dark:group-hover:text-gray-500">
            VA Jackie
          </span>
        </Link>
        <HeaderNav data={data} />
      </div>
    </header>
  )
}
