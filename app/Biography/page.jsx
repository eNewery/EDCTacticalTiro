import React from 'react'

const Biography = () => {
  return (
    <div className="biographyContainer">
      <div className="header">
        <h1>Nicolas Rizzo</h1>
        <p>Fecha de nacimiento: DD/MM/AAAA</p>
      </div>
      <div className="bio">
        <h2>Biografía</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nihil maxime eligendi molestiae molestias porro, quaerat vitae fugiat iure perspiciatis eveniet ipsum, hic magni fuga error, quas sapiente quo voluptas.
          Molestiae quo nam necessitatibus similique qui quasi accusantium, aliquid fuga iste cupiditate deserunt, voluptatibus ipsam, fugiat perspiciatis maiores eos aliquam eius quod sequi odit asperiores dolores. Reprehenderit odio aliquid cupiditate?
          Aut excepturi repellat impedit labore amet illo dolor consequatur ullam, natus quas soluta hic ut nemo quo praesentium aliquam deleniti voluptates magnam a fuga non, nostrum quis. Ut, accusantium modi?
        </p>
      </div>
      <div className="experience">
        <h2>Experiencia</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, in cum molestias laudantium adipisci doloribus natus quaerat voluptates dolores. Quisquam, voluptates suscipit asperiores non provident modi quasi assumenda placeat. Quod.
          Dolor dicta dolores numquam reprehenderit, qui harum ullam iusto error incidunt beatae a aut sapiente velit, minus deleniti ex saepe quia quo. Nisi perferendis voluptatibus molestias, consectetur inventore assumenda hic!
          Error harum cupiditate cumque, eaque pariatur expedita quas laborum maxime blanditiis veritatis. Molestiae omnis laboriosam enim quis mollitia quae ipsa iusto, perferendis dicta in. Ipsam sequi aliquid enim praesentium blanditiis!
        </p>
      </div>
     
      <div className="contact">
        <div>
        <h2>Contacto</h2>
        <p>Correo: correo@example.com</p>
        <p>Teléfono: (123) 456-7890</p>
        <p>Dirección: </p>
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