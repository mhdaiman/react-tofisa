import React from 'react';
import { Link } from 'react-router-dom';
import navbar from '../styles/navbar.css';

export default function Navbar() {
    return (
        <nav className='navbar'>
            <div className='logo'><h1>logo</h1></div>
            <ul className='menu'>
                <li className='menu-item'><Link to="/">Home</Link></li>
                <li className='menu-item'><Link to='/blogs/create'>create Blog</Link></li>
            </ul>
        </nav>
    )
}
