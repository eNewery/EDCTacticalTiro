"use client"
import React, { createContext, useState, useEffect } from 'react';
import { db } from '../firebase'; // Ajusta la ruta de importación según tu estructura de carpetas
import { collection, getDocs } from 'firebase/firestore'; // Importa collection y getDocs para hacer el fetch
const MiContexto = createContext();
const MiContextoProvider = ({ children }) => {
  const [course, setCourse] = useState([])
    const [clickedLink, setClickedLink] = useState("home");
    const [isCreate, setIsCreate] = useState(true)
    const [isEdit, setIsEdit] = useState(false)
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
      // Función para obtener datos de una colección

      
      
      
      
      
    }, [clickedLink]);
    
  
      useEffect(() => {
        async function fetchCollectionData(collectionName) {
          try {
            const querySnapshot = await getDocs(collection(db, collectionName));
            const data = [];
            
            querySnapshot.forEach(doc => {
              data.push({
                id: doc.id,
                ...doc.data()
              });
            });
            
            return data;
          } catch (error) {
            console.error('Error fetching collection data:', error);
            return [];
          }
        }
        const collectionName = 'courses';
        fetchCollectionData(collectionName)
          .then(data => {
            setCourse(data)
          });    
      }, [course])
      
function deleteCourse() {
  console.log("Hola")
}


    return (
      <MiContexto.Provider value={{setClickedLink, course, isCreate, setIsCreate, deleteCourse, isEdit, setIsEdit}}>
        {children}
      </MiContexto.Provider>
    );
  };
  export { MiContexto, MiContextoProvider };