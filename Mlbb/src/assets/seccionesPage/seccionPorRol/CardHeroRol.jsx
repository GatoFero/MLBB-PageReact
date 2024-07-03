export function CardHeroeRol({fotoHero, nombreHero, descripHero, rolHero}){

    return(
        <section className="cardHeroeRol">
            <div className="fotoHeroeRol">
                <img src={fotoHero} alt="" />
            </div>
            <div className="textoHeroeRol">
                <h1>{nombreHero}</h1>
                <p>{descripHero}</p>
            </div>
            <main className="efectoFotoRol" style={{backgroundImage: `url(${rolHero})`, backgroundPositionX: 'right', backgroundPositionY: 'center'}}></main>
            <span></span>
        </section>
    )
}