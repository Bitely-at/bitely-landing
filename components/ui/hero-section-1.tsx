'use client'

import React from 'react'
import Link from 'next/link'
import {
    ArrowRight,
    ChevronRight,
    Coins,
    LayoutGrid,
    Menu,
    QrCode,
    Sparkles,
    X,
} from 'lucide-react'
import type { Variants } from 'framer-motion'
import { buttonVariants } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { Logo } from '@/components/ui/logo'
import { PhotoCarousel } from '@/components/ui/photo-carousel'
import { cn } from '@/lib/utils'

const transitionVariants: { item: Variants } = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

/* Colour comes from the button variants; only size and radius are set here. */
const primaryCta = 'h-11 rounded-xl px-6 text-base'
const secondaryCta = 'h-11 rounded-xl px-6 text-base'
const navPrimaryCta = 'h-9 rounded-xl px-4 text-sm'
const navSecondaryCta = 'h-9 rounded-xl px-4 text-sm'

export function HeroSection() {
    return (
        <div className="overflow-hidden bg-background">
            <div
                aria-hidden
                className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
                <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
            </div>
            <section id="top">
                <div className="relative pt-24 md:pt-36">
                    <div
                        aria-hidden
                        className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]"
                    />
                    <div className="mx-auto max-w-5xl px-5 md:px-8">
                        <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                            <AnimatedGroup variants={transitionVariants}>
                                <Link
                                    href="#for-restaurants"
                                    className="group mx-auto flex w-fit items-center gap-4 rounded-full border bg-muted p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300 hover:bg-background">
                                    <span className="text-foreground text-sm">
                                        New — an AI recap of every dish, every Monday
                                    </span>
                                    <span className="block h-4 w-0.5 border-l bg-background"></span>

                                    <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                                        <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                            <span className="flex size-6">
                                                <ArrowRight className="m-auto size-3" />
                                            </span>
                                            <span className="flex size-6">
                                                <ArrowRight className="m-auto size-3" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>

                                <h1 className="mx-auto mt-8 max-w-4xl text-balance text-5xl font-medium tracking-tight md:text-6xl lg:mt-16 xl:text-7xl">
                                    Feedback on every dish, not just the meal.
                                </h1>
                                <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                                    Guests scan a QR code at the table, rate each dish they
                                    ordered, and earn loyalty points. Meanwhile you see exactly
                                    which plates are winning and which need work.
                                </p>
                            </AnimatedGroup>

                            <AnimatedGroup
                                variants={{
                                    container: {
                                        visible: {
                                            transition: {
                                                staggerChildren: 0.05,
                                                delayChildren: 0.75,
                                            },
                                        },
                                    },
                                    ...transitionVariants,
                                }}
                                className="mt-12 flex flex-col items-center justify-center gap-3 md:flex-row">
                                <Link
                                    key={1}
                                    href="#demo"
                                    className={cn(
                                        buttonVariants({ size: 'lg' }),
                                        primaryCta,
                                    )}>
                                    <span className="text-nowrap">Request a demo</span>
                                    <ArrowRight className="size-4" />
                                </Link>
                                <Link
                                    key={2}
                                    href="#how-it-works"
                                    className={cn(
                                        buttonVariants({ size: 'lg', variant: 'outline' }),
                                        secondaryCta,
                                    )}>
                                    <span className="text-nowrap">See how it works</span>
                                </Link>
                            </AnimatedGroup>
                        </div>
                    </div>

                    <AnimatedGroup
                        variants={{
                            container: {
                                visible: {
                                    transition: {
                                        staggerChildren: 0.05,
                                        delayChildren: 0.75,
                                    },
                                },
                            },
                            ...transitionVariants,
                        }}>
                        <div className="mt-8 px-5 sm:mt-12 md:mt-20 md:px-8">
                            <PhotoCarousel
                                items={appScreens}
                                priority
                                label="Bitely product screenshots"
                            />
                        </div>
                    </AnimatedGroup>
                </div>
            </section>

            {/* Quiet proof strip in place of the template's customer logo cloud.
                Swap in real customer logos here once they exist. */}
            <section className="bg-background pb-16 pt-16 md:pb-24">
                <div className="m-auto max-w-5xl px-5 md:px-8">
                    <div className="mx-auto grid max-w-3xl grid-cols-2 gap-x-12 gap-y-8 sm:grid-cols-4 sm:gap-x-16">
                        {proofPoints.map((point) => {
                            const Icon = point.icon
                            return (
                                <div
                                    key={point.label}
                                    className="flex flex-col items-center gap-3 text-center">
                                    <Icon
                                        className="size-5 text-foreground"
                                        strokeWidth={1.5}
                                        aria-hidden="true"
                                    />
                                    <span className="text-sm text-muted-foreground">
                                        {point.label}
                                    </span>
                                </div>
                            )
                        })}
                    </div>

                    <div className="mt-10 flex justify-center">
                        <Link
                            href="#how-it-works"
                            className="group inline-flex items-center text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground">
                            <span>See the whole flow</span>
                            <ChevronRight className="ml-1 size-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

/* Real product screenshots. Drop more PNGs into public/images/app/ and add
   them here — the carousel grows arrows, dots and auto-advance on its own as
   soon as there is more than one. */
const appScreens = [
    {
        src: '/images/app/03-dashboard.png',
        alt: 'The Bitely dashboard: average rating, ratings over time, and the best and weakest dishes ranked',
        caption: 'Live per-dish ratings, named plate by plate',
    },
]

const proofPoints = [
    { icon: QrCode, label: 'No app to download' },
    { icon: LayoutGrid, label: 'Per-dish ratings' },
    { icon: Sparkles, label: 'AI weekly recap' },
    { icon: Coins, label: 'Loyalty points built in' },
]

const menuItems = [
    { name: 'How it works', href: '#how-it-works' },
    { name: 'For guests', href: '#for-guests' },
    { name: 'For restaurants', href: '#for-restaurants' },
    { name: 'Why Bitely', href: '#why' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="group pointer-events-none fixed z-20 w-full px-2">
                <div
                    className={cn(
                        'mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12',
                        isScrolled &&
                            'pointer-events-auto max-w-4xl rounded-2xl border bg-background/70 backdrop-blur-lg lg:px-5',
                    )}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="#top"
                                aria-label="home"
                                className="pointer-events-auto flex items-center space-x-2">
                                <Logo priority />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="pointer-events-auto relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        <div className="pointer-events-auto absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            onClick={() => setMenuState(false)}
                                            className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="pointer-events-auto mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border bg-background p-6 shadow-2xl shadow-zinc-300/20 group-data-[state=active]:block md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none lg:group-data-[state=active]:flex">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                onClick={() => setMenuState(false)}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Link
                                    href="#how-it-works"
                                    onClick={() => setMenuState(false)}
                                    className={cn(
                                        buttonVariants({ size: 'sm', variant: 'outline' }),
                                        navSecondaryCta,
                                        isScrolled && 'lg:hidden',
                                    )}>
                                    <span>How it works</span>
                                </Link>
                                <Link
                                    href="#demo"
                                    onClick={() => setMenuState(false)}
                                    className={cn(
                                        buttonVariants({ size: 'sm' }),
                                        navPrimaryCta,
                                        isScrolled && 'lg:hidden',
                                    )}>
                                    <span>Request a demo</span>
                                </Link>
                                <Link
                                    href="#demo"
                                    onClick={() => setMenuState(false)}
                                    className={cn(
                                        buttonVariants({ size: 'sm' }),
                                        navPrimaryCta,
                                        isScrolled ? 'lg:inline-flex' : 'hidden',
                                    )}>
                                    <span>Request a demo</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
