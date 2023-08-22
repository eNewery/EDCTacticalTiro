"use client"
import { useContext } from 'react';

import Link from 'next/link';
import { MiContexto } from '../components/context';

const Courses = () => {

  const context = useContext(MiContexto)
const filtered = context.course.filter(item => item.visible === true)
    return (
      <div>
        {filtered.length > 0 ? <div className='coursesContainer'><h1 className='coursesTitle'>Cursos</h1>{filtered.map(item => (
        <Link className='course' href={`/CoursesDetail/${item.id}`}>{item.title}</Link>
        ))}</div> :     <div className="coming-soon-container">
        <h2 className="coming-soon-title">Próximamente...</h2>
        <p className="coming-soon-description">
          ¡Estamos trabajando en nuestros cursos! Pronto tendrás acceso a esta sección.
        </p>
      </div>}
      </div>
    )
  }
  
  export default Courses