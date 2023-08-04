"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { gsap } from "gsap";
import { useEffect } from 'react';
export default function Home() {
  useEffect(() => {
    const body = document.querySelector("body")
    gsap.to(body, {
      background: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(25,44,25,1) 90%)', // Cambiar el fondo al linear gradient
      duration: 1, // Duración de la animación en segundos
      ease: 'power2.easeInOut' // Función de temporización suave
    });
  }, [])
  
  return (
    <main>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,100,0,0" />

    </main>
  )
}
