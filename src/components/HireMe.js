import React from 'react'
import './HireMe.css'
import '../MediaQuery/HireMeQuery.css'
import {Link} from 'react-scroll'
function HireMe() {
    return (
        <div className='hireme'>
            <div className='hireme_conatiner'>
            <h1>Have A Project In Mind ?</h1>
            <Link className='btn' to='contact' smooth={true} duration={500}>Hire Me</Link>
            </div>
        </div>
    )
}

export default HireMe
