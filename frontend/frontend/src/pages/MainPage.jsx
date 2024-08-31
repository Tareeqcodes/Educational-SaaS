import React from 'react'
import FeatureSection from "../components/Homepage/FeatureSection";
import Hero from '../components/Homepage/Hero';
import FeatureCards from '../components/Homepage/FeatureCards';
const MainPage = () => {
  return (
    <div>
        <FeatureSection />
        <Hero />
        <FeatureCards />
    </div>
  )
}

export default MainPage