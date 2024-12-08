import React from 'react'
import Header from '../components/Homepage/Header';
import FeatureCards from '../components/Homepage/FeatureCards';
import About from '../components/Homepage/About';
import AlgoliaSearch from '../components/AlgoliaSearch';
const MainPage = () => {
  return (
    <section className="flex mt-20 flex-col justify-center items-center text-center">
      <AlgoliaSearch />
        <Header />
       
        <About />
        <FeatureCards />
    </section>
  )
}

export default MainPage