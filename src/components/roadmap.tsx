import {
  RocketIcon,
  MoonIcon,
  ShoppingCartIcon,
  MicroscopeIcon,
} from 'lucide-react'

const roadMapItems = [
  {
    title: '$MEMECAKE Launch',
    icon: RocketIcon,
    listItems: [
      '✅ Partner with cupcake artist',
      '🏗️ Create website & Socials',
      'Launch on Raydium & Jupiter',
      'burn and renounce ownership',
      'First marketing blitz',
      'Start the first giveaways!',
    ],
  },
  {
    title: 'To the Moon(cake) growth!',
    icon: MoonIcon,
    listItems: [
      'Launch MemeCake on coinGecko, CoinMarketCap and other exchanges',
      'Expand giveaways!',
      'Grow and develop the MemeCake community',
      'Share the best cupcake memes',
      'Social media strategy',
    ],
  },
  {
    title: 'MemeCake Shop',
    icon: ShoppingCartIcon,
    listItems: [
      'Launch our MemeCake shop where anyone can buy MemeCakes with $MEMECAKE or SOL tokens',
      'MemeCake holders will receive a discounted rate',
      'Get listed on bigger exchanges',
    ],
  },
  {
    title: 'MemeCake Laboratory',
    icon: MicroscopeIcon,
    listItems: [
      'Develop MemeCake Laboratory, a platform for creating your own meme cakes',
      'Start contests and giveaways for the best MemeCakes',
      'Get featured on the website and have your design made into a real cupcake!',
    ],
  },
]

export const Roadmap = () => {
  return (
    <section className="w-full py-12 lg:py-16 xl:py-24">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3 text-center">
          <h2 className="font-bold font-bubbly text-[2.5rem] text-purple-500 tracking-tighter sm:text-4xl">
            The Roadmap
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 lg:text-base/relaxed md:text-xl/relaxed xl:text-xl/relaxed">
            Join us on our journey as we unleash the power of memes and
            cupcakes.
          </p>
        </div>
        <ul className="grid w-full grid-rows-4 items-start justify-center gap-4 md:grid-cols-4 md:grid-rows-1 lg:gap-6">
          {roadMapItems.map((roadMapItem) => (
            <li className="flex flex-col items-center justify-center space-y-2 rounded-[16px] border border-gray-200 pt-4">
              <div className="my-4 flex h-12 w-12 items-center justify-center rounded-full border border-gray-200">
                <roadMapItem.icon />
              </div>
              <div className="space-y-2 text-center">
                <h3 className="font-bold font-bubbly text-blue-500 text-lg">
                  {roadMapItem.title}
                </h3>
                <ul>
                  {roadMapItem.listItems.map((listItem) => (
                    <li className="border-gray-200 border-b px-4 py-2 text-start text-sm last:border-b-0">
                      {listItem}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
