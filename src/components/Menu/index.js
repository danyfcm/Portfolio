import React from 'react'


import "./index.css"

const Menu = () => {
    return(
    <div className='body'>

        <div className='backbtn black' onClick={ () => window.location.href = '/' } />

        <div className='Menu'>

            <a href='/napoleonParallax'>Napoleon Parallax</a>
            <a href='/gradientBorder'>Gradient Border</a>
            <a href='/constellation'>Constellations</a>
            <a href='/more' className='morebtn'> <p>.</p> <p>.</p> <p>.</p> </a>

        </div>

    </div>
    )
}


export default Menu