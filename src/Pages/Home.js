import React from 'react'
import AdvertisementSlide from '../components/Advertisement slide/AdvertisementSlide'
import Articles from '../components/articles/Articles'
import BestSellingProducts from '../components/Best-selling products/BestSellingProducts'
import Header from '../components/header/Header'
import Filter from '../components/Product proposal/Filter'
import SiteDescription from '../components/Site description/SiteDescription'
import SalePorducts from '../components/special sale/SalePorducts'
import Navbar from '../components/header/navbar/Navbar'
import Footer from '../components/footer/Footer'
function Home() {
  return (
    <>
    <Navbar />
    <Header />
    <Filter />
    <SalePorducts />
    <SiteDescription />
    <BestSellingProducts />
    <AdvertisementSlide />
    <Articles />
    <Footer />
  </>
    )
}

export default Home
