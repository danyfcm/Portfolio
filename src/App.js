import $ from 'jquery'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'

import GradientBorder from './components/GradientBorder'
import Home from './components/Home'
import LinePointer from './components/LinePointer'
import Menu from './components/Menu'
import NapoleonParallax from './components/NapoleonParallax'

function App() {
	return (
		<div className="body">

			<div className="loadpage"></div>
			

			<div
				className="backbtn"
				onClick={() => {
					backpage()
					setTimeout( () => ( window.location.href = '/menu' ), 200 )
				}}>
			</div>


			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Home />} />

					<Route exact path="/menu" element={<Menu />} />

					<Route exact path="/napoleonParallax" element={<NapoleonParallax />} />

					<Route exact path="/gradientBorder" element={<GradientBorder />} />

					<Route exact path="/t3" element={<p>TODO</p>} />
					
					<Route exact path="/t4" element={<p>TODO</p>} />

					<Route exact path="/t5" element={<p>TODO</p>} />

				</Routes>
			</BrowserRouter>

		</div>
	)
}




function backpage() {
	$('.backbtn').toggleClass('backpage')
	$('.backbtn').removeClass('backbtn')
}

export default App
