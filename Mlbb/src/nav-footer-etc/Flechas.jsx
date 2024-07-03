export function Flechas({flecha1, flecha2}){
    return(
            <aside className="flechas">
                <span className="arrowIzquierda" onClick={flecha1}>
                    <i className="fa-solid fa-chevron-left fa-2xl"></i>
                </span>
                <span className="arrowDerecha" onClick={flecha2}>
                    <i className="fa-solid fa-chevron-right fa-2xl"></i>
                </span>
            </aside>
    )
}