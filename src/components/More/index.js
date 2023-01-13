import React from 'react'

import "./index.css"
import Laravel from './assets/Laravel.png'
import PocketBase from './assets/pocketbase.svg'


const More = () => {
    
    return(
        <div className='more'>

            <div className='project'>
                <img src='https://picsum.photos/400/300' alt='Trabalho1'></img>
                <div className='content'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil esse architecto eligendi in fuga commodi numquam!</p>
                    <img src={Laravel} alt='Laravel' width='100px'></img>
                </div>
                
            </div>

            <div className='project'>
                <div className='content'>
                    <p>Debitis nostrum tenetur veritatis laboriosam iste cupiditate laborum voluptatibus quaerat quos dolore, nemo autem ducimus ut dicta</p>
                    <img src={PocketBase} alt='PocketBase' width='100px'></img>
                </div>
                <img src='https://picsum.photos/400/300' alt='Trabalho2'></img>
            </div>
            
        </div>
    )
}


export default More