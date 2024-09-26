import React from 'react'
import Header from '../components/Homepage/Header';
import Hero from '../components/Homepage/Hero';
import FeatureCards from '../components/Homepage/Features/FeatureCards';
import About from '../components/Homepage/About';
const MainPage = () => {
  return (
    <div>
        <Header />
        <Hero />
        <About />
        <FeatureCards />
    </div>
  )
}

export default MainPage