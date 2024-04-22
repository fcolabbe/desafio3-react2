
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navegacion from './components/Navegacion'
import Inicio from './vistas/Inicio'
import Pokemones from './vistas/Pokemones'
import NotFound from './vistas/NotFound'
import MiContexto from './MiContexto'
const Poke_API = 'https://pokeapi.co/api/v2/'
import { useEffect, useState } from 'react'
import Buscador from './vistas/Buscador'

function App() {

  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    fetchPokemones()
  }, [])

  const fetchPokemones = async () => {
    try {
      const response = await fetch(Poke_API + 'pokemon?limit=151')
      if (!response.ok) {
        throw new Error('Error en la petición')
      }
      const data = await response.json()
      setPokemon(data.results)
    } catch (error) {
      console.error('Error en la petición', error);
    }
  }

    const sharedData = { pokemon, setPokemon, Poke_API }
/*     console.log(pokemon) */
    return (
      <>
        <MiContexto.Provider value={sharedData}>
        <Navegacion />
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/pokemones/:name" element={<Pokemones />}></Route>
          <Route path="/pokemones" element={<Buscador />}></Route>
          <Route path="/pokemones/*" element={<NotFound />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        </MiContexto.Provider>
      </>
    )
}
  export default App
