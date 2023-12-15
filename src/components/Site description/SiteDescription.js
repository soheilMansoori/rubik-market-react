import React from 'react'

function SiteDescription() {
  return (
    <div className='container mx-auto p-1 mt-10'>
      <div className='grid grid-cols-1 sm:grid-cols-4 gap-2 text-center mb-2'>
        <div className='flex flex-row items-center justify-center'>
        <img src="./imgs/logo/benefit1.png" alt="" />
        <p className='p-5'>پشتیبانی 24 ساعته</p>
        </div>
        <div className='flex flex-row items-center justify-center'>
        <img src="./imgs/logo/benefit2.png" alt="" />
        <p className='p-5'>ضمانت اصالت کالا</p>
        </div>
        <div className='flex flex-row items-center justify-center'>
        <img src="./imgs/logo/benefit3.png" alt="" />
        <p className='p-5'>ضمانت بازگشت وجه</p>
        </div>
        <div className='flex flex-row items-center justify-center'>
        <img src="./imgs/logo/benefit4.png" alt="" />
        <p className='p-5'>ارسال سریع و رایگان </p>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default SiteDescription
