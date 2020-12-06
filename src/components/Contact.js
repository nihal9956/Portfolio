import React, { useState } from 'react'
import './Contact.css'
import '../MediaQuery/ContactQuery.css'
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com';
import changColor from '../vanilaJs/button'

function Contact() {

    const [name,setName]=useState('');
    const [number,setNumber]=useState('');
    const [email,setEmail]=useState('');
    const [subject,setSubject]=useState('');
    const [message,setMessage]=useState('');

       function sendEmail(e){
            e.preventDefault();
            emailjs.sendForm('gmail', 'template_wng1ooi', e.target, 'user_D3yVspmc5ci7PlXmtCAib')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
    
              setName('');
              setNumber('');
              setSubject('');
              setMessage('')
              setEmail('');
        }
   
     function sendAlert(){

        alert('Fill All Values')
     }
   

    function messageSend(){
        changColor();
    }
    return (
        <div className='contact' id='contact'>
            <h1>Contact</h1>
            <div className='contact__container'>           
                 <div className="contact__left">
            <img data-aos='slide-right' src="https://raw.githubusercontent.com/nihal9956/portfolio-images/9dd01af9ebc6191eceed7f2d59785073b13929f7/contact.svg" alt="contact_img"/>
            </div>
            <div data-aos='slide-left' className="contact__right">

                <h1>Contact Info</h1>
                <h2>nihaltiwari28@gmail.com</h2>
                <h2>+91 9956195007</h2>

</div>
</div>

<div data-aos='fade' className='form__container' >
    <h1>Get In Touch</h1>
<form onSubmit={message&&name&&email&&number&&subject?sendEmail:sendAlert}>

    <input className='name__input' value={name} placeholder='Name' type='text' name='name' onChange={(e)=>setName(e.target.value)}/>

    <input className='number__input' value={number} placeholder='Mobile Number' type='text' name='mobile' onChange={(e)=>setNumber(e.target.value)}/>

    <input className='email__input' value={email} placeholder='Email' type='email' name='email' onChange={(e)=>setEmail(e.target.value)}/>
    <input className='subject__input' value={subject} placeholder='Subject' type='text' name='subject' onChange={(e)=>setSubject(e.target.value)}/>
    <textarea placeholder='Type a Message' value={message} className='message__input' name='message' onChange={(e)=>setMessage(e.target.value)}/>
    <button type='submit' onClick={messageSend} id='submit_btn'>Send Message</button>
</form>
</div>

<div className='followLinks'>
<h2>Follow Me On</h2>
<div className='socialmedia_icons'>
   <a href='https://www.linkedin.com/in/nihal-tiwari-3b943918b/'> 
   <img src='https://raw.githubusercontent.com/nihal9956/portfolio-images/master/linkedin%201.png' alt='linkedIn'/>
   </a>
    <a href='https://www.instagram.com/nihaltiwari28/'>
        <img src='https://raw.githubusercontent.com/nihal9956/portfolio-images/master/instagram%201.png' alt='instagram'/>
        </a>
        <a href='https://twitter.com/_itsNihal'>
    <img src='https://raw.githubusercontent.com/nihal9956/portfolio-images/master/Vector.png' alt='tweeter'/>
    </a>
</div>
</div>
</div>
    )
}

export default Contact
