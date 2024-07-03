import { Boton } from "../../../nav-footer-etc/Boton"
export function HeroeFavorito({fotoHeroe,nombreHeroe,rolHeroe,descripcionHeroe}){
    return(
        <div className="viewHeroFav">
            <section className="heroFav">
                <aside className="fotoHeroFav">
                    <img src={fotoHeroe} alt="" />
                </aside>
                <main className="textoHeroFav">
                    <div className="nombreHeroFav">
                        <h1><i className="fa-solid fa-star fa-sm"></i> {nombreHeroe}</h1>
                        <p>{rolHeroe}</p>
                    </div>
                    <div className="descripcionHeroeFav">
                        <h2>{descripcionHeroe}</h2>
                    </div>
                    <button className="verHeroe" heroe={nombreHeroe}>
                        <Boton
                        tipoBoton="boton2"
                        visibBoton="flex"
                        contBoton="Ver Heroe"></Boton>
                    </button>
                </main>
            </section>
        </div>
    )
}