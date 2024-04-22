import React from 'react'
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='contenedor-principal'>
      <h1>Lo siento...</h1>
      <img src="public/404.png" alt="Not Found" />
      <h2>Pokemon no encontrado</h2>
{/*       <button className="btn btn-dark" onClick={() => window.history.back()}>Volver</button> */}
      <NavLink to="/" className="btn btn-dark">Volver</NavLink>
    </div>
  )
}

export default NotFound