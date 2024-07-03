import React, { useState, useEffect } from 'react';
import { Boton } from '../../../nav-footer-etc/Boton';
import { Flechas } from '../../../nav-footer-etc/Flechas';
export function Carrusel({contenido}) {

    const contenidoCarrusel = contenido
    const limite = contenidoCarrusel.length - 1

    const [panel1,setPanel1] = useState({orden: -2, contador: limite-1, desplazamiento: 0, capaInd: 1, efecto: 485})
    const [panel2,setPanel2] = useState({orden: -1, contador: limite, desplazamiento: 0, capaInd: 1, efecto: 485})
    const [panel3,setPanel3] = useState({orden: 0, contador: 0, desplazamiento: 0, capaInd: 1, efecto: 485})
    const [panel4,setPanel4] = useState({orden: 1, contador: 1, desplazamiento: 0, capaInd: 1, efecto: 485})
    const [panel5,setPanel5] = useState({orden: 2, contador: 2, desplazamiento: 0, capaInd: 1, efecto: 485})

    const proximoPanel = () => {
        const nuevosPaneles = [];
    
        // Iterar sobre cada panel
        [panel1, panel2, panel3, panel4, panel5].forEach((panel, index) => {
            let nuevoPanel;
            if (panel.orden === -2) {
                if (panel.contador === limite) {
                    nuevoPanel = { orden: panel.orden + 4, contador: 0, desplazamiento: panel.desplazamiento + 80, capaInd: 0, efecto: 0 };
                } else {
                    nuevoPanel = { orden: panel.orden + 4, contador: panel.contador + 1, desplazamiento: panel.desplazamiento + 80, capaInd: 0, efecto: 0};
                }
            } else {
                nuevoPanel = { orden: panel.orden - 1, contador: panel.contador, desplazamiento: panel.desplazamiento - 20, capaInd: 1, efecto: 485};
            }
            nuevosPaneles[index] = nuevoPanel;
        });
    
        // Actualizar todos los paneles
        setPanel1(nuevosPaneles[0]);
        setPanel2(nuevosPaneles[1]);
        setPanel3(nuevosPaneles[2]);
        setPanel4(nuevosPaneles[3]);
        setPanel5(nuevosPaneles[4]);
    }
    const anteriorPanel = () =>{
        const nuevosPaneles = [];
    
        // Iterar sobre cada panel
        [panel1, panel2, panel3, panel4, panel5].forEach((panel, index) => {
            let nuevoPanel;
            if (panel.orden === 2) {
                if (panel.contador === 0) {
                    nuevoPanel = { orden: panel.orden - 4, contador: limite, desplazamiento: panel.desplazamiento - 80, capaInd: 0, efecto: 0 };
                } else {
                    nuevoPanel = { orden: panel.orden - 4, contador: panel.contador - 1, desplazamiento: panel.desplazamiento - 80, capaInd: 0, efecto: 0};
                }
            } else {
                nuevoPanel = { orden: panel.orden + 1, contador: panel.contador, desplazamiento: panel.desplazamiento + 20, capaInd: 1, efecto: 485};
            }
            nuevosPaneles[index] = nuevoPanel;
        });
    
        // Actualizar todos los paneles
        setPanel1(nuevosPaneles[0]);
        setPanel2(nuevosPaneles[1]);
        setPanel3(nuevosPaneles[2]);
        setPanel4(nuevosPaneles[3]);
        setPanel5(nuevosPaneles[4]);
    }

    return (
        <div className="carrusel">
            <div className="overlay-bottom" style={{background: 'url(./recursos/efectos/bottom.png)'}}></div>
            <Flechas flecha1={anteriorPanel} flecha2={proximoPanel}></Flechas>
            <div className='paneles-carrusel'>

            {/* Primer Panel */}
                {<section className="panel-carrusel" style={{left: `${panel1.desplazamiento}%`, zIndex: `${panel1.capaInd}`, transition: `${panel1.efecto}ms ease-out`}}>
                    <div className='anuncioFoto'>
                        <img src={contenidoCarrusel[panel1.contador].fondo} alt="" />
                    </div>
                    <article className={`${contenidoCarrusel[panel1.contador].clase}`}>
                        <img src={contenidoCarrusel[panel1.contador].anuncio} alt="Anuncio" />
                        <h1>{contenidoCarrusel[panel1.contador].texto}</h1>
                        <Boton tipoBoton="boton1" enlace={contenidoCarrusel[panel1.contador].enlace} contBoton={contenidoCarrusel[panel1.contador].contBoton} visibBoton="flex"></Boton>
                    </article>
                </section>}

            {/* Segundo Panel */}
                {<section className="panel-carrusel" style={{left: `${panel2.desplazamiento}%`, zIndex: `${panel2.capaInd}`, transition: `${panel2.efecto}ms ease-out`}}>
                    <div className='anuncioFoto'>
                        <img src={contenidoCarrusel[panel2.contador].fondo} alt="" />
                    </div>
                    <article className={`${contenidoCarrusel[panel2.contador].clase}`}>
                        <img src={contenidoCarrusel[panel2.contador].anuncio} alt="Anuncio" />
                        <h1>{contenidoCarrusel[panel2.contador].texto}</h1>
                        <Boton tipoBoton="boton1" enlace={contenidoCarrusel[panel2.contador].enlace} contBoton={contenidoCarrusel[panel2.contador].contBoton} visibBoton="flex"></Boton>
                    </article>
                </section>}

            {/* Tercer Panel */}
                {<section className="panel-carrusel" style={{left: `${panel3.desplazamiento}%`, zIndex: `${panel3.capaInd}`, transition: `${panel3.efecto}ms ease-out`}}>
                    <div className='anuncioFoto'>
                        <img src={contenidoCarrusel[panel3.contador].fondo} alt="" />
                    </div>
                    <article className={`${contenidoCarrusel[panel3.contador].clase}`}>
                        <img src={contenidoCarrusel[panel3.contador].anuncio} alt="Anuncio" />
                        <h1>{contenidoCarrusel[panel3.contador].texto}</h1>
                        <Boton tipoBoton="boton1" enlace={contenidoCarrusel[panel3.contador].enlace} contBoton={contenidoCarrusel[panel3.contador].contBoton} visibBoton="flex"></Boton>
                    </article>
                </section>}

            {/* Cuarto Panel */}
                {<section className="panel-carrusel" style={{left: `${panel4.desplazamiento}%`, zIndex: `${panel4.capaInd}`, transition: `${panel4.efecto}ms ease-out`}}>
                    <div className='anuncioFoto'>
                        <img src={contenidoCarrusel[panel4.contador].fondo} alt="" />
                    </div>
                    <article className={`${contenidoCarrusel[panel4.contador].clase}`}>
                        <img src={contenidoCarrusel[panel4.contador].anuncio} alt="Anuncio" />
                        <h1>{contenidoCarrusel[panel4.contador].texto}</h1>
                        <Boton tipoBoton="boton1" enlace={contenidoCarrusel[panel4.contador].enlace} contBoton={contenidoCarrusel[panel4.contador].contBoton} visibBoton="flex"></Boton>
                    </article>
                </section>}

            {/* Quinto Panel */}
                {<section className="panel-carrusel" style={{left: `${panel5.desplazamiento}%`, zIndex: `${panel5.capaInd}`, transition: `${panel5.efecto}ms ease-out`}}>
                    <div className='anuncioFoto'>
                        <img src={contenidoCarrusel[panel5.contador].fondo} alt="" />
                    </div>
                    <article className={`${contenidoCarrusel[panel5.contador].clase}`}>
                        <img src={contenidoCarrusel[panel5.contador].anuncio} alt="Anuncio" />
                        <h1>{contenidoCarrusel[panel5.contador].texto}</h1>
                        <Boton tipoBoton="boton1" enlace={contenidoCarrusel[panel5.contador].enlace} contBoton={contenidoCarrusel[panel5.contador].contBoton} visibBoton="flex"></Boton>
                    </article>
                </section>}

            </div>
        </div>
    )
}