import React, { useState, useEffect } from 'react';
import { Boton } from '../../../nav-footer-etc/Boton';

export function SeccionNew({fondoResponsive, fondo, clase, anuncio, enlace, texto, contBoton, posicion }) {
  
  const [fondoIdeal, setFondoIdeal] = useState(fondo)
  const responsiveFondo = () =>{
    const nuevofondo = window.innerWidth < 600? fondoResponsive : fondo
    setFondoIdeal(nuevofondo)
  }

  useEffect(()=>{
    responsiveFondo()
    const handleResize = () => {
      responsiveFondo()
    };

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  
  return (
    <section
      className="sec-carrusel"
      style={{ backgroundImage: `url(${fondoIdeal})`, backgroundSize: 'cover', backgroundPosition: `${posicion}`}}>
      <article className={clase}>
        <img src={anuncio} alt="Anuncio" />
        <h1>{texto}</h1>
        <Boton tipoBoton="boton1" enlace={enlace} contBoton={contBoton} visibBoton="flex"></Boton>
      </article>
    </section>
  );
}