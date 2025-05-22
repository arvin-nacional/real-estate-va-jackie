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

  return (
    <footer className="w-full border-t bg-white py-6 md:py-8">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3 w-[250px]">
            <Link className="flex items-center" href="/">
              <h1 className="text-2xl font-bold text-gray-800">VA Jackie</h1>
            </Link>
            <p className="text-sm text-gray-600">{description}</p>
            <ThemeSelector />
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3 text-gray-800">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {navItems.map(({ link }, i) => {
                return <CMSLink className="text-gray-600 text-sm" key={i} {...link} />
              })}
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-3 text-gray-800">Contact</h3>
            <address className="not-italic text-sm text-gray-600 space-y-2">
              <p>{address}</p>
              <p>{phone}</p>
              <p>{email}</p>
            </address>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t pt-6 text-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Real Estate VA Jackie. All rights reserved.</p>
      </div>
    </footer>
  )
}
