'use client'
import { CopyIcon } from 'lucide-react'
import copy from 'copy-to-clipboard'
import { toast } from 'sonner'
import { emojiBlast, emojiBlasts } from 'emoji-blast'
import { Button } from '@/components/ui/button'

const TOKEN = 'PLACEHOLDER_1XWA1T41Cd5LVVxHsv91P3Ahq3pcTK'

export const Hero = () => {
  return (
    <div>
      <div className="bg-gradient-to-t from-[#D0F4FE] to-transparent p-8">
        <h1 className="text-center font-bubbly text-[4rem] text-pink-500">
          $MemeCakes
        </h1>
        <h2 className="mb-4 text-center font-bubbly text-[2rem] text-blue-500">
          WIN real meme-themed cupcakes and other prizes!
        </h2>
        <p className="flex justify-center">
          <Button
            onClick={(e) => {
              copy(TOKEN)
              toast('🎉 Copied token to clipboard!')
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
            <span>PLACEHOLDER_1XWA1T41Cd5LVVxHsv91P3Ahq3pcTK</span>
            <CopyIcon size={16} />
          </Button>
        </p>
      </div>
      <div className="h-[800px] w-full bg-center bg-contain bg-hero bg-repeat-x" />
    </div>
  )
}
