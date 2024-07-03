import { useState } from "react"

export function DesplazamientoCarr(anchototal){

    const limite = -anchototal + 100;
    const totalview = anchototal
    const [desplazamiento, setDesplazamiento] = useState(0);
    const cantidad = 100
    let movimiento
      
    const anterior = () => {
      let nuevoDesplazamiento = desplazamiento + cantidad
      if (nuevoDesplazamiento > 0) {
        nuevoDesplazamiento = limite
      }
      setDesplazamiento(nuevoDesplazamiento)
    }

    const proximo = () => {
      let nuevoDesplazamiento = desplazamiento - cantidad
      if (nuevoDesplazamiento < limite) {
        nuevoDesplazamiento = 0
      }
      setDesplazamiento(nuevoDesplazamiento)
    }

    const mover = () =>{
      let nuevoDesplazamiento = movimiento
      setDesplazamiento(nuevoDesplazamiento)
    }

    return{
      mover,
      desplazamiento,
      anterior,
      proximo,
      totalview
    }
}