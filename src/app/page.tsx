// import Image from 'next/image'

import { NavigationBar } from '@/components/nav'

export default function Home() {
  return (
    <main className="relative bg-white">
      <div className="p-8">
        <NavigationBar />
      </div>
    </main>
  )
}
