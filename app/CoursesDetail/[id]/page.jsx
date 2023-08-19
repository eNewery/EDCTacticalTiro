"use client"
import { MiContexto } from '@/app/components/context'
import React, { useContext } from 'react'

const CoursesDetail = ({params}) => {
  const data = useContext(MiContexto)
  const filtered = data.course ? data.course.filter(item => item.id == params.id) : console.assert("Puede que algo en el filtrado haya fallado")
  console.log(filtered)
  return (
    filtered.map(item => (
      <div className="course-detail-container">
      <div className="course-detail-content">
        <h2 className="course-detail-title">{item.title}</h2>
        <p className="course-detail-text">{item.text}</p>
      </div>
      <div className="course-detail-hours">
      <a className='course-detail-whatsapp' target='_blank' href={`https://api.whatsapp.com/send?phone=5492234564340&text=Quería hacerte una consulta sobre el curso: ${item.title}`}>
            <div className="whatsapp"></div>
            </a>
        <span className="course-detail-hours-text">{item.hours} horas</span>
      </div>
    </div>
    ))
  )
}

export default CoursesDetail