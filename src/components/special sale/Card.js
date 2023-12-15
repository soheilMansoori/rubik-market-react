import React from 'react'

function Card({imgSrc,productName,productPrice,category}) {
  return (
    <>
    <div className="bg-white border border-gray-200 rounded-lg shadow" id='product-card'>
    <div className='flex flex-row justify-center'>
      <a href="#">
        <img id='product-img' className="rounded-t-lg" src={imgSrc} alt="product" />
      </a>
    </div>

    <hr />

    <div className="p-5">
      <span id='category' className='my-1'>{category}</span>
        <a href="#">
            <h5 id='product' className="mb-2 font-bold tracking-tight text-gray-900"> 
            {productName}
            </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 text-primary">
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

export default Card
