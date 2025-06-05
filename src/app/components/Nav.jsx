'use client';

import { useState } from 'react'
import Link from 'next/link'

function Nav() {
  const [toggle, settoggle] = useState(false)
  const handelclick = ()=> {
    settoggle(!toggle)
  }
  const bodyclick = ()=>{
    if(toggle){
      settoggle(!toggle)
    }
  }
  //http://localhost:5173/
  return (
    <>
    <div id='fix' className="fix">
      <nav className={`na ${toggle ? 'mna' : ''}`}>
        <div className='hd'>
        <Link href='/' onClick={bodyclick}>
        <img src='/logo.png' alt='Aanya Solutions logo' className='brand'></img>
        </Link>
        <h3 className='menu' onClick={handelclick}>☰</h3>
        </div>
        <ul className={`ull ${toggle ? 'active' : ''}`}>
          <li><Link href='/' onClick={bodyclick}>Home</Link></li>
          <li><Link href='/about' onClick={bodyclick}>About Us</Link></li>
          <li><Link href='/services' onClick={bodyclick}>Services</Link></li>
          <li><Link href='/blogs' onClick={bodyclick}>Blogs</Link></li>
          <li><Link href='/contact' onClick={bodyclick}>Contact Us</Link></li>
        </ul>
        
      </nav>
    </div>
    </>
  )
}

export default Nav
