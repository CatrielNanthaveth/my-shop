import { useState } from 'react'
import './header.css';
import { Link } from 'react-router-dom';
import logo from "../../resources/logo.png"

export const Header = () => {
    const [search, setSearch] = useState("");

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    let headerList = [
        {
            name: "Inicio",
            link: "/home"
        }, {
            name: "Mis compras",
            link: "/my_purcharses"
        }, {
            name: "Favoritos",
            link: "/favorites"
        }, {
            name: "Mi carro",
            link: "/cart"
        }];

    return (
        <header id='header'>
            <img src={logo} id='logo-navbar' alt='logo' />

            <div id='search'>
                <input
                    value={search}
                    onChange={handleChange}
                    type="text"
                    placeholder="Buscar"
                    id="search-bar"
                />
            </div>

            <ul id='headerList'>
                {headerList.map((item) => {
                    return (
                        <li><Link to={item.link}>{item.name}</Link></li>
                    )
                })}
            </ul>
        </header>
    )
}
