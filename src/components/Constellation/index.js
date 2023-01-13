import React, { useEffect } from "react";

import './index.css'


function Constellation() {

    useEffect(() => {
    
        const canvas1 = document.querySelector( '.grid' )
        const canvas2 = document.querySelector( '.line' )

        const ctx1 = canvas1.getContext( '2d' )
        const ctx2 = canvas2.getContext( '2d' )

        const width  = canvas1.width  = canvas2.width  = window.innerWidth,
              height = canvas1.height = canvas2.height = window.innerHeight

        function Area( x, y ) {

            this.x = x
            this.y = y
            this.size = 200
            this.circle = new Path2D()

        }

        function Ball( x, y, area) {

            this.x          = x
            this.y          = y
            this.area       = area
            this.size       = 4

        }

        Area.prototype.draw = function() {

            this.circle.arc( this.x, this.y, this.size, 0, (2 * Math.PI) )

            ctx1.beginPath()
            ctx1.strokeStyle = 'rgba( 255, 0, 0, 0 )'
            ctx1.stroke(this.circle)    

        }

        Ball.prototype.draw = function() {

            ctx1.beginPath()
            ctx1.fillStyle = 'rgba( ' + aleatorio(100, 255) + ', ' + aleatorio(100, 255) + ', ' + aleatorio(100, 255) + ', 1)'
            ctx1.arc( this.x, this.y, this.size, 0, ( 2 * Math.PI ) )
            ctx1.fill()

        }

        Area.prototype.checkMouse = function( x, y ) {
            return ctx2.isPointInPath( this.circle, x, y )
        }

        let balls = []


        while( balls.length < 150 ) {


            let size = 3

            let x = aleatorio( 0 + size, width  - size )
            let y = aleatorio( 0 + size, height  - size )

            let area = new Area (
                x,
                y,
            )

            let ball = new Ball (
                x,
                y,
                area,
            )

            balls.push( ball )

            ball.draw()
            ball.area.draw()

        }


        canvas2.addEventListener( 'mousemove', function( e ) {
            
            ctx2.clearRect( 0, 0, width, height )

            var x = e.clientX
            var y = e.clientY

            
            for( let i = 0; i < balls.length; i++ ){

                if( balls[i].area.checkMouse(x, y) ) {

                    ctx2.beginPath()

                    ctx2.strokeStyle = 'rgba( ' + aleatorio(100, 255) + ', ' + aleatorio(100, 255) + ', ' + aleatorio(100, 255) + ', 1)'
                    ctx2.lineWidth = 1.5
                    ctx2.moveTo(balls[i].x, balls[i].y)
                    ctx2.lineTo(x, y)
                    ctx2.stroke()
                }
            }  

        })

        canvas2.addEventListener( 'touchmove', function( e ) {
            
            ctx2.clearRect( 0, 0, width, height )

            var x = e.touches[0].clientX
            var y = e.touches[0].clientY

            
            for( let i = 0; i < balls.length; i++ ){

                if( balls[i].area.checkMouse(x, y) ) {

                    ctx2.beginPath()

                    ctx2.strokeStyle = 'rgba( ' + aleatorio(100, 255) + ', ' + aleatorio(100, 255) + ', ' + aleatorio(100, 255) + ', 1)'
                    ctx2.lineWidth = 1.5
                    ctx2.moveTo(balls[i].x, balls[i].y)
                    ctx2.lineTo(x, y)
                    ctx2.stroke()
                }
            }  

        })

    })

    return(
        <div className='Constellation'>

            <canvas className='grid' />
            <canvas className='line' />

        </div>
    )
}

function aleatorio( min, max ) {
    return Math.floor( Math.random() * ( max - min + 1 ) ) + min }


export default Constellation