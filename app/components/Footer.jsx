"use client";
import React, { useContext } from "react";
import Head from "next/head";
import { useState, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { MiContexto } from "./context";
const Footer = () => {
  const context = useContext(MiContexto)
  useEffect(() => {
    const body = document.querySelector("body")
    gsap.to(body, {
      background: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(25,44,25,1) 90%)', // Cambiar el fondo al linear gradient
      duration: 1, // Duración de la animación en segundos
      ease: 'power2.easeInOut' // Función de temporización suave
    });    
  }, [])
  

  return (
    <div className="footerContainer">
      <p>
        Contenidos de EDC Tactical protegidos por derechos de autor; uso sin
        permiso puede ser ilegal. ©
      </p>
      <div className="footerMediaLinks">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,100,0,0" />
        <Link href="/Biography" onClick={() => context.setClickedLink("biography")}>
        <span
          class={`footerMediaLink material-symbols-outlined biography`}
        >
          person_book
        </span>
        </Link>
        <Link href="/Courses" onClick={() => context.setClickedLink("courses")}>
        <span
          class={`footerMediaLink material-symbols-outlined courses`}
        >
          school
        </span>
        </Link>
        <Link href="/" onClick={() => context.setClickedLink("home")}>
        <span
          class={`footerMediaLink material-symbols-outlined home`}
        >
          home
        </span>
        </Link>
        <Link href="/Shop" onClick={() => context.setClickedLink("shop")}>
        <span
          class={`footerMediaLink material-symbols-outlined shop`}
        >
          storefront
        </span>
        </Link>
        <Link href="/Cart" onClick={() => context.setClickedLink("cart")}>
        <span
          class={`footerMediaLink material-symbols-outlined cart`}
        >
          shopping_cart
        </span>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
