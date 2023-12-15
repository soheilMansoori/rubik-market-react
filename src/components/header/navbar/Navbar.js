import React from 'react'
import BottomBar from './BottomBar'
import TopBar from './TopBar'
import './css/navbar.css'

function Navbar() {
  return (
    <>
    
  <TopBar/>
  <nav id='nav-css' className='shadow my-3'>
    <div className="grid grid-cols-1 md:grid-cols-5 items-center text-center container mx-auto">
      <div className="flex flex-row items-center justify-center my-3">
        <img src="./imgs/logo/logo.png" alt="logo" className='' />
        <span className=''>روبیک مارکت</span>
      </div>
      <div className="md:col-span-2 my-3">
        <div className="input-icons p-2 md:p-0">
            <i className="fa fa-search icon"></i>
            <input id='input-search' className="input-field" type="search" placeholder="جستجو کنید ..."/>
        </div>
      </div>
      <div className="cursor-pointer my-3">
        <a href="">ورود  </a>
        /
        <a href=""> عضویت</a>
      </div>
      <div className="my-3">
        <button className='bg-orange-300 p-3 rounded cursor-pointer' id='btn-pasket'>
          <i className='fa fa-shopping-basket me-2'></i>
          سبد خرید 
          (0)
        </button>
      </div>
    </div>
  </nav>  
    <BottomBar/>
    </>
  )
}

export default Navbar
