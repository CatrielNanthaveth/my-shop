import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
        <h1>¡Bienvenido a <i>MyShop</i>!</h1>
        <p><i>Un mundo de consumo y capitalismo, al alcance de tu mano</i></p>
        <Link to={`/product/1`}>Ir al detalle</Link>
    </div>
  )
}
