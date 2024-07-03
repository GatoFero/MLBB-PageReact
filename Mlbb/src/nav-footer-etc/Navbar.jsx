import { useState } from "react"

export function Navbar(){

    const [activeMenu, setActiveMenu] = useState(0)
    const [opacidadMenu, setOpacidadMenu] = useState(1)

    const activarMenu = () =>{
        setOpacidadMenu(0)
        setActiveMenu(100)
    }
    const desactivarMenu = () =>{
        setOpacidadMenu(1)
        setActiveMenu(0)
    }
    
    return(
        <header className="navMlbb">
            <section className="navLogos">
                <img src="./recursos/logos/moonton.png" alt="" />
                <img style={{height: '36px'}} src="./recursos/logos/mlbb.png" alt="" />
            </section>
            <nav className="navMenu">
                <ul>
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Juego</a></li>
                    <li><a href="">Heroes</a></li>
                    <li><a href="">Noticias</a></li>
                    <li><a href="">Historia</a></li>
                    <li><a href="">Comunidad</a></li>
                    <li><a href="">eSports</a></li>
                </ul>
            </nav>
            <section className="navBoton">
                <a href="https://discord.com/invite/mobilelegendsbangbang" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-discord fa-2xl"></i>
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.mobile.legends&pli=1" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-google-play fa-2xl"></i>
                </a>
            </section>
            <section className="navRedes">
                <a href="https://www.instagram.com/mlbblatam?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                    <i className="fa-brands fa-instagram fa-lg"></i>
                </a>
                <a href="https://www.facebook.com/MobileLegends/about?locale=es_LA" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-facebook fa-lg"></i>
                </a>
                <a href="https://www.youtube.com/@MobileLegends5v5MOBA/featured" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-youtube fa-lg"></i>
                </a>
                <a href="https://x.com/MobileLegendsOL?s=20" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-x-twitter fa-lg"></i>
                </a>
            </section>
            <button className="botonMenuMobile">
                <i onClick={activarMenu} className="fa-solid fa-bars fa-xl"style={{opacity: `${opacidadMenu}`}}></i>
            </button>
            <div className="menuMobile" style={{width: `${activeMenu+'%'}`, background: 'url(./recursos/fondos/fondoMobile.png) no-repeat center', backgroundSize: 'cover'}}>
                <button className="botonCloseMenu">
                    <i onClick={desactivarMenu} className="fa-regular fa-circle-xmark fa-2xl close" id="close"></i>
                </button>
                <nav className="mobileMenu">
                    <ul>
                        <li><a href="">Inicio</a></li>
                        <li><a href="">Juego</a></li>
                        <li><a href="">Heroes</a></li>
                        <li><a href="">Noticias</a></li>
                        <li><a href="">Historia</a></li>
                        <li><a href="">Comunidad</a></li>
                        <li><a href="">eSports</a></li>
                    </ul>
                </nav>
                <section className="mobileBoton">
                    <a href="https://discord.com/invite/mobilelegendsbangbang" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-discord fa-2xl"></i>
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.mobile.legends&pli=1" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-google-play fa-2xl"></i>
                    </a>
                </section>
                <section className="mobileRedes">
                    <a href="https://www.instagram.com/mlbblatam?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                        <i className="fa-brands fa-instagram fa-lg"></i>
                    </a>
                    <a href="https://www.facebook.com/MobileLegends/about?locale=es_LA" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-facebook fa-lg"></i>
                    </a>
                    <a href="https://www.youtube.com/@MobileLegends5v5MOBA/featured" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-youtube fa-lg"></i>
                    </a>
                    <a href="https://x.com/MobileLegendsOL?s=20" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-x-twitter fa-lg"></i>
                    </a>
                </section>
            </div>
        </header>
    )
}