import { useState } from "react"
import { ContentRol } from "./ContentRol"

export function ContentHeroesRol(){

    const asesinos = [
        {
          foto: './recursos/seccionRoles/asesinos/seccFanny.png',
          nombre: 'Fanny',
          descripcion: 'Con su imponente ancla gigante, hábil para enganchar a sus enemigos y liderar con valentía en la batalla. Su resistencia y control son clave para proteger a su equipo.',
          rol: './recursos/seccionRoles/asesinos/fondoSeccionAse.png'
        },
        {
          foto: './recursos/seccionRoles/asesinos/seccHaya.png',
          nombre: 'Hayabusa',
          descripcion: 'Con su imponente ancla gigante, hábil para enganchar a sus enemigos y liderar con valentía en la batalla. Su resistencia y control son clave para proteger a su equipo.',
          rol: './recursos/seccionRoles/asesinos/fondoSeccionAse.png'
        },
        {
          foto: './recursos/seccionRoles/asesinos/seccGusion.png',
          nombre: 'Gusion',
          descripcion: 'Con su imponente ancla gigante, hábil para enganchar a sus enemigos y liderar con valentía en la batalla. Su resistencia y control son clave para proteger a su equipo.',
          rol: './recursos/seccionRoles/asesinos/fondoSeccionAse.png'
        },
        {
          foto: './recursos/seccionRoles/asesinos/seccHel.png',
          nombre: 'Helcurt',
          descripcion: 'Con su imponente ancla gigante, hábil para enganchar a sus enemigos y liderar con valentía en la batalla. Su resistencia y control son clave para proteger a su equipo.',
          rol: './recursos/seccionRoles/asesinos/fondoSeccionAse.png'
        },
        {
          foto: './recursos/seccionRoles/asesinos/seccLance.png',
          nombre: 'Lancelot',
          descripcion: 'Con su imponente ancla gigante, hábil para enganchar a sus enemigos y liderar con valentía en la batalla. Su resistencia y control son clave para proteger a su equipo.',
          rol: './recursos/seccionRoles/asesinos/fondoSeccionAse.png'
        },
        {
          foto: './recursos/seccionRoles/asesinos/seccKarina.png',
          nombre: 'Karina',
          descripcion: 'Con su imponente ancla gigante, hábil para enganchar a sus enemigos y liderar con valentía en la batalla. Su resistencia y control son clave para proteger a su equipo.',
          rol: './recursos/seccionRoles/asesinos/fondoSeccionAse.png'
        }
      ]
    const soportes = [
        {
          foto: './recursos/seccionRoles/suports/seccAngela.png',
          nombre: 'Angela',
          descripcion: 'Con su imponente ancla gigante, hábil para enganchar a sus enemigos y liderar con valentía en la batalla. Su resistencia y control son clave para proteger a su equipo.',
          rol: './recursos/seccionRoles/suports/fondoSeccionSup.png'
        },
        {
          foto: './recursos/seccionRoles/suports/seccDiguie.png',
          nombre: 'Digguie',
          descripcion: 'Con su imponente ancla gigante, hábil para enganchar a sus enemigos y liderar con valentía en la batalla. Su resistencia y control son clave para proteger a su equipo.',
          rol: './recursos/seccionRoles/suports/fondoSeccionSup.png'
        },
        {
          foto: './recursos/seccionRoles/suports/seccEstes.png',
          nombre: 'Estes',
          descripcion: 'Con su imponente ancla gigante, hábil para enganchar a sus enemigos y liderar con valentía en la batalla. Su resistencia y control son clave para proteger a su equipo.',
          rol: './recursos/seccionRoles/suports/fondoSeccionSup.png'
        },
        {
          foto: './recursos/seccionRoles/suports/seccFaramis.png',
          nombre: 'Faramis',
          descripcion: 'Con su imponente ancla gigante, hábil para enganchar a sus enemigos y liderar con valentía en la batalla. Su resistencia y control son clave para proteger a su equipo.',
          rol: './recursos/seccionRoles/suports/fondoSeccionSup.png'
        },
        {
          foto: './recursos/seccionRoles/suports/seccKaja.png',
          nombre: 'Kaja',
          descripcion: 'Con su imponente ancla gigante, hábil para enganchar a sus enemigos y liderar con valentía en la batalla. Su resistencia y control son clave para proteger a su equipo.',
          rol: './recursos/seccionRoles/suports/fondoSeccionSup.png'
        },
        {
          foto: './recursos/seccionRoles/suports/seccRafaela.png',
          nombre: 'Rafaela',
          descripcion: 'Con su imponente ancla gigante, hábil para enganchar a sus enemigos y liderar con valentía en la batalla. Su resistencia y control son clave para proteger a su equipo.',
          rol: './recursos/seccionRoles/suports/fondoSeccionSup.png'
        }
      ]
    const tanques = [
        {
          foto: './recursos/seccionRoles/tanques/seccAkai.png',
          nombre: 'Akai',
          descripcion: 'Con su imponente ancla gigante, hábil para enganchar a sus enemigos y liderar con valentía en la batalla. Su resistencia y control son clave para proteger a su equipo.',
          rol: './recursos/seccionRoles/tanques/fondoSeccionTank.png'
        },
        {
          foto: './recursos/seccionRoles/tanques/seccAtlas.png',
          nombre: 'Atlas',
          descripcion: 'Con su imponente ancla gigante, hábil para enganchar a sus enemigos y liderar con valentía en la batalla. Su resistencia y control son clave para proteger a su equipo.',
          rol: './recursos/seccionRoles/tanques/fondoSeccionTank.png'
        },
        {
          foto: './recursos/seccionRoles/tanques/seccBelerick.png',
          nombre: 'Belerick',
          descripcion: 'Con su imponente ancla gigante, hábil para enganchar a sus enemigos y liderar con valentía en la batalla. Su resistencia y control son clave para proteger a su equipo.',
          rol: './recursos/seccionRoles/tanques/fondoSeccionTank.png'
        },
        {
          foto: './recursos/seccionRoles/tanques/seccFranco.png',
          nombre: 'Franco',
          descripcion: 'Con su imponente ancla gigante, hábil para enganchar a sus enemigos y liderar con valentía en la batalla. Su resistencia y control son clave para proteger a su equipo.',
          rol: './recursos/seccionRoles/tanques/fondoSeccionTank.png'
        },
        {
          foto: './recursos/seccionRoles/tanques/seccGatot.png',
          nombre: 'Gatotkaka',
          descripcion: 'Con su imponente ancla gigante, hábil para enganchar a sus enemigos y liderar con valentía en la batalla. Su resistencia y control son clave para proteger a su equipo.',
          rol: './recursos/seccionRoles/tanques/fondoSeccionTank.png'
        },
        {
          foto: './recursos/seccionRoles/tanques/seccKhufra.png',
          nombre: 'Khufra',
          descripcion: 'Con su imponente ancla gigante, hábil para enganchar a sus enemigos y liderar con valentía en la batalla. Su resistencia y control son clave para proteger a su equipo.',
          rol: './recursos/seccionRoles/tanques/fondoSeccionTank.png'
        }
      ]
    const tiradores = [
        {
          foto: './recursos/seccionRoles/tiradores/seccBruno.png',
          nombre: 'Bruno',
          descripcion: 'Con su imponente ancla gigante, hábil para enganchar a sus enemigos y liderar con valentía en la batalla. Su resistencia y control son clave para proteger a su equipo.',
          rol: './recursos/seccionRoles/tiradores/fondoSeccionTira.png'
        },
        {
          foto: './recursos/seccionRoles/tiradores/seccClaude.png',
          nombre: 'Claude',
          descripcion: 'Con su imponente ancla gigante, hábil para enganchar a sus enemigos y liderar con valentía en la batalla. Su resistencia y control son clave para proteger a su equipo.',
          rol: './recursos/seccionRoles/tiradores/fondoSeccionTira.png'
        },
        {
          foto: './recursos/seccionRoles/tiradores/seccClint.png',
          nombre: 'Clint',
          descripcion: 'Con su imponente ancla gigante, hábil para enganchar a sus enemigos y liderar con valentía en la batalla. Su resistencia y control son clave para proteger a su equipo.',
          rol: './recursos/seccionRoles/tiradores/fondoSeccionTira.png'
        },
        {
          foto: './recursos/seccionRoles/tiradores/seccGranger.png',
          nombre: 'Granger',
          descripcion: 'Con su imponente ancla gigante, hábil para enganchar a sus enemigos y liderar con valentía en la batalla. Su resistencia y control son clave para proteger a su equipo.',
          rol: './recursos/seccionRoles/tiradores/fondoSeccionTira.png'
        },
        {
          foto: './recursos/seccionRoles/tiradores/seccKarrie.png',
          nombre: 'Karrie',
          descripcion: 'Con su imponente ancla gigante, hábil para enganchar a sus enemigos y liderar con valentía en la batalla. Su resistencia y control son clave para proteger a su equipo.',
          rol: './recursos/seccionRoles/tiradores/fondoSeccionTira.png'
        },
        {
          foto: './recursos/seccionRoles/tiradores/seccKimmy.png',
          nombre: 'Kimmy',
          descripcion: 'Con su imponente ancla gigante, hábil para enganchar a sus enemigos y liderar con valentía en la batalla. Su resistencia y control son clave para proteger a su equipo.',
          rol: './recursos/seccionRoles/tiradores/fondoSeccionTira.png'
        }
      ]
    const magos = [
        {
          foto: './recursos/seccionRoles/magos/seccAlice.png',
          nombre: 'Alice',
          descripcion: 'Con su imponente ancla gigante, hábil para enganchar a sus enemigos y liderar con valentía en la batalla. Su resistencia y control son clave para proteger a su equipo.',
          rol: './recursos/seccionRoles/magos/fondoSeccionMago.png'
        },
        {
          foto: './recursos/seccionRoles/magos/seccCiclop.png',
          nombre: 'Ciclope',
          descripcion: 'Con su imponente ancla gigante, hábil para enganchar a sus enemigos y liderar con valentía en la batalla. Su resistencia y control son clave para proteger a su equipo.',
          rol: './recursos/seccionRoles/magos/fondoSeccionMago.png'
        },
        {
          foto: './recursos/seccionRoles/magos/seccEudora.png',
          nombre: 'Eudora',
          descripcion: 'Con su imponente ancla gigante, hábil para enganchar a sus enemigos y liderar con valentía en la batalla. Su resistencia y control son clave para proteger a su equipo.',
          rol: './recursos/seccionRoles/magos/fondoSeccionMago.png'
        },
        {
          foto: './recursos/seccionRoles/magos/seccHarith.png',
          nombre: 'Harith',
          descripcion: 'Con su imponente ancla gigante, hábil para enganchar a sus enemigos y liderar con valentía en la batalla. Su resistencia y control son clave para proteger a su equipo.',
          rol: './recursos/seccionRoles/magos/fondoSeccionMago.png'
        },
        {
          foto: './recursos/seccionRoles/magos/seccKagura.png',
          nombre: 'Kagura',
          descripcion: 'Con su imponente ancla gigante, hábil para enganchar a sus enemigos y liderar con valentía en la batalla. Su resistencia y control son clave para proteger a su equipo.',
          rol: './recursos/seccionRoles/magos/fondoSeccionMago.png'
        },
        {
          foto: './recursos/seccionRoles/magos/seccLylia.png',
          nombre: 'Lylia',
          descripcion: 'Con su imponente ancla gigante, hábil para enganchar a sus enemigos y liderar con valentía en la batalla. Su resistencia y control son clave para proteger a su equipo.',
          rol: './recursos/seccionRoles/magos/fondoSeccionMago.png'
        }
      ]
    const combatientes = [
        {
          foto: './recursos/seccionRoles/combatientes/seccAldous.png',
          nombre: 'Aldous',
          descripcion: 'Con su imponente ancla gigante, hábil para enganchar a sus enemigos y liderar con valentía en la batalla. Su resistencia y control son clave para proteger a su equipo.',
          rol: './recursos/seccionRoles/combatientes/fondoSeccionComba.png'
        },
        {
          foto: './recursos/seccionRoles/combatientes/seccAlucard.png',
          nombre: 'Alucard',
          descripcion: 'Con su imponente ancla gigante, hábil para enganchar a sus enemigos y liderar con valentía en la batalla. Su resistencia y control son clave para proteger a su equipo.',
          rol: './recursos/seccionRoles/combatientes/fondoSeccionComba.png'
        },
        {
          foto: './recursos/seccionRoles/combatientes/seccArgos.png',
          nombre: 'Argos',
          descripcion: 'Con su imponente ancla gigante, hábil para enganchar a sus enemigos y liderar con valentía en la batalla. Su resistencia y control son clave para proteger a su equipo.',
          rol: './recursos/seccionRoles/combatientes/fondoSeccionComba.png'
        },
        {
          foto: './recursos/seccionRoles/combatientes/seccChou.png',
          nombre: 'Chou',
          descripcion: 'Con su imponente ancla gigante, hábil para enganchar a sus enemigos y liderar con valentía en la batalla. Su resistencia y control son clave para proteger a su equipo.',
          rol: './recursos/seccionRoles/combatientes/fondoSeccionComba.png'
        },
        {
          foto: './recursos/seccionRoles/combatientes/seccDyrroth.png',
          nombre: 'Dyrroth',
          descripcion: 'Con su imponente ancla gigante, hábil para enganchar a sus enemigos y liderar con valentía en la batalla. Su resistencia y control son clave para proteger a su equipo.',
          rol: './recursos/seccionRoles/combatientes/fondoSeccionComba.png'
        },
        {
          foto: './recursos/seccionRoles/combatientes/seccLeo.png',
          nombre: 'Leomord',
          descripcion: 'Con su imponente ancla gigante, hábil para enganchar a sus enemigos y liderar con valentía en la batalla. Su resistencia y control son clave para proteger a su equipo.',
          rol: './recursos/seccionRoles/combatientes/fondoSeccionComba.png'
        }
      ]
    
    const [contHeroes, setContHeroes] = useState({AS: 'flex', TI: 'none', CO: 'none', TA: 'none', MA: 'none', SO: 'none'})
    const [botonSo, setBotonSo] = useState('primerBotonHero')
    const [botonAs, setBotonAs] = useState('secondBotonHero')
    const [botonTi, setBotonTi] = useState('primerBotonHero')
    const [botonMa, setBotonMa] = useState('primerBotonHero')
    const [botonCo, setBotonCo] = useState('primerBotonHero')
    const [botonTa, setBotonTa] = useState('primerBotonHero')
    
    const generarCardsSo = () =>{
        let render = {AS: 'none', TI: 'none', CO: 'none', TA: 'none', MA: 'none', SO: 'flex'}
        let antiguo = 'primerBotonHero'
        let nuevoSo = 'secondBotonHero'
        setBotonAs(antiguo)
        setBotonTa(antiguo)
        setBotonTi(antiguo)
        setBotonCo(antiguo)
        setBotonMa(antiguo)

        setBotonSo(nuevoSo)
        setContHeroes(render)
    }
    const generarCardsAs = () =>{
        let render = {AS: 'flex', TI: 'none', CO: 'none', TA: 'none', MA: 'none', SO: 'none'}
        let antiguo = 'primerBotonHero'
        let nuevoSo = 'secondBotonHero'
        setBotonSo(antiguo)
        setBotonTa(antiguo)
        setBotonTi(antiguo)
        setBotonCo(antiguo)
        setBotonMa(antiguo)

        setBotonAs(nuevoSo)
        setContHeroes(render)
    }
    const generarCardsCo = () =>{
        let render = {AS: 'none', TI: 'none', CO: 'flex', TA: 'none', MA: 'none', SO: 'none'}
        let antiguo = 'primerBotonHero'
        let nuevoSo = 'secondBotonHero'
        setBotonAs(antiguo)
        setBotonTa(antiguo)
        setBotonTi(antiguo)
        setBotonSo(antiguo)
        setBotonMa(antiguo)

        setContHeroes(render)
        setBotonCo(nuevoSo)
    }
    const generarCardsTa = () =>{
        let render = {AS: 'none', TI: 'none', CO: 'none', TA: 'flex', MA: 'none', SO: 'none'}
        let antiguo = 'primerBotonHero'
        let nuevoSo = 'secondBotonHero'
        setBotonAs(antiguo)
        setBotonSo(antiguo)
        setBotonTi(antiguo)
        setBotonCo(antiguo)
        setBotonMa(antiguo)

        setContHeroes(render)
        setBotonTa(nuevoSo)
    }
    const generarCardsTi = () =>{
        let render = {AS: 'none', TI: 'flex', CO: 'none', TA: 'none', MA: 'none', SO: 'none'}
        let antiguo = 'primerBotonHero'
        let nuevoSo = 'secondBotonHero'
        setBotonAs(antiguo)
        setBotonTa(antiguo)
        setBotonSo(antiguo)
        setBotonCo(antiguo)
        setBotonMa(antiguo)

        setContHeroes(render)
        setBotonTi(nuevoSo)
    }
    const generarCardsMa = () =>{
        let render = {AS: 'none', TI: 'none', CO: 'none', TA: 'none', MA: 'flex', SO: 'none'}
        let antiguo = 'primerBotonHero'
        let nuevoSo = 'secondBotonHero'
        setBotonAs(antiguo)
        setBotonTa(antiguo)
        setBotonTi(antiguo)
        setBotonCo(antiguo)
        setBotonSo(antiguo)

        setContHeroes(render)
        setBotonMa(nuevoSo)
    }

    return(
        <main className="contentHeroesRol" style={{marginBottom: '60px'}}>
            <nav>
              
              <li onClick={generarCardsSo} className={botonSo}>Suport</li>  
              <li onClick={generarCardsAs} className={botonAs}>Assassin</li>      
              <li onClick={generarCardsCo} className={botonCo}>Fighter</li>
              <li onClick={generarCardsMa} className={botonMa}>Mage</li>
              <li onClick={generarCardsTi} className={botonTi}>Marksman</li>
              <li onClick={generarCardsTa} className={botonTa}>Tank</li>
              
            </nav>
            <ContentRol cards={asesinos} ver={contHeroes.AS}></ContentRol>
            <ContentRol cards={tanques} ver={contHeroes.TA}></ContentRol>
            <ContentRol cards={soportes} ver={contHeroes.SO}></ContentRol>
            <ContentRol cards={tiradores} ver={contHeroes.TI}></ContentRol>
            <ContentRol cards={combatientes} ver={contHeroes.CO}></ContentRol>
            <ContentRol cards={magos} ver={contHeroes.MA}></ContentRol>
        </main>
    )
}