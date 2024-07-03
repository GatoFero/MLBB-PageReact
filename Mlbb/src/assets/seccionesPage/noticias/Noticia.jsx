export function Noticia({visible,tituloPequeño,tituloGrande, informacion, iframeLinkYT}){
    return(
        <div className={visible}>
            <div className="presentacion">
                <h2>{tituloPequeño}</h2>
                <h1>{tituloGrande}</h1>
                <p>{informacion}</p>
            </div>
            <section className="iframeNoticia">
                <section className="iframeYT">
                    <iframe allowFullScreen src={iframeLinkYT} frameBorder="0"></iframe>
                </section>
            </section>
        </div>  
    )
}