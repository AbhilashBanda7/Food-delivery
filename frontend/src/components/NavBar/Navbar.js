import React, { useState } from 'react'
import './navbar.css'
import { assets } from '../../frontend_assets/assets'
function Navbar() {
    let [menu,setMenu]=useState('Home')
  return (
    <div className='navbar'>
        <img src={assets.logo} alt="logo" className='logo'/>
        <ul className='menu'>
            <li onClick={()=>setMenu('Home')} className={menu==="Home"?'active':""}>Home</li>
            <li onClick={()=>setMenu('Home')} className={menu==='Menu'?'active':""}>Menu</li>
            <li onClick={()=>setMenu('Home')} className={menu==='Phone'?'active':""}>Phone</li>
            <li onClick={()=>setMenu('Home')} className={menu==='Contac-us'?'active':""}>Contact-us</li>
        </ul>
        <div className='navbar-right'>
            <img src={assets.search_icon} alt="" />
            <div className='navbar-icon'>
              <img src={assets.basket_icon} alt="" />  
              <div className='dot'></div>
            </div>
            <button>signin</button>
        </div>
    </div>
  )
}

export default Navbar