import React from 'react'
import './header.css';

export const Header = () => {

    let headerList = ["Inicio", "Mis compras", "Favoritos", "Mi carro"];

    return (
        <header>
            <ul id='headerList'>
                {headerList.map((item) => {
                    return (
                        <li>{item}</li>
                    )
                })}
            </ul>
        </header>
    )
}
