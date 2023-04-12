import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
        <p>Home</p>
        <Link to={`/product/1`}>Ir al detalle</Link>
    </div>
  )
}
