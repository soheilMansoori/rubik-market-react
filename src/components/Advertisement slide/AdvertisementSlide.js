import React from 'react'

function AdvertisementSlide() {
  return (
    <div className='container mx-auto p-5 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-0'>
      <div className="md:col-span-4">
        <img src="./imgs/Advertise cards/promo-image1.png" className='w-full h-auto' alt="" />
      </div>
      <div></div>
      <div className="md:col-span-7">
        <img src="./imgs/Advertise cards/promo-image2.png" className='w-full h-full' alt="" />
      </div>
    </div>
  )
}

export default AdvertisementSlide
