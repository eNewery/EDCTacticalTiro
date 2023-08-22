"use client";
import { useContext, useState, useEffect } from "react";
import { authMiddleware } from "../components/authMiddleware";
import { MiContexto } from "../components/context";
import {
  collection,
  getDocs,
  updateDoc,
  setDoc,
  doc,
  query,
  deleteDoc,
} from "firebase/firestore"; // Importa collection y getDocs para hacer el fetch
import Link from "next/link";
import firebase from "firebase/app";
import "firebase/firestore";

import { db } from "../firebase";
const ProtectedPage = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [hours, setHours] = useState("");
  const [text, setText] = useState("");
  const context = useContext(MiContexto);
  const toggleVisibility = async (itemId, currentVisibility) => {
    const updatedVisibility = !currentVisibility;

    try {
      const docRef = doc(db, "courses", `${itemId}`);
      await updateDoc(docRef, { visible: updatedVisibility });
    } catch (error) {
      console.error("Error updating visibility:", error);
    }
  };
  const addCourse = async (e) => {
    e.preventDefault();
    const data = {
      title: title,
      subtitle: subtitle,
      text: text,
      hours: hours,
      visible: false,
    };
    const id = Date.now();
    await setDoc(doc(db, "courses", `${id}`), data);
    context.setIsCreate(true);
  };

  return (
    <div className="adminPageCourses">
      {context.isCreate === true ? (
        <div className="adminCoursesList">
          <button
            className="adminPageCoursesCreateBtn"
            onClick={() => context.setIsCreate(false)}
          >
            Añadir Curso
          </button>
          <h2 className="adminCoursesListTitle">Lista de Cursos Disponibles</h2>
          {context.course?.map((item) => (
            <div className="course courseAdmin">
              {item.visible === true ? (
                <span
                  onClick={() => toggleVisibility(item.id, item.visible)}
                  class="visibilityBtn material-symbols-outlined"
                >
                  visibility
                </span>
              ) : (
                <span
                  onClick={() => toggleVisibility(item.id, item.visible)}
                  class="visibilityBtn material-symbols-outlined"
                >
                  visibility_off
                </span>
              )}
              <Link className="courseLink" href={`/CoursesDetail/${item.id}`}>
                {item.title}
              </Link>
              <span
                onClick={() => deleteDoc(doc(db, "courses", `${item.id}`))}
                className="material-symbols-outlined courseDelete"
              >
                Delete
              </span>
            </div>
          ))}
        </div>
      ) : (
        <form className="createCourseForm" onSubmit={addCourse}>
          <div className="courseFormTitle">
          <span onClick={() => context.setIsCreate(true)} class="material-symbols-outlined">
arrow_back
</span>
          <h1> Agregar curso!</h1>
          </div>
          <input
            required
            className="courseFormInput"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Titulo"
          />{" "}
          <input
            required
            className="courseFormInput"
            onChange={(e) => setSubtitle(e.target.value)}
            placeholder="Subtítulo"
          />{" "}
          <input
            required
            className="courseFormInput"
            onChange={(e) => setHours(e.target.value)}
            placeholder="Horas del curso"
          />{" "}
          <input
            required
            className="courseFormInput"
            onChange={(e) => setText(e.target.value)}
            placeholder="Descripción del curso"
          />
          <button className="courseFormBtn">Añadir Curso</button>
        </form>
      )}
    </div>
  );
};

export default authMiddleware(ProtectedPage);
