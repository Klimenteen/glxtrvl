import React from 'react'
import {FaGithub,  FaTelegramPlane, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter} from 'react-icons/fa'
import './FooterStyle.css'


const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'> 
                <div className='location'>
                    <FaSearchLocation size={20} style={{color:'#fff', marginRight:'2rem'}} />
                    <p>Novosibirsk, <br /><h4>Mother Russia </h4></p>
                    
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color:'#fff', marginRight:'2rem'}}/> 8-008-580-08-50(fake)</h4>    
                </div>
                <div className='email'>
                    <h4><FaMailBulk size={20} style={{color:'#fff', marginRight:'2rem'}}/> example-mail@smth.com</h4>     </div>
            </div>
            <div className='right'>
                <h4>About the company</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, itaque. 
                    Labore a dolor reprehenderit ea voluptatem eos temporibus ipsum doloremque dolores, 
                    perspiciatis atque nisi impedit similique aliquid nostrum accusantium ratione!
                </p>
                <div className='social'>
                   <a href="https://github.com/klimenteen" target="_blank"><FaGithub size={30} style={{color:'#fff', marginRight:'1rem'}} /></a> 
                    <a href="tg://resolve?domain=Kliment_dev" target="_blank"> <FaTelegramPlane size={30} style={{color:'#fff', marginRight:'1rem'}} /></a>
                    <FaTwitter size={30} style={{color:'#fff', marginRight:'1rem'}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer