export function Boton({tipoBoton, enlace, contBoton, visibBoton,span1,span2}){
    return(
        <div className={tipoBoton} style={{display: `${visibBoton}`}}>
          <span>{span1}</span>
          <span>{span2}</span>
          <a href={enlace} target="_blank" rel="noopener noreferrer">
            {contBoton}
          </a>
        </div>
    )
}