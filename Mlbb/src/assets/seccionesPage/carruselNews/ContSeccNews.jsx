import { DesplazamientoCarr } from "../../../funcionesJs/DesplazamientoCarr"
import { SeccionNew } from "./SeccionNew"
import { Flechas } from "../../../nav-footer-etc/Flechas"

export function ContSeccNews(){

    const { desplazamiento, anterior, proximo, totalview } = DesplazamientoCarr(400)

    return(
        <div className="cont-carrusel">
            <div className="overlay-bottom" style={{background: 'url(./recursos/efectos/bottom.png)'}}></div>
                <Flechas flecha1={anterior} flecha2={proximo}></Flechas>
            <article className="carruselNews" style={{ left: `${desplazamiento}vw`, width: `${totalview}vw` }}>
                <SeccionNew
                fondoResponsive='./recursos/news/back1responsive.jpg'
                fondo='./recursos/news/back1.jpg'
                clase="contMlbb"
                anuncio="./recursos/logos/logomlbb2.png"
                enlace="https://play.google.com/store/apps/details?id=com.mobile.legends&hl=es_PE&gl=US"
                texto="DEMUESTRA TUS HABILIDADES EN MOBILE LEGENDS"
                contBoton="JUEGA AHORA"
                posicion="bottom"></SeccionNew>
                <SeccionNew fondoResponsive='./recursos/news/back2responsive.jpg' fondo='./recursos/news/back2.jpg'
                clase="nocont" posicion="top"></SeccionNew>
                <SeccionNew fondoResponsive='./recursos/news/back3responsive.jpg' fondo='./recursos/news/back3.jpg'
                clase="nocont" posicion="center"></SeccionNew>
                <SeccionNew fondoResponsive='./recursos/news/back4responsive.jpg' fondo='./recursos/news/back4.jpg'
                clase="nocont" posicion="center"></SeccionNew>
            </article>
        </div>
    )
}