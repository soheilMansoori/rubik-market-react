import React from 'react'
import Navbar from './navbar/Navbar'
import CardImg from './slider and imgs/Advertise imgs/CardImg'
import Slider from './slider and imgs/slider/Slider'

function Header() {
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-1 mt-5 md:mt-10 container mx-auto'>
    <Slider />
    <div className='grid sm:grid-cols-3 md:grid-cols-1'>
    <CardImg imgSrc = './imgs/Advertise cards/side-slide1.jpg' />
    <CardImg imgSrc = './imgs/Advertise cards/side-slide2.jpg' />
    <CardImg imgSrc = './imgs/Advertise cards/side-slide3.jpg' />
    </div>
    </div>
    </>
    )
}

export default Header
