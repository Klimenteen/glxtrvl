import React from 'react'
import { Link } from 'react-router-dom'
import './PricingStyles.css'

const PricingCards = () => {
  return (
    <div className='pricing'>
        <div className='card-container'>
            <div className='card'>
                <h3>- Basic -</h3>
                <span className='bar'> </span>
                <p className='btc'>1 BTC</p>
                <p>What</p>
                <p>a</p>
                <p>handsome</p>
                <p>devil</p>
                <Link to='/contact' className='btn'>Book</Link>
            </div>
            <div className='card'>
                <h3>- Luxury -</h3>
                <span className='bar'> </span>
                <p className='btc'>1 BTC</p>
                <p>What</p>
                <p>a</p>
                <p>handsome</p>
                <p>devil</p>
                <Link to='/contact' className='btn'>Book</Link>
            </div>
            <div className='card'>
                <h3>- Jeffrey Bezos  -</h3>
                <span className='bar'> </span>
                <p className='btc'>1 BTC</p>
                <p>What</p>
                <p>a</p>
                <p>handsome</p>
                <p>devil</p>
                <Link to='/contact' className='btn'>Book</Link>
            </div>
        </div>
    </div>
  )
}

export default PricingCards