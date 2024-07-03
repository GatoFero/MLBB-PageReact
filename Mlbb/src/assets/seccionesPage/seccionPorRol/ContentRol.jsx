import { CardHeroeRol } from "./CardHeroRol"

export function ContentRol({cards, ver}){

    const contenido = cards

    return(
        <section className="contentHeroRol" style={{display: `${ver}`}}>
            {contenido.map((elemento, index) =>(
                <CardHeroeRol key={index}
                fotoHero={elemento.foto}
                nombreHero={elemento.nombre}
                descripHero={elemento.descripcion}
                rolHero={elemento.rol}>
                </CardHeroeRol>
            ))}
        </section>
    )
}