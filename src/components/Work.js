import React from 'react'
import './Work.css'
import '../MediaQuery/WorkQuery.css'
import 'aos/dist/aos.css';

function Work() {
    return (
        <div className='work' id='work'>
            <h1>Work</h1>
            <div className='work__container'>
            <div className='work__left'>
<ul>
    <li data-aos='zoom-in-up'>OminiFood Delivery Service</li>
    <li data-aos='zoom-in-up' className="active">Amazon Clone </li>
    <li data-aos='zoom-in-up'>YouTube Clone </li>
    <li data-aos='zoom-in-up' className="active">Slack Clone </li>
    <li data-aos='zoom-in-up'>Spotify Clone</li>
</ul>
</div>
<div className='work__right'>
<img data-aos='slide-left' src="https://raw.githubusercontent.com/nihal9956/portfolio-images/9dd01af9ebc6191eceed7f2d59785073b13929f7/work.svg" alt="work__image"/>
</div>
            </div>
            <div className="work__img">    
              <div className='box'>
                  <div className='imgbox'>
                  
         <img className="img-1"  src="https://png.pngitem.com/pimgs/s/11-114947_youtube-download-icon-transparent-hd-png-download.png" alt="youtube-clone"/>
           </div>
                  <div className='content'>
                      <div>
                  <h1>YouTube Clone</h1>
                  <button><a href='https://fir-aaf1e.web.app/'>View Project</a></button>
                       </div>
                  </div>
                  </div>    
                  <div className='box'>
                  <div className='imgbox'>
           
                  
           <img className="img-2" src="https://www.iconarchive.com/download/i80413/uiconstock/socialmedia/Amazon.ico" alt="Amzon-clone"/>
                  </div>
                  <div className='content'>
                      <div>
                  <h1>Amazon Clone</h1>
                  <button><a  href='https://amzon-32699.web.app/'>View Project</a></button>
                       </div>
                  </div>
                  </div>    

                  <div className='box'>
                  <div className='imgbox'>

                      
                  
                <img className="img-4" src="https://raw.githubusercontent.com/nihal9956/OminiFood-delivery/master/resources/img/logo.png" alt="ominifood-service"/>
                
                  </div>
                  <div className='content'>
                      <div>
                  <h1>ominifood </h1>
                  <button><a  href='https://nihal9956.github.io/OminiFood-delivery/'>View Project</a></button>
                       </div>
                  </div>
                  </div>    
                
                
                  <div className='box'>
                  <div className='imgbox'>
                 
          
            <img className="img-3" src="https://www.freeiconspng.com/thumbs/spotify-icon-png/spotify-icon-18.png" alt="spotify-clone"/>
                  </div>
                  <div className='content'>
                      <div>
                  <h1>Spotify Clone</h1>
                  <button><a  href='https://spotify-14c59.web.app/'>View Project</a></button>
                       </div>
                  </div>
                  </div>    

                  <div className='box'>
                  <div className='imgbox'>
                 
          
            <img className="img-3" src="https://raw.githubusercontent.com/nihal9956/portfolio-images/master/dashboard.png" alt="Dsa assist"/>
                  </div>
                  <div className='content'>
                      <div>
                  <h1>DSA ASSIST</h1>
                  <button><a  href='https://mytournament.in/dsa/html/'>View Project</a></button>
                       </div>
                  </div>
                  </div>    
            
            
                  <div className='box'>
                  <div className='imgbox'>
                 
          
            <img className="img-3" src="https://raw.githubusercontent.com/nihal9956/portfolio-images/master/itly.png" alt="spotify-clone"/>
                  </div>
                  <div className='content'>
                      <div>
                  <h1>PAOLO MOTORI</h1>
                  <button><a  href='http://www.micro-pdr.com/corsi/'>View Project</a></button>
                       </div>
                  </div>
                  </div>    


           
          
            </div>
           
        </div>
    )
}

export default Work
