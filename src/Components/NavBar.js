import React from 'react'
import CartWidget from "./CartWidget"
import Stodak from "../Assets/logo.png"

function navbar() {
  return (
    <>
    <div>
      <img src={Stodak}/>
    </div>
    
    <nav className='row'>
      <a href="" className='col s1 right-align'>Sobre Nosotros</a>
      <a href="" className='col s1 right-align'>Productos</a>
      <a href="" className='col s1 right-align'>Contacto</a>
      <  CartWidget/>
    </nav>
    <h1 className='container center-align'>Mi Tienda Online</h1>
    
    </>
  )
}

export default navbar