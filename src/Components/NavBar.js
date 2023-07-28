import React from 'react'
import CartWidget from "./CartWidget"
import Stodak from "../Assets/logo.png"

function navbar() {
  return (
    <>
    <div>
      <img src="{Stodak}"/>
    </div>
    <h1 className='container center-align'>Mi Tienda Online</h1>
    <  CartWidget/>
    </>
  )
}

export default navbar