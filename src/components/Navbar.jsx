import React from 'react'
import Logo from '../assets/logo.svg'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <img src={Logo} alt='react logo' />
            <ul className='flex gap-4'>
                <li>Home</li>
                <li>About Us</li>
                <li>Features</li>
                <li>Solution</li>
            </ul>
        </div>
    )
}

export default Navbar