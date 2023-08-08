"use client"
import { useContext, useState } from 'react';

import Link from 'next/link';
import { MiContexto } from '../components/context';

const Courses = () => {

  const context = useContext(MiContexto)

    return (
      <div className='coursesContainer'><h1 className='coursesTitle'>Cursos</h1>{context.course.map(item => (
        <Link className='course' href={`/CoursesDetail/${item.id}`}>{item.title}</Link>
        ))}</div>
    )
  }
  
  export default Courses