import React from 'react'
import Header from '../components/Homepage/Header';
import Hero from '../components/Homepage/Hero';
import Features from '../components/Homepage/Features/Features';
import FeatureCards from '../components/Homepage/Features/FeatureCards';
import About from '../components/Homepage/About';
const MainPage = () => {
  return (
    <div>
        <Header />
        <Hero />
        <About />
        <Features />
        <FeatureCards />
    </div>
  )
}

export default MainPage