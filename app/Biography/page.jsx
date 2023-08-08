import React from 'react'

const Biography = () => {
  return (
    <div className="biographyContainer">
      <div className="header">
        <h1>Nicolas Rizzo</h1>
        <p>Instructor Habilitado ANMaC</p>
      </div>
      <div className="bio">
        <h2>EDC Tactical</h2>
        <p>
        El ideal del espacio de formación de EDC Tactical es la interacción gradual pero constante en el acercamiento a las armas de fuego en su totalidad, es por eso que desde el inicio se brindan las horas de teoría necesarias y acordes al nivel del usuario para alcanzar los contenidos necesarios y poder realizar las prácticas en polígonos de forma segura. En este sentido, que cada uno de los marcos teóricos se brindan a grupos reducidos para evaluar y asegurar que el tirador está realmente preparado para enfrentar la posición, las medidas de seguridad, el comportamiento y las reglamentaciones establecidas por ANMaC las cuales son fundamentales para la seguridad de todos, considerando que los usuarios aspiran a tener armas de fuego en los domicilios. Los tiradores son evaluados durante la formación fundamentalmente en el contenido teórico en medidas de seguridad con prácticas en seco, simuladores laser y finalmente practica con tiro vivo en el polígono.
Es importante comprender que los usuarios que se están formando en Idoneidad estarán incorporando un nuevo lenguaje que también es parte de su formación y serán evaluados de manera estricta para que al momento de iniciar su práctica en Polígonos conozcan las llamadas de alerta y términos clave que utilizamos los Instructores y/o Comisarios del Polígono para detener todo tipo de práctica riesgosa que se esté realizando y como accionar. 
Para la Escuela EDC Tatical MDQ es primordial la seguridad y la integridad en la información que se brinda en la totalidad del desarrollo del entrenamiento. 
El desarrollo de las mismas se brinda con material teórico, videos, imágenes y material de practica como cuadernillo, armas inertes, material de seguridad, etc
        </p>
      </div>
      <div className="experience">
        <h2>Nuestro Objetivo</h2>
        <p>
        El objetivo principal de estos cursos es dar a los participantes las herramientas necesarias para el uso adecuado y seguro al momento de empuñar un arma de fuego, fomentando por supuesto, el continuo entrenamiento para lograr el rendimiento, adquirir habilidades técnicas, fortalecer la disciplina y determinación y potenciar la seguridad de los tiradores en general.
        </p>
      </div>
     
      <div className="contact">
        <div>
        <h2>Contacto</h2>
        <p>Teléfono: +54 9 2234 56-4340</p>
        </div>
        <div className="rrss">
            <a target='_blank' href="https://www.instagram.com/edctacticalmdp/">
            <div className="instagram"></div>
            </a>

            <a target='_blank' href="https://www.facebook.com/profile.php?id=100095289031827">
            <div className="facebook"></div>
            </a>

            <a target='_blank' href="https://wa.link/aqfac0">
            <div className="whatsapp"></div>
            </a>
        </div>
      </div>
    </div>
  )
}

export default Biography;