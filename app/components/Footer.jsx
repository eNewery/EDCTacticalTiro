"use client";
import React from "react";
import Head from "next/head";
import { useState, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
const Footer = () => {
  const [clickedLink, setClickedLink] = useState("home");
  useEffect(() => {
    const biography = document.querySelector(".biography");
    const courses = document.querySelector(".courses");
    const home = document.querySelector(".home");
    const shop = document.querySelector(".shop");
    const cart = document.querySelector(".cart");
    if (clickedLink == "biography") {
      biography.classList.add("borderLinkActive");
      courses.classList.remove("borderLinkActive");
      home.classList.remove("borderLinkActive");
      shop.classList.remove("borderLinkActive");
      cart.classList.remove("borderLinkActive");
    }
    if (clickedLink == "courses") {
      courses.classList.add("borderLinkActive");
      biography.classList.remove("borderLinkActive");
      home.classList.remove("borderLinkActive");
      shop.classList.remove("borderLinkActive");
      cart.classList.remove("borderLinkActive");
    }
    if (clickedLink == "home") {
      home.classList.add("borderLinkActive");
      biography.classList.remove("borderLinkActive");
      courses.classList.remove("borderLinkActive");
      shop.classList.remove("borderLinkActive");
      cart.classList.remove("borderLinkActive");
    }
    if (clickedLink == "shop") {
      shop.classList.add("borderLinkActive");
      biography.classList.remove("borderLinkActive");
      courses.classList.remove("borderLinkActive");
      home.classList.remove("borderLinkActive");
      cart.classList.remove("borderLinkActive");
    }
    if (clickedLink == "cart") {
      cart.classList.add("borderLinkActive");
      biography.classList.remove("borderLinkActive");
      courses.classList.remove("borderLinkActive");
      home.classList.remove("borderLinkActive");
      shop.classList.remove("borderLinkActive");
    }



    
  }, [clickedLink]);
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
        <Link href="/Biography" onClick={() => setClickedLink("biography")}>
        <span
          class={`footerMediaLink material-symbols-outlined biography`}
        >
          person_book
        </span>
        </Link>
        <Link href="/Courses" onClick={() => setClickedLink("courses")}>
        <span
          class={`footerMediaLink material-symbols-outlined courses`}
        >
          school
        </span>
        </Link>
        <Link href="/" onClick={() => setClickedLink("home")}>
        <span
          class={`footerMediaLink material-symbols-outlined home`}
        >
          home
        </span>
        </Link>
        <Link href="/Shop" onClick={() => setClickedLink("shop")}>
        <span
          class={`footerMediaLink material-symbols-outlined shop`}
        >
          storefront
        </span>
        </Link>
        <Link href="/Cart" onClick={() => setClickedLink("cart")}>
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
