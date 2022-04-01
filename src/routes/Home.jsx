import React from 'react'
import Footer from '../components/Footer'
import  Navbar from '../components/NavBar'
import Video from '../components/Video'
import '../index'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Video />
        <Footer />
    </div>
  )
}

export default Home