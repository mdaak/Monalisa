import React from 'react'
import CardSection from '../componant/cardFile/CardSection';
import CarouselComp from '../componant/carouselFile/CarouselComp';
import Layout from '../Layout';


function Home() {
  return (
    <Layout>
      <CarouselComp/>
      <CardSection/>
    </Layout>
  )
}

export default Home