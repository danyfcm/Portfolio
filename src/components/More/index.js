import React from 'react'

import "./index.css"
import Laravel from './assets/Laravel.png'
import PocketBase from './assets/pocketbase.svg'
import Veterinario from './assets/Veterinario.png'


const More = () => {
    
    return(
        <div className='more'>


            <div className='project'>

                <img src='https://picsum.photos/600/350' alt='Trabalho1' />

                <div className='content'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil esse architecto eligendi in fuga commodi numquam!</p>
                    <img src={Laravel} alt='Laravel' width='100px' onClick={() => {window.open('https://laravel.com')}} />
                </div>
                
            </div>


            <div className='project'>

                <div className='content'>
                    <p>Debitis nostrum tenetur veritatis laboriosam iste cupiditate laborum voluptatibus quaerat quos dolore, nemo autem ducimus ut dicta</p>
                    <img src={PocketBase} alt='PocketBase' width='100px' onClick={() => {window.open('https://pocketbase.io/')}} />
                </div>

                <img src={Veterinario} alt='Trabalho2' width='700px' />

            </div>
            
            
        </div>
    )
}


export default More