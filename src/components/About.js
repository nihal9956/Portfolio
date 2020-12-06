import React, { useEffect } from 'react'
import './About.css'
import '../MediaQuery/AboutQuery.css'

import Aos from 'aos'
import 'aos/dist/aos.css';
function About() {

    useEffect(()=>{
   Aos.init({duration:1500})
    },[])
    return (
        <div className='about' id='about'>
            <h1>About Me</h1>
            <div className="about__container">
            <div className='about__left'>
            <img data-aos="slide-right"  src="https://raw.githubusercontent.com/nihal9956/portfolio-images/9dd01af9ebc6191eceed7f2d59785073b13929f7/about%20us.svg" alt="about_img"/>
            </div>
            <div className='about__right'>
             <p data-aos="slide-left" >
             Hey !  My Name is Nihal  and  I am 20 Year old 
Front-end -engineer based in India.
I describe myself as a passionate developer Who 
loves to code websites and web apps.<br/>

I have been coding for last 2 Years and  developed
few exciting projects
             </p>
            </div>
            </div>
        </div>
    )
}

export default About
