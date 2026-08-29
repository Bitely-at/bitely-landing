'use client'

import * as React from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

export type PhotoCarouselItem = {
  /** Path under /public, e.g. '/images/app/01-scan.svg' */
  src: string
  /** Describe what the screen shows — this is what screen readers announce. */
  alt: string
  /** Short line shown under the frame. */
  caption?: string
}

type PhotoCarouselProps = {
  items: PhotoCarouselItem[]
  /** Aspect ratio of the frame. Landscape by default; use 'aspect-[9/16]' for phone shots. */
  aspect?: string
  /** Time each slide is held, in ms. Set to 0 to disable auto-advance. */
  autoPlayMs?: number
  /** Eager-loads the first slide. Use on above-the-fold carousels. */
  priority?: boolean
  className?: string
  label?: string
}

const SWIPE_THRESHOLD = 60

export function PhotoCarousel({
  items,
  aspect = 'aspect-15/8',
  autoPlayMs = 5000,
  priority = false,
  className,
  label = 'App screenshots',
}: PhotoCarouselProps) {
  const [[index, direction], setSlide] = React.useState<[number, number]>([0, 0])
  const [isPaused, setIsPaused] = React.useState(false)
  const prefersReducedMotion = useReducedMotion()
  const count = items.length

  const go = React.useCallback(
    (next: number, dir: number) => {
      setSlide([((next % count) + count) % count, dir])
    },
    [count],
  )

  const next = React.useCallback(() => go(index + 1, 1), [go, index])
  const prev = React.useCallback(() => go(index - 1, -1), [go, index])

  /* Auto-advance, held while the guest is hovering, focused inside, or on
     another tab — and skipped entirely when reduced motion is requested. */
  React.useEffect(() => {
    if (!autoPlayMs || count < 2 || isPaused || prefersReducedMotion) return

    const timer = window.setInterval(() => {
      if (!document.hidden) next()
    }, autoPlayMs)

    return () => window.clearInterval(timer)
  }, [autoPlayMs, count, isPaused, prefersReducedMotion, next])

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      next()
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      prev()
    }
  }

  if (count === 0) return null

  const active = items[index]

  return (
    <div
      className={cn('mx-auto w-full max-w-5xl', className)}
      role="group"
      aria-roledescription="carousel"
      aria-label={label}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="relative overflow-hidden rounded-2xl border bg-background p-2 shadow-lg shadow-black/5 md:p-3">
        <div className={cn('relative overflow-hidden rounded-xl bg-muted', aspect)}>
          <AnimatePresence initial={false} mode="popLayout" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={{
                enter: (dir: number) => ({
                  opacity: 0,
                  x: prefersReducedMotion ? 0 : dir > 0 ? '8%' : '-8%',
                }),
                center: { opacity: 1, x: 0 },
                exit: (dir: number) => ({
                  opacity: 0,
                  x: prefersReducedMotion ? 0 : dir > 0 ? '-8%' : '8%',
                }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              drag={count > 1 ? 'x' : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={(_, info) => {
                if (info.offset.x < -SWIPE_THRESHOLD) next()
                else if (info.offset.x > SWIPE_THRESHOLD) prev()
              }}
              className="absolute inset-0 cursor-grab active:cursor-grabbing"
            >
              <Image
                src={active.src}
                alt={active.alt}
                fill
                priority={priority && index === 0}
                sizes="(min-width: 1024px) 64rem, 100vw"
                className="pointer-events-none object-contain select-none"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {count > 1 && (
          <>
            <CarouselButton side="left" onClick={prev} label="Previous screenshot" />
            <CarouselButton side="right" onClick={next} label="Next screenshot" />
          </>
        )}
      </div>

      {(active.caption || count > 1) && (
        <div className="mt-5 flex flex-col items-center gap-4">
          {active.caption && (
            <p aria-live="polite" className="text-sm text-muted-foreground">
              {active.caption}
            </p>
          )}

          {count > 1 && (
            <div className="flex items-center gap-2">
              {items.map((item, i) => (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => go(i, i > index ? 1 : -1)}
                  aria-label={`Show screenshot ${i + 1} of ${count}`}
                  aria-current={i === index}
                  className={cn(
                    'h-1.5 rounded-full transition-all duration-300',
                    i === index
                      ? 'w-7 bg-foreground'
                      : 'w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/60',
                  )}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function CarouselButton({
  side,
  onClick,
  label,
}: {
  side: 'left' | 'right'
  onClick: () => void
  label: string
}) {
  const Icon = side === 'left' ? ChevronLeft : ChevronRight

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={cn(
        'absolute top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full',
        'border bg-background/85 text-foreground shadow-sm backdrop-blur-sm',
        'transition-colors duration-200 hover:bg-muted',
        'focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50',
        side === 'left' ? 'left-4 md:left-6' : 'right-4 md:right-6',
      )}
    >
      <Icon className="size-5" strokeWidth={1.5} aria-hidden="true" />
    </button>
  )
}
