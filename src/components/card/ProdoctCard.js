import React from 'react'
import './css/prodoctcard.css'
function ProdoctCard({imgSrc,category,productName,productPrice}) {
  return (

    <>
    <div className="relative bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" id='product-card'>
    <div id="absolute">
        <i className='fa fa-wifi'></i>
    </div>
   
    <div className='flex flex-row justify-center'>
      <a href="#">
        <img id='product-img' className="rounded-t-lg" src={imgSrc} alt="product" />
      </a>
    </div>

    <hr />

    <div className="p-5">
      <span id='category' className='my-1'>{category}</span>
        <a href="#">
            <h5 id='product' className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white"> 
            {productName}
            </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-primary">
        {productPrice} تومان
        </p>
        <span id='starts'>
        <i className="fa-solid fa-star-half text-primary"></i>        
        <i className='fa fa-star text-primary'></i>
        <i className='fa fa-star text-primary'></i>
        <i className='fa fa-star text-primary'></i>
        <i className='fa fa-star text-primary me-2'></i>
        (14 رای دهنده) 
        </span>
    </div>
</div>
</>
  )
}

export default ProdoctCard
