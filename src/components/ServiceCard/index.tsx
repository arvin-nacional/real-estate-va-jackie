import React from 'react'
import * as LucideIcons from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  extended?: boolean
}

export function ServiceCard({ title, description, icon, extended = false }: ServiceCardProps) {
  // Render the icon component safely
  const renderIcon = (icon: string) => {
    switch (icon) {
      case 'ClipBoard':
        return <LucideIcons.ClipboardList className="h-8 w-8 text-gray-600" />
      case 'Chat':
        return <LucideIcons.MessageCircle className="h-8 w-8 text-gray-600" />
      case 'Search':
        return <LucideIcons.Search className="h-8 w-8 text-gray-600" />
      case 'NotePad':
        return <LucideIcons.NotepadText className="h-8 w-8 text-gray-600" />
      case 'Image':
        return <LucideIcons.Image className="h-8 w-8 text-gray-600" />
      case 'MailCheck':
        return <LucideIcons.MailCheck className="h-8 w-8 text-gray-600" />
      default:
        return <LucideIcons.ClipboardCheck className="h-8 w-8 text-gray-600" />
    }
  }

  return (
    <Card
      className={`${extended ? 'h-full' : ''} group transition-all duration-300 hover:shadow-md bg-white border-none shadow-md hover:-translate-y-1`}
    >
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-900/30 transition-all duration-300 group-hover:bg-gray-200 dark:group-hover:bg-gray-800/40">
          {renderIcon(icon)}
        </div>
        <CardTitle className="text-xl transition-colors duration-300 group-hover:text-gray-600 dark:group-hover:text-gray-400">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </CardContent>
    </Card>
  )
}
