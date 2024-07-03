import { DesplazamientoCarr } from "../funcionesJs/DesplazamientoCarr"

export function BotonDeslizador({cantidadM}){

    const {mover} = DesplazamientoCarr
    return(
        <a className="desplazadorCheck"  cantidadMover={cantidadM} onClick={mover}></a>
    )
}