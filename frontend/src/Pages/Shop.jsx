import React from 'react'
import Footer from '../Components/Footer/Footer'
import Hero from '../Components/Hero/Hero'
import NewCollection from '../Components/NewCollections/NewCollection'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

import Offers from '../Components/Offers/Offers'
import Popular from '../Components/Popular/Popular'


const Shop = () => {
  return (
    <div>
      <Hero></Hero>
      <Popular></Popular>
      <Offers></Offers>
      <NewCollection></NewCollection>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
      
      
    </div>
  )
}

export default Shop
