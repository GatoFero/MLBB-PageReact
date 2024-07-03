export function PresentacionSeccion({textoPequeño, textoGrande}){
    return(
        <div className="presentacionSeccion">
            <section className="tituloPequeño">
                <span></span>
                <h2>{textoPequeño}</h2>
                <span></span>
            </section>
            <section className="tituloGrande">
                <span></span>
                <h1>{textoGrande}</h1>
                <span></span>
            </section>
        </div>
    )
}