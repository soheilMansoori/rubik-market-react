import React from 'react'

function ArticlesCard({imgSrc,uploadDay,tiltle,description}) {
  return (
    <div>
      <div>
        <img src={imgSrc} className='rounded md:w-full md:h-56' alt="" />
      </div>
      <div className="flex flex-col items-center justify-center text-center bg-white mt-5">
        <span className='text-sm my-1'>{uploadDay}</span>
        <h1 className='text-xl my-1'>{tiltle}</h1>
        <p className='text-sm my-1'> 
          {description}
        </p>

    <a className='flex flex-row items-center text-primary cursor-pointer'>
    بیشتر خوانید
      <i className='fa fa-angle-left p-2'></i>
    </a>
      </div>
  </div>
  )
}

export default ArticlesCard
