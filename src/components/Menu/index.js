import React from 'react'

import "./index.css"

const Menu = () => {
    return(
    <div className='body'>

        <div className='backbtnblack' onClick={ () => window.location.href = '/' } />

        <div className='Menu'>

            <a href='/napoleonParallax'>Napoleon Parallax</a>
            <a href='/gradientBorder'>Gradient Border</a>
            <a href='/t3'>Trabalho 3</a>
            <a href='/t4'>Trabalho 4</a>
            <a href='/t5'>Trabalho 5</a>

        </div>

    </div>
    )
}


export default Menu