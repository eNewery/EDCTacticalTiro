"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import { useContext } from 'react'
import { MiContexto } from './components/context'
export default function Home() {
  const context = useContext(MiContexto)


  return (
    <main className='homeContainer'>
      <h1 className='homeTitle'>EDC Tactical</h1>
      <div className="homeLogo"></div>
      <Link href="/Biography">
      <button onClick={() => context.setClickedLink("biography")} className='homeBtn'>Ver más</button>
      </Link>
    </main>
  )
}
