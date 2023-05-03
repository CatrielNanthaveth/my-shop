import React from 'react'
import { productos } from '../../resources/productos'
import { Link } from 'react-router-dom';
import './listProducts.css';

export const ListProducts = ({ tipo }) => {

    const pantalones = productos.pantalones;
    const buzos = productos.buzos;
    const remeras = productos.remeras;

    let totalProducts = [];

    switch (tipo) {
        case "pantalones":
            for (let element in pantalones) {
                totalProducts.push(pantalones[element])
            };
            break;
        case "remeras":
            for (let element in remeras) {
                totalProducts.push(remeras[element])
            };
            break;
        case "buzos":
            for (let element in buzos) {
                totalProducts.push(buzos[element])
            };
            break;
        default:
            for (let element in pantalones) {
                totalProducts.push(pantalones[element])
            };
            for (let element in remeras) {
                totalProducts.push(remeras[element])
            };
            for (let element in buzos) {
                totalProducts.push(buzos[element])
            };
    }


    return (
        <section>
            <ul id='products-list'>
                {totalProducts.map(producto => {
                    return <li key={producto.id} className='product-card'>
                        <img src={producto.img} alt={producto.info} className='img-product' />
                        {producto.name}
                        <Link to={`/product/${producto.id}`} className='link'>Ir al detalle</Link>
                    </li>
                })}
            </ul>
        </section>
    )
}
