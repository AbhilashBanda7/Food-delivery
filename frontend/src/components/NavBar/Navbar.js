import React, { useState } from 'react'
import './navbar.css'
import { assets } from '../../frontend_assets/assets'
import { Link } from 'react-router-dom'
function Navbar({setshowlogin}) {
    let [menu,setMenu]=useState('Home')
  return (
    <div className='navbar'>
        <Link to={'/'}><img src={assets.logo} alt="logo" className='logo'/></Link>
        <ul className='menu'>
            <Link to={'/'} onClick={()=>setMenu('Home')} className={menu==="Home"?'active':""}>Home</Link>
            <a href='#exploremenu' onClick={()=>setMenu('Menu')} className={menu==='Menu'?'active':""}>Menu</a>
            <a href='#AppDownload' onClick={()=>setMenu('Phone')} className={menu==='Phone'?'active':""}>Phone</a>
            <a href='#footer' onack={()=>setMenu('Contac-us')} className={menu==='Contac-us'?'active':""}>Contact-us</a>
        </ul>
        <div className='navbar-right'>
            <img src={assets.search_icon} alt="" />
            <div className='navbar-icon'>
              <Link to={'/cart'}> <img src={assets.basket_icon} alt="" onClick={()=>setMenu('menu')} className={menu==="cart"?'cart-page':""}/> </Link>
              <div className='dot'></div>
            </div>
            <button onClick={()=>setshowlogin(true)}>signin</button>
        </div>
    </div>
  )
}

export default Navbar