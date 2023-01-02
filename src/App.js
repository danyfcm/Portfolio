import NapoleonParallax from './components/NapoleonParallax';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
    
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
  
  );
}

export default App;
