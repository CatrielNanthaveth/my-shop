import React from 'react'
import { Header } from '../components'
import { Outlet, useLocation } from 'react-router-dom'
import { Home } from './home'
import "./root.css";

export const Root = () => {

  return (
    <div>
        <Header />
        <div id='main-container'>
            {useLocation().pathname === "/"? <Home /> : <Outlet />}
        </div>
    </div>
  )
}
