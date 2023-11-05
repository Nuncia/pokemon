import { PokeProvider } from './context/PokeContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import './App.css'
import Home from './views/Home';
import Pokemones from './views/Pokemones';
import Pokemon from './components/Pokemon';

function App() {

  return (
    <div>
      <PokeProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
              <Route  path='/' element={<Home/>}/>
              <Route path='/pokemones' element={<Pokemones/>}/>
              <Route path='/pokemon/:name' element={<Pokemon/>}/>
          </Routes>
        </BrowserRouter>
      </PokeProvider>
    </div>
  )
}

export default App
