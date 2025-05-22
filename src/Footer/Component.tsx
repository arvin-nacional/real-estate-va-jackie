import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import type { Footer } from '@/payload-types'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()

  const navItems = footerData?.navItems || []
  const address = footerData?.address || ''
  const phone = footerData?.phone || ''
  const email = footerData?.email || ''
  const description = footerData?.description || ''
  const theme = footerData?.theme || 'light'

  // Define theme classes based on the selected theme
  const bgClass = theme === 'dark' ? 'bg-gray-900' : 'bg-white'
  const borderClass = theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
  const textPrimaryClass = theme === 'dark' ? 'text-white' : 'text-gray-800'
  const textSecondaryClass = theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
  
  return (
    <footer className={`w-full border-t ${borderClass} ${bgClass} py-6 md:py-8`}>
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3 w-[250px]">
            <Link className="flex items-center" href="/">
              <h1 className={`text-2xl font-bold ${textPrimaryClass}`}>VA Jackie</h1>
            </Link>
            <p className={`text-sm ${textSecondaryClass}`}>{description}</p>
            {/* <ThemeSelector /> */}
          </div>

          <div>
            <h3 className={`text-lg font-medium mb-3 ${textPrimaryClass}`}>Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {navItems.map(({ link }, i) => {
                return <CMSLink className={`${textSecondaryClass} text-sm hover:opacity-80`} key={i} {...link} />
              })}
            </nav>
          </div>
          <div>
            <h3 className={`text-lg font-medium mb-3 ${textPrimaryClass}`}>Contact</h3>
            <address className={`not-italic text-sm ${textSecondaryClass} space-y-2`}>
              <p>{address}</p>
              <p>{phone}</p>
              <p>{email}</p>
            </address>
          </div>
        </div>
      </div>
      <div className={`mt-8 border-t ${borderClass} pt-6 text-center text-sm ${textSecondaryClass}`}>
        <p>© {new Date().getFullYear()} Real Estate VA Jackie. All rights reserved.</p>
      </div>
    </footer>
  )
}
