import Image from 'next/image'

import { cn } from '@/lib/utils'

type LogoProps = {
  /**
   * 'dark' is the indigo lockup for light surfaces (the default).
   * 'light' is the paper-coloured one — use it on indigo, on photos, or on any
   * dark panel, where the indigo version would disappear into the background.
   */
  variant?: 'dark' | 'light'
  className?: string
  priority?: boolean
}

/* Tight-cropped lockup — the bitten disc with the star, followed by the
   wordmark — on a transparent canvas. No padding, no glow, so the height class
   you pass is the height the logo actually renders at. The star is cut out of
   the disc rather than painted white, which is why the light variant can be a
   straight recolour and still shows the surface through the star. */
const sources = {
  dark: '/images/logo-bitely-wordmark.png',
  light: '/images/logo-bitely-wordmark-light.png',
} as const

export function Logo({ variant = 'dark', className, priority = false }: LogoProps) {
  return (
    <Image
      src={sources[variant]}
      alt="Bitely"
      width={890}
      height={307}
      priority={priority}
      className={cn('h-7 w-auto', className)}
    />
  )
}
