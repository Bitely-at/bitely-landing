import Image from 'next/image'

import { cn } from '@/lib/utils'

type LogoProps = {
  /**
   * 'dark' is the navy wordmark for light surfaces (the default).
   * 'light' is the paper-coloured one — use it on navy, on photos, or on any
   * dark panel, where the navy version would disappear into the background.
   */
  variant?: 'dark' | 'light'
  className?: string
  priority?: boolean
}

/* Tight-cropped wordmark on a transparent canvas — no padding, no glow, so the
   height class you pass is the height the word actually renders at. */
const sources = {
  dark: '/images/logo-bitely-wordmark.png',
  light: '/images/logo-bitely-wordmark-light.png',
} as const

export function Logo({ variant = 'dark', className, priority = false }: LogoProps) {
  return (
    <Image
      src={sources[variant]}
      alt="Bitely"
      width={471}
      height={223}
      priority={priority}
      className={cn('h-7 w-auto', className)}
    />
  )
}
