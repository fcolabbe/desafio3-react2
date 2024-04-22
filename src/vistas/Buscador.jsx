import React, {useContext, useState} from 'react'
import MiContexto from '../MiContexto'
import { useNavigate } from 'react-router-dom'

const Buscador = () => {
    const {pokemon} = useContext(MiContexto)
    const [pokemonSeleccionado, setPokemonSeleccionado] = useState('')
    const navigate = useNavigate()
    let arr = new Array();
    const verPokemon = (e) => {
        if(arr.includes(pokemonSeleccionado)){
        navigate(`/pokemones/${pokemonSeleccionado}`)
        }else{
            navigate('/not-found')
        }
    }
    const handleChange = (e) => {
        setPokemonSeleccionado(e.target.value)
    }
  return (
    <div className='contenedor-principal'>
        <h1>Selecciona un Pokemon</h1>
        <div className='select'>
        { <select onChange={handleChange} name="pokemon" className='form-select form-select-lg mb-3" aria-label=".form-select-lg example'>
            <option value="">Selecciona un Pokemon</option>
            {pokemon.map((pokemon) => (
                arr.push(pokemon.name),
                <option key={pokemon.url} value={pokemon.name}>{pokemon.name}</option>
            ))}
        </select> }
        </div>
        <div className='boton'>
        <button className="btn btn-dark" onClick={verPokemon}>Ver detalles</button>
        </div>
    </div>
  )
}

export default Buscador