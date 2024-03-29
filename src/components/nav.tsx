'use client'

import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
]

export function NavigationBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <Image
                src="/images/memecake_logo.png"
                priority
                alt="MemeCake"
                width={24}
                height={24}
                className="mr-2"
              />
              <span className="font-bubbly text-pink-500">MemeCake</span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 lg:w-[500px] md:w-[400px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col items-center justify-start rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Image
                      src="/images/memecake_logo.png"
                      alt="MemeCake"
                      width={80}
                      height={80}
                    />
                    <div className="mt-4 mb-2 font-bubbly font-medium text-[1.6rem] text-pink-500">
                      MEME CAKE{' '}
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Where every token is a ticket to meme-licious rewards and
                      a world brimming with frosted gains
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/#howtobuy" title="How to buy">
                Click for a simple guide on how to buy your first SOL meme
                token.
              </ListItem>
              <ListItem href="/#tokenomics" title="Tokenomics">
                Our liquidity is burned 🔥 and ownership renounced!
              </ListItem>
              <ListItem href="/#partners" title="Partners">
                We're working with the best meme cake bakers in the world.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <NavigationMenuTrigger>FAQ</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 lg:w-[600px] md:w-[500px] md:grid-cols-2">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
        <NavigationMenuItem>
          <NavigationMenuLink
            href="https://twitter.com/memecakelol"
            target="_blank"
            rel="noreferrer"
            className={navigationMenuTriggerStyle()}
          >
            <Image
              src="/images/socials/x_social_media_icon.svg"
              alt="X"
              height={16}
              width={16}
              className="mr-2"
            />
            Profile
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            <Image
              src="/images/socials/telegram_icon.svg"
              alt="X"
              height={16}
              width={16}
              className="mr-2"
            />
            Telegram
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            <Image
              src="/images/socials/instagram_icon.svg"
              alt="X"
              height={16}
              width={16}
              className="mr-2"
            />
            Instagram
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors focus:bg-accent hover:bg-accent focus:text-accent-foreground hover:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="font-medium text-sm leading-none">{title}</div>
          <p className="line-clamp-2 text-muted-foreground text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
