import $ from 'jquery'
import React, { useEffect } from 'react'

import "./index.css"

import Napoleon from './img/Napoleon crossing the alps Napoleon.png'
import NapoleonCapa from './img/Napoleon crossing the alps Napoleon Capa.png'
import NapoleonSoldados from './img/Napoleon crossing the alps Soldados.png'
import NapoleonPedra1 from './img/Napoleon crossing the alps Pedra 1.png'
import NapoleonPedra2 from './img/Napoleon crossing the alps Pedra 2.png'

const NapoleonParallax = () => {

    useEffect(() => {

        const parallaxWrap = document.querySelector(".parallax-wrap")

        $('.container').on('mouseenter', function () {

            parallaxWrap.addEventListener( "mousemove", ({ layerX, layerY }) => {
                        parallaxWrap.style.setProperty("--x", layerX);
                        parallaxWrap.style.setProperty("--y", layerY);
                    }

            );

        });

    })

    return(
    <div className='napoleonParallax'>

        <div className="container">
            <div className="parallax-wrap">
                
                <img id="imageNapoleon" alt="imageNapoleon" src={Napoleon}/> 
                <img id="imageCapa"     alt="imageCapa"     src={NapoleonCapa}/>
                <img id="imageSoldados" alt="imageSoldados" src={NapoleonSoldados}/>
                <img id="imagePedra1"   alt="imagePedra1"   src={NapoleonPedra1}/>
                <img id="imagePedra2"   alt="imagePedra2"   src={NapoleonPedra2}/>

            </div>
        </div>

    </div>
    )

}






export default NapoleonParallax