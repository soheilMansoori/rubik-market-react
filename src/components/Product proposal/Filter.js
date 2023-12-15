import React from 'react'
import Product from './products/Product'
import './fliter.css'
function Filter() {
  return (
    <>
    <div className='container mx-auto p-5 md:mt-10'>
      <div className='flex justify-center'>
        <ul className='flex flex-row p-1 text-center'>
          <li className="text-sm md:text-xl md:p-2 cursor-pointer fliter-item fliter-item-active">محصولات منتخب</li>
          <li className="text-sm md:text-xl p-0 md:p-2 mx-2 cursor-pointer fliter-item">تخفیف خورده</li>
          <li className="text-sm md:text-xl p-0 md:p-2 mx-2 cursor-pointer fliter-item">پربازدید ترین ها</li>
        </ul>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-5 md:mt-10 items-center gap-5'>
      <Product 
      imgSrc = "./imgs/products/p100.png" 
      productName = "گوشی موبایل سامسونگ مدل Galaxy A51 دو سیم کارت" 
      productPrice = "8.000.000" 
      category = "گوشی موبایل  /  سامسونگ" />
      <Product 
      imgSrc = "./imgs/products/p200.png" 
      productName = "لپ تاپ 15 اینچی ایسوس مدل VivoBook X543MA-DM905" 
      productPrice = "20.000.000" 
      category = "لپتاپ  /  ایسوس" />
      <Product 
      imgSrc = "./imgs/products/p300.png" 
      productName = "هدفون بی سیم سامسونگ مدل Galaxy Buds Live"
      productPrice = "3.000.000" 
      category = "هدست  /  سامسونگ" />
      <Product 
      imgSrc = "./imgs/products/p400.png" 
      productName = "دوربین دیجیتال کانن مدل EOS 2000D به همراه لنز 18-55 میلی متر DC III" 
      productPrice = "12.000.000" 
      category = "دوربین  /  کنون" />
      </div>     
    </div>
    </>
  )
}

export default Filter
