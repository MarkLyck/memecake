// import Image from 'next/image'

import { NavigationBar } from '@/components/nav'
import { Hero } from '@/components/hero'
import { Tokenomics } from '@/components/Tokenomics'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="relative bg-white">
      <div className="flex justify-center p-8">
        <NavigationBar />
      </div>
      <Hero />
      <Tokenomics />
      <Footer />
    </main>
  )
}
