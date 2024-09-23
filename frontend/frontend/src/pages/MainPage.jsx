import React from 'react'
import Header from '../components/Homepage/Header';
import Hero from '../components/Homepage/Hero';
import FeatureCards from '../components/Homepage/Features/FeatureCards';
import About from '../components/Homepage/About';
// import FacultyCards from '../components/Homepage/FacultyCards'
const MainPage = () => {
  return (
    <div>
        <Header />
        <Hero />
        <About />
        <FeatureCards />
        {/* <FacultyCards /> */}
    </div>
  )
}

export default MainPage