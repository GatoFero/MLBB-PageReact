import React, { useEffect, useState } from 'react';
import { ContSeccNews } from './assets/seccionesPage/carruselNews/ContSeccNews'
import { Navbar } from './nav-footer-etc/Navbar';
import { ContNoticias } from './assets/seccionesPage/noticias/ContNoticias';
import { PresentacionSeccion } from './nav-footer-etc/PresentacionSeccion';
import { ContHerosFavorite } from './assets/seccionesPage/carruselFavoritos/ContHerosFavorite';
import { Carrusel } from './assets/seccionesPage/carruselNews/Carrusel';
import { ContentHeroesRol } from './assets/seccionesPage/seccionPorRol/ContentHeroesRol';

export function App() {

  const [responsive, setResponsive] = useState()
  const definirPanelResponsive = () =>{
    const establecerResponsive = window.innerWidth < 667? 'responsive' : ''
    setResponsive(establecerResponsive)
  }
  useEffect(()=>{
    definirPanelResponsive()
    const handleResize = () => {
      definirPanelResponsive()
    };

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const contenidoNews = [
    {
      fondo: `./recursos/news/back1${responsive}.jpg`,
      posicion: 'bottom',
      clase: 'contMlbb',
      anuncio: './recursos/logos/logomlbb2.png',
      texto: 'DEMUESTRA TUS HABILIDADES EN MOBILE LEGENDS',
      enlace: 'https://play.google.com/store/apps/details?id=com.mobile.legends&hl=es_PE&gl=US',
      contBoton: 'JUEGA AHORA',
    },
    {
      fondo: `./recursos/news/back2${responsive}.jpg`,
      posicion: 'bottom',
      clase: 'nocont',
      anuncio: '',
      texto: '',
      enlace: '',
      contBoton: '',
    },
    {
      fondo: `./recursos/news/back3${responsive}.jpg`,
      posicion: 'top',
      clase: 'nocont',
      anuncio: '',
      texto: '',
      enlace: '',
      contBoton: '',
    },
    {
      fondo: `./recursos/news/back4${responsive}.jpg`,
      posicion: 'top',
      clase: 'nocont',
      anuncio: '',
      texto: '',
      enlace: '',
      contBoton: '',
    }
  ]
  const contenidoHeroesFav = [
    {
      nombreHeroe: "Balmond",
      rolHeroe: "Combatiente / Jungla",
      fotoHeroe:'./recursos/HeroesFav/balmond.png',
      descripcionHeroe:"Balmond es un guerrero feroz con un hacha colosal y una sed implacable de batalla. Su presencia desata el caos, dejando una estela de destrucción. ¿Te atreves a liderar con la ferocidad indomable de Balmond?"
    },
    {
      nombreHeroe: "Kagura",
      rolHeroe: "Mago / Mid Line",
      fotoHeroe:'./recursos/HeroesFav/kagura.png',
      descripcionHeroe:"Kagura en Mobile Legends es una hechicera maestra del control del clima. Con su sombrilla, desata tormentas y se teletransporta, confundiendo a sus enemigos. ¿Te atreves a dominar la magia con Kagura?"
    },
    {
      nombreHeroe: "Claude",
      rolHeroe: "Combatiente / Jungla",
      fotoHeroe:'./recursos/HeroesFav/claude.png',
      descripcionHeroe:"Embárcate en la velocidad y astucia. Este hábil ladrón utiliza sus habilidades para robar riquezas y evadir a sus perseguidores. Armado con un par de pistolas gemelas, dispara rápidamente a sus enemigos y deja una estela de caos a su paso."
    },
    {
      nombreHeroe: "Karina",
      rolHeroe: "Asesino / Jungla",
      fotoHeroe:'./recursos/HeroesFav/karina.png',
      descripcionHeroe:"Adéntrate en las sombras con Karina. Esta asesina letal acecha en la oscuridad, listo para eliminar a sus presas con precisión letal. Armada con sus dagas mortales, Karina se desliza entre los enemigos con gracia y velocidad."
    },
    {
      nombreHeroe: "Dyrroth",
      rolHeroe: "Combatiente / Jungla",
      fotoHeroe:'./recursos/HeroesFav/dyrroth.png',
      descripcionHeroe:"Embárcate en la furia desatada. Este guerrero sanguinario empuña una gran espada oscura, desatando ataques letales en el campo de batalla. Con su sed de combate insaciable, Dyrroth se lanza hacia sus enemigos con fuerza descomunal."
    }
  ]
  
  return(
    <React.Fragment>
      <Navbar></Navbar>
      <div className='rellenoNav'></div>
      <Carrusel contenido={contenidoNews}></Carrusel>
      <PresentacionSeccion textoPequeño="Nuevas" textoGrande="Noticias"></PresentacionSeccion>
      <ContNoticias></ContNoticias>
      <PresentacionSeccion textoPequeño="Heroes" textoGrande="Favoritos"></PresentacionSeccion>
      <ContHerosFavorite propContenido={contenidoHeroesFav}></ContHerosFavorite>
      <PresentacionSeccion textoPequeño="Escoge Tu" textoGrande="Posicion"></PresentacionSeccion>
      <ContentHeroesRol></ContentHeroesRol>
    </React.Fragment>
  )
}