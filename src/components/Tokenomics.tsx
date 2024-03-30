import Image from 'next/image'

const tokenomicsMemes = [
  {
    title: 'Liquidity burned',
    src: '/images/memes/this_is_fine_cupcake.webp',
  },
  {
    title: 'Mint authority revoked',
    src: '/images/memes/money_printer_go_brrr_cupcake.webp',
  },
  {
    title: '1 Billion supply',
    src: '/images/memes/1_billion_dollars.webp',
  },
  {
    title: '0% taxes',
    src: '/images/memes/jackie_chan.webp',
  },
]

export const Tokenomics = () => (
  <div className="p-8">
    <h2 className="mb-8 text-center font-bubbly text-[2.5rem] text-green-500">
      Tokenomics
    </h2>
    <ul className="flex flex-wrap justify-center gap-8">
      {tokenomicsMemes.map((tokenomic) => (
        <li className="flex flex-col items-center gap-2">
          <Image
            className="rounded-[16px] border-2"
            key={tokenomic.title}
            height={160}
            width={160}
            src={tokenomic.src}
            alt={tokenomic.title}
          />
          <h5 className="text-center font-bold">{tokenomic.title}</h5>
        </li>
      ))}
    </ul>
  </div>
)
