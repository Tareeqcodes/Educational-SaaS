import React from 'react'
import Header from '../components/Homepage/Header';
import Hero from '../components/Homepage/Hero';
import Features from '../components/Homepage/Features/Features';
import FeatureCards from '../components/Homepage/Features/FeatureCards';
import About from '../components/Homepage/About';
// import FacultyDropdown from '../components/Homepage/FacultyDropdown';
import FacultyCards from '../components/Homepage/FacultyCards'
const MainPage = () => {
  return (
    <div>
        <Header />
        <Hero />
        <About />
        <Features />
        <FeatureCards />
        {/* <FacultyDropdown /> */}
        <FacultyCards />
    </div>
  )
}

export default MainPage