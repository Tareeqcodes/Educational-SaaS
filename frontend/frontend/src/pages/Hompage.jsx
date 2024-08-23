import React from 'react'
import Hero from "../components/Hero";
import Homecontent from "../components/Homecontent";
import FacultyCards from '../components/FacultyCards';
// import Footer from '../components/Footer';
const Hompage = () => {
  return (
    <div>
        <Hero />
        <Homecontent />
        <FacultyCards />
        {/* <Footer /> */}
    </div>
  )
}

export default Hompage