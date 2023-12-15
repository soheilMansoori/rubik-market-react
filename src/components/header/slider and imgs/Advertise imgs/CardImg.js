import React from 'react'

function CardImg({imgSrc}) {
  return (
    <>
    <div className='p-1'>
      <img src={imgSrc} className='w-full sm:w-auto' alt="" />
    </div>
    </>
  )
}

export default CardImg
