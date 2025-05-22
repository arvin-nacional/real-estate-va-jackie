'use client'

import React from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  ClipboardCheck,
  PieChart,
  MessageSquare,
  MailCheck,
  FileText,
  Calendar,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import AnimationWrapper from '@/components/AnimationWrapper'
import { GlowingEffect } from '@/components/GlowingEffect'
import type { GlowServicesBlock as GlowServicesBlockType } from '@/payload-types'

interface ServiceCardProps {
  title: string
  description: string
  glow?: boolean
  icon?: React.ReactNode
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, glow = false, icon }) => {
  return (
    <div className="relative h-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md">
      {/* Glow effect */}
      <GlowingEffect
        blur={15}
        spread={60}
        borderWidth={3}
        disabled={!glow}
        inactiveZone={0.3}
        proximity={150}
      />

      <div className="relative z-10 flex h-full flex-col">
        {icon && <div className="mb-3 text-primary">{icon}</div>}
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="mb-4 flex-grow text-gray-600">{description}</p>
      </div>
    </div>
  )
}

// Map icon name from admin panel to component
const getIconComponent = (iconName: string | undefined) => {
  switch (iconName) {
    case 'clipboard':
      return <ClipboardCheck size={24} />;
    case 'chart':
      return <PieChart size={24} />;
    case 'message':
      return <MessageSquare size={24} />;
    case 'mail':
      return <MailCheck size={24} />;
    case 'file':
      return <FileText size={24} />;
    case 'calendar':
      return <Calendar size={24} />;
    default:
      return <ClipboardCheck size={24} />;
  }
};

// Fallback function to get icon by index (for default services)
const getServiceIcon = (index: number) => {
  const icons = [
    <ClipboardCheck key="admin" size={24} />,
    <MessageSquare key="message" size={24} />,
    <MailCheck key="mail" size={24} />,
    <FileText key="file" size={24} />,
    <Calendar key="calendar" size={24} />,
    <PieChart key="chart" size={24} />
  ];
  return icons[index % icons.length];
};

export const GlowServicesBlock: React.FC<GlowServicesBlockType> = ({
  heading,
  subheading,
  services,
  enableGlow = true,
  buttonText,
  buttonLink,
}) => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <AnimationWrapper
          className="flex flex-col items-center justify-center space-y-4 text-center"
          direction="fade"
          distance={20}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-800">
              {heading || 'Our Services'}
            </h2>
            <AnimationWrapper delay={0.2} direction="fade">
              <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                {subheading ||
                  'We offer a comprehensive range of virtual assistance services to help you grow.'}
              </p>
            </AnimationWrapper>
          </div>
        </AnimationWrapper>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {services && services.length > 0 ? (
            services.map((service, index) => (
              <AnimationWrapper
                key={`service-${index}`}
                direction="up"
                delay={0.1 * (index + 1)}
                className="h-full"
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  glow={enableGlow ?? true}
                  icon={getIconComponent(service.icon)}
                />
              </AnimationWrapper>
            ))
          ) : (
            <>
              <AnimationWrapper direction="up" delay={0.1} className="h-full">
                <ServiceCard
                  title="Administrative Support"
                  description="Comprehensive administrative assistance to keep your business operations running smoothly."
                  glow={enableGlow ?? true}
                  icon={<ClipboardCheck size={24} />}
                />
              </AnimationWrapper>

              <AnimationWrapper direction="up" delay={0.2} className="h-full">
                <ServiceCard
                  title="Social Media Management"
                  description="Strategic social media planning and execution to boost your online presence."
                  glow={enableGlow ?? true}
                  icon={<PieChart size={24} />}
                />
              </AnimationWrapper>

              <AnimationWrapper direction="up" delay={0.3} className="h-full">
                <ServiceCard
                  title="Email Management"
                  description="Efficient inbox management to ensure you never miss important communications."
                  glow={enableGlow ?? true}
                  icon={<MailCheck size={24} />}
                />
              </AnimationWrapper>
            </>
          )}
        </div>

        {buttonText && buttonLink && (
          <AnimationWrapper className="flex justify-center mt-12" direction="up" delay={0.4}>
            <Link href={buttonLink}>
              <Button
                variant="outline"
                className="border-gray-200 text-gray-600 hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-sm"
              >
                {buttonText}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </AnimationWrapper>
        )}
      </div>
    </section>
  )
}
