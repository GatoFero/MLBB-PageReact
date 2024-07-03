import { useState } from "react"
import { Noticia } from "./Noticia"
import { Boton } from "../../../nav-footer-etc/Boton"

export function ContNoticias(){

    const verNoticia = "noticia"
    const noCont = "nocont"
    const verBotonNoticias = "verMasNoticias"
    const [verMas, setVerMas] = useState(noCont)
    const [botonVerMas, setBotonVerMas] = useState(verBotonNoticias)
    const [botonVerMenos, setBotonVerMenos] = useState(noCont)
    
    const verMasNoticias = () =>{
        setVerMas(verNoticia)
        setBotonVerMas(noCont)
        setBotonVerMenos(verBotonNoticias)
    }
    const verMenosNoticias = () =>{
        setVerMas(noCont)
        setBotonVerMas(verBotonNoticias)
        setBotonVerMenos(noCont)
    }
    return(
            <div className="noticias">
                <Noticia
                visible="noticia"
                tituloPequeño="Apariencias de"
                tituloGrande="San Valentin"
                informacion='¡Las apariencias de la serie San Valentín - Granger "Seductor Enigma" y Silvanna "Seductora Mística" harán su dulce estreno el 13/02!'
                iframeLinkYT="https://www.youtube.com/embed/4jCb_YliHd8?si=mPBmCXROqVcdAWhR">
                </Noticia>
                <Noticia
                visible="noticia"
                tituloPequeño="Colaboracion con"
                tituloGrande="Colaboracion con"
                informacion='Yin "Eren", Fanny "Mikasa" y Martis "Levi", los tres miembros del escuadrón del Regimiento de Exploración, ¡están listos para la acción!'
                iframeLinkYT="https://www.youtube.com/embed/LIImChHapiI?si=Bl0qA2LAbu0lKJkv"></Noticia>
                <Noticia
                visible="noticia"
                tituloPequeño="Pase Vip"
                tituloGrande='De Febrero'
                informacion='¡La apariencia exclusiva del VIP de Febrero, Novaria "Glaseado de Azúcar" estará disponible el 01/02!'
                iframeLinkYT="https://www.youtube.com/embed/GQx5jSsmKMc?si=fI3qrgyCbX2__Haw"></Noticia>
                <div className={botonVerMas} onClick={verMasNoticias}>
                    <Boton
                    tipoBoton="boton2"
                    visibBoton="flex"
                    span1={<i className="fa-solid fa-angles-down"></i>}>
                    </Boton>
                </div>
                <Noticia
                visible={verMas}
                tituloPequeño="Heroe Renovado"
                tituloGrande="Aurora"
                informacion='La "Doncella del Glaciar" Aurora hará su reaparición tras una renovación el 31/01.'
                iframeLinkYT="https://www.youtube.com/embed/5W5h0Se-ocY?si=I29oLhnorLGYPQow"></Noticia>
                <Noticia
                visible={verMas}
                tituloPequeño="Nueva Apariencia"
                tituloGrande='Vórtex Temporal'
                informacion='¡La nueva Apariencia Especial de Natan "Vórtex Temporal" debuta el 24/01, con un descuento del 30% durante la primera semana!'
                iframeLinkYT="https://www.youtube.com/embed/dxfUWcRpSSM?si=TDL80UtPHWbsFCT4"></Noticia>
                <Noticia
                visible={verMas}
                tituloPequeño="Nuevo Heroe"
                tituloGrande="Cici"
                informacion='Cono a la nueva Combatiente Cici - "Performer Alegre". Cici el nuevo combatiente que llega a la tierra del amanecer.'
                iframeLinkYT="https://www.youtube.com/embed/Pe23DHOvX3s?si=aTzMHAVXv9HaU0Ry"></Noticia>
                <button className={botonVerMenos} onClick={verMenosNoticias}>
                <Boton
                    tipoBoton="boton2"
                    span2={<i className="fa-solid fa-angles-up"></i>}>
                    </Boton>
                </button>
            </div>
    )
}