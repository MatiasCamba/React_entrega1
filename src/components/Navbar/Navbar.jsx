import React from 'react'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

export const Navbar = () => {
  return (
    <header>
        <h1 className='Titulo'>Tienda Sofi Pastry-Boutique</h1>

        <nav>
            <ul>
                <li>Salados</li>
                <li>Dulces</li>
                <li>Cafeteria</li>
            </ul>
        </nav>

        <CartWidget/>
    </header>

  )
}

export default Navbar;