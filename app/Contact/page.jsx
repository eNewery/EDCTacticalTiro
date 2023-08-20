import React from "react";

const Contact = () => {
  return (
    <div className="contactContainer">
      <h1 className="coursesTitle">Contactar</h1>
      <form className="formContainer">
        <input className="inputContactForm" placeholder="Nombre" type="text" />
        <input className="inputContactForm" placeholder="E-Mail" type="email" />
        <textarea
          placeholder="Mensaje"
          name=""
          id=""
          cols="30"
          rows="10" className="inputContactForm"
        ></textarea>
        <button className="btnContactForm" type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
