import React from 'react'

import "./index.css"

const Menu = () => {
    return(
    <div className='body'>

        <div className='backbtnblack' onClick={ () => window.location.href = '/' } />

        <div className='Menu'>

            <div className='title'> <a href='/napoleonParallax'>Napoleon Parallax</a> </div>
            <div className='title'> <a href='/gradientBorder'>Gradient Border</a> </div>
            <div className='title'> <a href='/t3'>Trabalho 3</a> </div>
            <div className='title'> <a href='/t4'>Trabalho 4</a> </div>
            <div className='title'> <a href='/t5'>Trabalho 5</a> </div>

        </div>

    </div>
    )
}


export default Menu