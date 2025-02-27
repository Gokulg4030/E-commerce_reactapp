import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import {Link} from 'react-router-dom'



const Navbar = () => {

    const[menu,SetMenu] = useState("shop")
  return (
    <div className='navbar'>
       <div className='nav-logo'>
        <img src={logo} alt="Logo" />
        <p>SHOPPER</p>
    </div>
        <ul className="nav-menu">
            <li onClick={()=>{SetMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{SetMenu("mens")}}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{SetMenu("womens")}}><Link style={{textDecoration:'none'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{SetMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kid</Link>{menu==="kids"?<hr></hr>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to="/login"><button className="login">Login</button></Link>
           <Link to="/cart"> <img src={cart_icon} alt="" /> </Link>
            <div className="nav-cart-count">0</div>
        </div>
       </div>
    
  )
}

export default Navbar
