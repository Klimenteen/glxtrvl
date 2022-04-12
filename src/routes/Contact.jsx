import React from 'react'
import HeroImage from '../components/HeroImage'
import Form from '../components/Form'
import Navbar from '../components/NavBar'

const Contact = () => {
  return (
    <div>
    <Navbar />
      <HeroImage heading='CONTACT.' text='Contact GLX Travel.'/>
      <Form  />
    </div>
  )
}

export default Contact