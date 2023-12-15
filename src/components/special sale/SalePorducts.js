import React from 'react'
import SaleProductsCard from './SaleProductsCard'
import SpecialSaleText from './SpecialSaleText'

import './saleporducts.css'
function SalePorducts() {
  return (
    <>
<div id='bg-section-sale'>
    <div className='container mx-auto p-5 mt-10'>
        <SpecialSaleText />
        <SaleProductsCard />
    </div>
</div>
    </>
  )
}

export default SalePorducts
