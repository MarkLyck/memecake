// import Image from 'next/image'

import { NavigationBar } from '@/components/nav'
import { Hero } from '@/components/hero'

export default function Home() {
  return (
    <main className="relative bg-white">
      <div className="p-8">
        <NavigationBar />
      </div>
      <Hero />
    </main>
  )
}
