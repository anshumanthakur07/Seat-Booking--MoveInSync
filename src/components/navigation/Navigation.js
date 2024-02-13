import React from 'react';
import './navigation.css'

const Navigation = () => {
  return (
   <nav className='container' >
    <div className='logo'>
        <img src="/images/logo.png" alt="head_logo" />
    </div>
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
   </nav>
  )
}

export default Navigation
