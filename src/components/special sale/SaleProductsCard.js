import React from 'react'
import Card from './Card'
import './saleproductscard.css'
function SaleProductsCard() {
  return (
    <>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-2 mt-10'>
        <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 bg-white border border-gray-200 rounded-lg shadow  md:mb-20">
          <div>
            <img src="./imgs/products/p100.png" alt="" />
          </div>
          <div className='flex flex-col items-start justify-evenly p-5'>
            <div>
              <p id='special-sale-title'>محصول ویژه امروز</p>
              <p className='text-sm'>فروش به مدت محدود</p>
            </div>
            <h1 className='text-xl'>گوشی موبایل سامسونگ مدل Galaxy A51 دو سیم کارت</h1>
            <span id='special-sale-title'>8.000.000 تومان <del className='p-2 text-black'>10.000.000 تومان</del></span>
            <button className='flex flex-row items-center text-primary'>همین حالا بخرید <i className='fa fa-angle-left p-2'></i></button>
            <div>timer</div>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1">
          <Card
            imgSrc="./imgs/products/p300.png"
            productName="هدفون بی سیم سامسونگ مدل Galaxy Buds Live"
            productPrice="3.000.000"
            category="هدست  /  سامسونگ"
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <Card
            imgSrc="./imgs/products/p200.png"
            productName="لپ تاپ 15 اینچی ایسوس مدل VivoBook X543MA-DM905"
            productPrice="20.000.000"
            category="لپتاپ  /  ایسوس"
          />
        </div>
      </div>
    </>
  )
}

export default SaleProductsCard
