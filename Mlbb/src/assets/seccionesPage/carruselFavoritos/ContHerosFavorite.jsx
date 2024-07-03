import { HeroeFavorito } from "./HeroFavorito";
import { DesplazamientoCarr } from "../../../funcionesJs/DesplazamientoCarr";
import { Flechas } from "../../../nav-footer-etc/Flechas";
import { Desgarros } from "../../../nav-footer-etc/Desgarros";
import { BotonDeslizador } from "../../../nav-footer-etc/BotonDeslizador";
export function ContHerosFavorite({propContenido}){

    const {desplazamiento, proximo, anterior, totalview} = DesplazamientoCarr(500)
    const contenido = propContenido

    return(
        <div className="presentacionHeroesFav" style={{backgroundImage: 'url(./recursos/fondos/backgroundHeros.jpg)', backgroundSize: 'cover'}}>
            <Desgarros></Desgarros>
            <Flechas flecha1={anterior} flecha2={proximo}></Flechas>
            <div className="cont-HeroesFav" style={{ left: `${desplazamiento}vw`, width: `${totalview}vw`}}>
                {contenido.map((elemento, index) =>(
                    <HeroeFavorito key={index}
                    nombreHeroe={elemento.nombreHeroe}
                    rolHeroe={elemento.rolHeroe}
                    fotoHeroe={elemento.fotoHeroe}
                    descripcionHeroe={elemento.descripcionHeroe}>
                    </HeroeFavorito>
                ))}
            </div>
        </div>
    )
}