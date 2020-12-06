import React from 'react'
import './HeaderBody.css'
import '../MediaQuery/HeaderBodyQuery.css'

import {Link} from 'react-scroll'
function HeaderBody() {
    return (
        <div className='HeaderBody'>
        <div className='HeaderBody__left'>

            <h1>I'm <span>Nihal</span></h1>
            <h2>Freelance <span>Front End Engineer</span></h2>
           <Link className='btn' to='contact' smooth={true} duration={2000}>Hire Me</Link>

        </div>
        <div className='HeaderBody__right'>
<img className='hero_img' src="https://raw.githubusercontent.com/nihal9956/portfolio-images/9dd01af9ebc6191eceed7f2d59785073b13929f7/undraw.svg" alt="hero__img"/>
        </div>
        </div>
    )
}

export default HeaderBody
