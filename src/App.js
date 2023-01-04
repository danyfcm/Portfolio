import $ from 'jquery'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'

import NapoleonParallax from './components/NapoleonParallax'


function App() {
  return (
  <div>
    
    <div className='loadpage'></div>
    <div className='backbtn' onClick={ () => { backpage(); setTimeout( () => window.location.href = '/', 200)} }></div>


    <BrowserRouter>
      <Routes>

        <Route exact path='/' element={

          <div className='App'>

            <div className='title'> <a href='/napoleonParallax'>Napoleon Parallax</a> </div>
            <div className='title'> <a href='/t2'>Trabalho 2</a> </div>
            <div className='title'> <a href='/t3'>Trabalho 3</a> </div>
            <div className='title'> <a href='/t4'>Trabalho 4</a> </div>
            <div className='title'> <a href='/t5'>Trabalho 5</a> </div>

          </div>

        }/>

        <Route exact path='/napoleonParallax' element={ <NapoleonParallax/> }/>



      </Routes>  
    </BrowserRouter>

  </div>
  
  );
}

function backpage(){
  $('.backbtn').toggleClass('backpage')
  $('.backbtn').removeClass('backbtn')
}

export default App;
