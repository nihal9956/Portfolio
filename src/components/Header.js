import React from 'react'
import './Header.css'
import '../MediaQuery/HeaderQuery.css'
import HeaderBody from './HeaderBody'
import {Link} from 'react-scroll'
function Header() {
    return (
        <div> 
                <div className='header' id='header'>
        <img src="https://raw.githubusercontent.com/nihal9956/portfolio-images/master/logo.png" alt='logo'/>
        <div className='header__navbar'>
            <ul className='nav_item'>
                <li className='active'><Link to='header' smooth={true} duration={2000}>Home</Link></li>
                <li><Link to='work' smooth={true} duration={1000}>Work</Link></li>
                <li><Link to='about' smooth={true} duration={1000}>About</Link></li>
                <li><Link to='contact' smooth={true} duration={2000}>Contact</Link></li>
            </ul>

        </div>
        </div>
        <HeaderBody/>
        </div>
   
    )
}

export default Header
