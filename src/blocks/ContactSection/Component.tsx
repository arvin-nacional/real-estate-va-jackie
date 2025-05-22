'use client'

import React from 'react'
import Link from 'next/link'
import { Mail, Phone, Clock, MapPin } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import AnimationWrapper from '@/components/AnimationWrapper'
import { FormBlock, FormBlockType } from '@/blocks/Form/Component'
import type { Form as FormType } from '@payloadcms/plugin-form-builder/types'

// Define interfaces for our component
interface SocialLink {
  platform: string
  url: string
  icon: string
}

export interface ContactSectionBlockProps {
  contactInfo?: {
    email?: string
    phone?: string
    hours?: string
    location?: string
  }
  consultation?: {
    consultationTitle?: string
    consultationDescription?: string
    calendlyUrl?: string
    calendlyButtonText?: string
  }
  social?: {
    socialTitle?: string
    socialLinks?: SocialLink[]
  }
  formSection?: {
    formTitle?: string
    formDescription?: string
    form?: FormType | {
      id: string
      relationTo: string
      value: FormType
    }
  }
  backgroundType?: 'white' | 'colored'
}

export const ContactSectionBlock: React.FC<ContactSectionBlockProps> = ({
  contactInfo = {},
  consultation = {},
  social = {},
  formSection = {},
  backgroundType = 'colored',
}) => {
  // Extract values from nested groups with defaults
  const {
    email = 'contact@realestateVA.com',
    phone = '(555) 123-4567',
    hours = 'Monday - Friday: 9am - 5pm EST',
    location = 'Virtual services available nationwide',
  } = contactInfo || {}
  
  const {
    consultationTitle = 'Schedule a Consultation',
    consultationDescription = 'Book a free 30-minute consultation to discuss your needs and how I can help your real estate business.',
    calendlyUrl = 'https://calendly.com',
    calendlyButtonText = 'Book a Time Slot',
  } = consultation || {}
  
  const {
    socialTitle = 'Follow Me',
    socialLinks = [],
  } = social || {}
  
  const {
    formTitle = 'Send a Message',
    formDescription = 'Fill out the form below and I\'ll get back to you shortly.',
    form = null,
  } = formSection || {}
  // Determine background class based on backgroundType
  const backgroundClass = backgroundType === 'white' ? 'bg-white' : 'bg-gray-50'

  // Default social links if none are provided
  const defaultSocialLinks = [
    {
      platform: 'LinkedIn',
      url: '#',
      icon: 'linkedin',
    },
    {
      platform: 'Instagram',
      url: '#',
      icon: 'instagram',
    },
    {
      platform: 'Twitter',
      url: '#',
      icon: 'twitter',
    },
    {
      platform: 'Facebook',
      url: '#',
      icon: 'facebook',
    },
  ]

  // Use provided social links or default ones
  const socialLinksToRender = (socialLinks && socialLinks.length > 0) ? socialLinks : defaultSocialLinks

  // Function to render the appropriate social icon
  const renderSocialIcon = (icon: string) => {
    switch (icon) {
      case 'linkedin':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        )
      case 'instagram':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        )
      case 'twitter':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
          </svg>
        )
      case 'facebook':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <section className={`w-full py-6 md:py-12 lg:py-24 ${backgroundClass}`}>
      <div className="container px-4 md:px-6">
        <div className="mx-auto grid max-w-5xl gap-6 py-6 lg:grid-cols-2">
          <AnimationWrapper direction="fade" delay={0.1} className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>{email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>{phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>{hours}</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <span>{location}</span>
                </div>
              </div>
            </div>

            <AnimationWrapper direction="fade" delay={0.2}>
              <div>
                <h2 className="text-2xl font-bold mb-4">{consultationTitle}</h2>
                <p className="text-muted-foreground mb-4">
                  {consultationDescription}
                </p>
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href={calendlyUrl} target="_blank">
                    {calendlyButtonText}
                  </Link>
                </Button>
              </div>
            </AnimationWrapper>

            <AnimationWrapper direction="fade" delay={0.3}>
              <div>
                <h2 className="text-2xl font-bold mb-4">{socialTitle}</h2>
                <div className="flex gap-4">
                  {socialLinksToRender.map((social, index) => (
                    <Button key={`social-${index}`} variant="outline" size="icon" asChild>
                      <Link href={social.url} aria-label={social.platform}>
                        {renderSocialIcon(social.icon)}
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
            </AnimationWrapper>
          </AnimationWrapper>

          <AnimationWrapper direction="fade" delay={0.4}>
            {/* Handle both direct form data and relationship format */}
            {form ? (
              // If form is a relationship object from PayloadCMS, extract its value
              <>
                {console.log('Form data:', form)}
                {(() => {
                  let formData: any;
                  if (typeof form === 'object' && form !== null) {
                    if ('value' in form && form.value) {
                      formData = form.value;
                    } else {
                      formData = form;
                    }
                  } else {
                    formData = form;
                  }
                  return (
                    <FormBlock 
                      form={formData as FormType}
                      enableIntro={false} 
                    />
                  );
                })()}
              </>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>{formTitle}</CardTitle>
                  <CardDescription>{formDescription}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Please select a form in the admin panel.</p>
                </CardContent>
              </Card>
            )}
          </AnimationWrapper>
        </div>
      </div>
    </section>
  )
}

export default ContactSectionBlock
