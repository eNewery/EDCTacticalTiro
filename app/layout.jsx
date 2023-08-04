"use client"
import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'
import { gsap } from "gsap";
import { useEffect } from 'react';


export const metadata = {
  title: 'EDC Tactical',
  description: 'Escuela de Tiro',
}

export default function RootLayout({ children }) {
  useEffect(() => {
    const body = document.querySelector("body")
    gsap.to(body, {
      background: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(25,44,25,1) 90%)', // Cambiar el fondo al linear gradient
      duration: 1, // Duración de la animación en segundos
      ease: 'power2.easeInOut' // Función de temporización suave
    });
  }, [])
  return (
    <html lang="en">
      <body className='container'><Header/>{children}<Footer/></body>
    </html>
  )
}
