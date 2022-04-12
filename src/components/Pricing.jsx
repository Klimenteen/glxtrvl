import React, {useState} from 'react'
import { Link } from 'react-router-dom'
// import PopUp from './PopUp'
import './PricingStyles.css'
// import glx1  from '../assets/glx1.jpg'

const PricingCards = () => {
    // const  [openPopup, setOpenPopup]=useState(false)
    
  return (
    <div className='pricing'>
        <div className='card-container'>
            <div className='card'>
                <h3>- Basic -</h3>
                <span className='bar'> </span>
                <p className='btc'>1 BTC</p>
                <p>Go</p>
                <p>Just</p>
                <p>Like</p>
                <p>Yuri Gagarin</p>
                <Link to='/contact' className='btn'>Book</Link>
                {/* <button className='btn' onClick={()=> setOpenPopup(true)}>see more</button> */}

                {/* <PopUp image={glx1} open={openPopup} onClose={()=>setOpenPopup(false)}  /> */}
                
            </div>
            <div className='card'>
                <h3>- Luxury -</h3>
                <span className='bar'> </span>
                <p className='btc'>2 BTC</p>
                <p>Go</p>
                <p>Just</p>
                <p>Like</p>
                <p>SpaceX</p>
                <Link to='/contact' className='btn'>Book</Link>
                {/* <PopUp /> */}
            </div>
             <div className='card'>
                <h3>- Jeffrey Bezos  -</h3>
                <span className='bar'> </span>
                <p className='btc'>3 BTC</p>
                <p>Go</p>
                <p>Just</p>
                <p>Like</p>
                <p>Jeffrey Bezos</p>
                <Link to='/contact' className='btn'>Book</Link>
                {/* <PopUp /> */}
            </div>
        </div>
    </div>
  )
}

export default PricingCards