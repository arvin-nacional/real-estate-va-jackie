'use client'

import React, { useState } from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Menu, X } from 'lucide-react'
import { useMobile } from '@/hooks/use-mobile'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []
  const isMobile = useMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      {isMobile ? (
        <>
          <button onClick={toggleMenu} className="p-2 focus:outline-none" aria-label="Toggle Menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {isMenuOpen && (
            <div className="absolute top-16 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md backdrop-saturate-150 border-b border-gray-200/50 dark:border-gray-800/50 p-4 flex flex-col space-y-4 shadow-lg">
              {navItems.map(({ link }, i) => (
                <div key={i} onClick={() => setIsMenuOpen(false)}>
                  <CMSLink
                    {...link}
                    appearance="link"
                    className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-400 transition-all duration-300 hover:translate-x-1"
                  />
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <nav className="flex gap-6">
          {navItems.map(({ link }, i) => (
            <CMSLink
              key={i}
              {...link}
              appearance="link"
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-400 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gray-600 dark:after:bg-gray-400 after:transition-all after:duration-300 hover:after:w-full no-underline hover:no-underline"
            />
          ))}
        </nav>
      )}
    </>
  )
}
