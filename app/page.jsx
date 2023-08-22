"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import { useContext, useState } from 'react'
import { MiContexto } from './components/context'
import { useRouter } from 'next/router'
export default function Home() {
  const context = useContext(MiContexto)
const [count, setCount] = useState(0)
 const router = useRouter()
function counter(){
  if (count < 3) {
    setCount(count + 1)
  }
  if (count === 3) {
  router.push("/LoginPage")
  }
}
  return (
    <main className='homeContainer'>
      <h1 className='homeTitle'>EDC Tactical</h1>
      <div onClick={() => counter()} className="homeLogo"></div>
      <Link href="/Biography">
      <button onClick={() => context.setClickedLink("biography")} className='homeBtn'>Ver más</button>
      </Link>
    </main>
  )
}
