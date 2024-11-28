import React from 'react'
import { BiCart } from 'react-icons/bi'
import { BiUser } from 'react-icons/bi'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <div className="navbar">
            <div className="logo">
                <h2>ShopX</h2>
            </div>
            <div className="link">
                <ul>
                    <li>Home</li>
                    <li>Product</li>
                    <li>contact</li>
                    <li>Use App</li>
                </ul>
            </div>
            <div className="nav_icon_wrapper">
                <div className="nav_cart">
                <BiCart classname='nav_icon'/>
                <p className="nav_cart_amount"> 0</p>
                </div>
                <BiUser classname='nav_icon' />
            </div>
        </div>
    </div>
  )
}

export default Navbar