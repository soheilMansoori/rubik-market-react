import React from 'react'
import Product from './../Product proposal/products/Product'

function BestSellingProducts() {
  return (
    <div className='container mx-auto p-5 mt-10'>
      <div className=' flex flex-col justify-center items-center'>
        <h3 className='text-xl'>پرفروش ترین محصولات</h3>
        <ul className='flex flex-row justify-center items-center text-center mt-5'>
          <li className='text-sm md:text-xl p-4 cursor-pointer border-b border-black'>گوشی موبایل</li>
          <li className='text-sm md:text-xl p-4 cursor-pointer'>لپتاپ</li>
          <li className='text-sm md:text-xl p-4 cursor-pointer'>تجهیزات کامپیوتر</li>
          <li className='text-sm md:text-xl p-4 cursor-pointer'>دوربین</li>
        </ul>
      </div>
      
      <div className='grid grid-cols1 sm:grid-cols-2 xl:grid-cols-4 gap-3 mt-10'>
      <Product 
      imgSrc = "../imgs/products/mobile/p100.png" 
      productName = "گوشی موبایل سامسونگ مدل Galaxy A51 دو سیم کارت" 
      productPrice = "8.000.000" 
      category = "گوشی موبایل  /  سامسونگ" />
      <Product 
      imgSrc = "../imgs/products/mobile/p101.png" 
      productName = "گوشی شیائومی poco x 2" 
      productPrice = "6.000.000" 
      category = "گوشی موبایل  / شیائومی" />
      <Product 
      imgSrc = "../imgs/products/mobile/p102.png" 
      productName = "گوشی موبایل سامسونگ مدل Galaxy A13 دو سیم کارت" 
      productPrice = "5.000.000" 
      category = "گوشی موبایل  /  سامسونگ" />
      <Product 
      imgSrc = "../imgs/products/mobile/p103.png" 
      productName = "گوشی شیائومی poco x 3" 
      productPrice = "8.000.000" 
      category = "گوشی موبایل  / شیائومی" />
      <Product 
      imgSrc = "../imgs/products/mobile/p104.png" 
      productName = "گوشی موبایل ایفون iphone 12 promax" 
      productPrice = "56.000.000" 
      category = "گوشی موبایل  /  ایفون" />
      <Product 
      imgSrc = "../imgs/products/mobile/p102.png" 
      productName = "گوشی موبایل سامسونگ مدل Galaxy A51 دو سیم کارت" 
      productPrice = "8.000.000" 
      category = "گوشی موبایل  /  سامسونگ" />
      <Product 
      imgSrc = "../imgs/products/mobile/p101.png" 
      productName = "گوشی موبایل سامسونگ مدل Galaxy A51 دو سیم کارت" 
      productPrice = "8.000.000" 
      category = "گوشی موبایل  /  سامسونگ" />
      <Product 
      imgSrc = "../imgs/products/mobile/p100.png" 
      productName = "گوشی موبایل سامسونگ مدل Galaxy A51 دو سیم کارت" 
      productPrice = "8.000.000" 
      category = "گوشی موبایل  /  سامسونگ" />

      </div>
    </div>
  )
}

export default BestSellingProducts
