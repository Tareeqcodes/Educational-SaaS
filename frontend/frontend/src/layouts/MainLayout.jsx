import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const MainLayout = () => {
  return (
    <div>
        <Navbar />
        <div style={{ minHeight: 'calc(100vh - 100px)' }}> {/* Adjust the height as needed */}
        <Outlet />
      </div>
       <Footer />
    </div>
  )
}

export default MainLayout