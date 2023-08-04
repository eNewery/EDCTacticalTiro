"use client"
import React, { createContext, useState, useEffect } from 'react';

const MiContexto = createContext();
const MiContextoProvider = ({ children }) => {
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
    return (
      <MiContexto.Provider value={{setClickedLink}}>
        {children}
      </MiContexto.Provider>
    );
  };
  export { MiContexto, MiContextoProvider };