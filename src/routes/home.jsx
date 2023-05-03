import React from 'react'
import { ListProducts } from '../components'
import './home.css'

export const Home = () => {
  return (
    <div id='home'>
      <div id='text-home'>
        <h1>¡Bienvenido a <i>MyShop</i>!</h1>
        <p><i>Un mundo de consumo y capitalismo, al alcance de tu mano</i></p>
      </div>
        <ListProducts />
    </div>
  )
}
