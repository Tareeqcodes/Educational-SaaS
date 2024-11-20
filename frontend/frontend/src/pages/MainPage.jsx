import React from 'react'
import Header from '../components/Homepage/Header';
import Hero from '../components/Homepage/Hero';
import FeatureCards from '../components/Homepage/FeatureCards';
import About from '../components/Homepage/About';
const MainPage = () => {
  return (
    <section>
      
        <Header />
        <Hero />
        <About />
        <FeatureCards />
    </section>
  )
}

export default MainPage