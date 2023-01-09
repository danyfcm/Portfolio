import React, { useEffect } from "react";

import './index.css'


function LinePointer() {

    useEffect(() => {
    
        const canvas1 = document.querySelector( '.grid' )
        const canvas2 = document.querySelector( '.line' )

        const ctx1 = canvas1.getContext( '2d' )
        const ctx2 = canvas2.getContext( '2d' )

        const width  = canvas1.width  = window.innerWidth,
              height = canvas1.height = window.innerHeight



        function Area( x, y ) {

            this.x = x
            this.y = y
            this.size = 75

        }

        function Ball( initialx, initialy, area, velX, velY ) {

            this.initialx   = initialx
            this.initialy   = initialy
            this.x          = initialx
            this.y          = initialy
            this.area       = area
            this.velX       = velX
            this.velY       = velY
            this.size       = 3

        }

        Area.prototype.draw = function() {

            ctx1.beginPath()
            ctx1.strokeStyle = 'rgba( 255, 0, 0, 1 )'
            ctx1.arc( this.x, this.y, this.size, 0, (2 * Math.PI) )
            ctx1.stroke()    

        }

        Ball.prototype.draw = function() {

            ctx1.beginPath()
            ctx1.fillStyle = 'rgba( 255, 255, 255, 1 )'
            ctx1.arc( this.x, this.y, this.size, 0, ( 2 * Math.PI ) )
            ctx1.fill()

        }
 
        Ball.prototype.update = function() {
                
            if( ( this.x + this.size ) >= this.initialx+10   ||  ( this.x - this.size ) <= this.initialx-10 )
                this.velX *= -1
            
            //se a coordenada y é maior que a altura maxima ... a bola sai pela parte de baixo
            if( ( this.y + this.size ) >= this.initialy+10  ||  ( this.y - this.size ) <= this.initialy-10 )
                this.velY *= -1
        
            this.x += this.velX + aleatorio(-0.1,0.1)
            this.y += this.velY + aleatorio(-0.1,0.1)

            this.area.x = this.x
            this.area.y = this.y
            
        }

        let balls = []


        while( balls.length < 10 ) {


            let size = 3

            const initialX = aleatorio( 0 + size, width  - size )
            const initialY = aleatorio( 0 + size, width  - size )

            let area = new Area (
                initialX,
                initialY,
            )

            let ball = new Ball (
                initialX,
                initialY,
                area,
                0.2,
                0.2,
            )

            balls.push( ball )

        }

        function loop() {

            ctx1.fillStyle = 'rgba( 10, 10, 20, 1 )'
            ctx1.fillRect( 0, 0, width, height )


            //desenhar as bolas que foram criadas
            for( let i = 0; i < balls.length; i++ ){

                balls[i].draw()
                balls[i].area.draw()
                balls[i].update()

                
                canvas1.addEventListener( 'mousemove',function( e ) {

                    var x = e.clientX - this.offsetLeft
                    var y = e.clientY - this.offsetTop

                    ctx1.beginPath()

                    ctx1.strokeStyle = 'yellow'
                    ctx1.moveTo(balls[i].x, balls[i].y)
                    ctx1.lineTo(x, y)
                    ctx1.stroke()

                })

            }



                

            //chama recursivamente a funcao
            requestAnimationFrame( loop )

        }


        loop()
    })

    return(
        <div className='LinePointer'>

            <canvas className='grid' />
            <canvas className='line' />

        </div>
    )
}

function aleatorio( min, max ) {
    return Math.floor( Math.random() * ( max - min + 1 ) ) + min }


export default LinePointer