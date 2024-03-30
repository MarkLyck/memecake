'use client'

import { CopyIcon } from 'lucide-react'
import copy from 'copy-to-clipboard'
import { toast } from 'sonner'
import { emojiBlast } from 'emoji-blast'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

import { AspectRatio } from '@/components/ui/aspect-ratio'

const TOKEN = 'COMING_SOON_5LVVxHsv91P3Ahq3pcTK'

export const Hero = () => {
  return (
    <div className="relative">
      <div className="bg-gradient-to-t from-[#D0F4FE] to-transparent p-8">
        <h1 className="text-center font-bubbly text-[4rem] text-pink-500">
          MemeCake
        </h1>
        <h2 className="mb-4 text-center font-bubbly text-[2rem] text-blue-500">
          WIN real meme-filled cupcakes and other prizes!
        </h2>
        <p className="flex justify-center">
          <Button
            onClick={(e) => {
              copy(TOKEN)
              toast('🎉 Copied token address to clipboard!')
              emojiBlast({
                emojis: [
                  '🧁',
                  '🎂',
                  '🍰',
                  '🧁',
                  '🍥',
                  '🥮',
                  '🤑',
                  '😃',
                  '🧁',
                  '🌈',
                  '😹',
                  '😀',
                  '😁',
                  '🧁',
                  '🫠',
                  '🍆',
                  '🙀',
                  '🧀',
                  '🧁',
                  '🎉',
                  '🥳',
                  '🎊',
                ],
                position: () => ({
                  x: e.clientX,
                  y: e.clientY,
                }),
              })
            }}
            variant="outline"
            className="flex items-center justify-center gap-4 rounded-full p-4 text-center"
          >
            <span>{TOKEN}</span>
            <CopyIcon size={16} />
          </Button>
        </p>
      </div>
      <AspectRatio ratio={1.75 / 1}>
        <Image fill src="/images/hero.webp" alt="memecake banner" />
      </AspectRatio>
    </div>
  )
}
