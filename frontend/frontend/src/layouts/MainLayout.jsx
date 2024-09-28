import React from 'react'
import { Outlet } from 'react-router-dom'
import Dashboard from '../components/Homepage/Dashboard/Dashboard'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
        <Navbar />
        <div className='flex flex-grow'>
        <Dashboard />
        <div className='flex-grow p-4' >
        <Outlet />
      </div>
        </div>
       <Footer />
    </div>
  )
}

export default MainLayout