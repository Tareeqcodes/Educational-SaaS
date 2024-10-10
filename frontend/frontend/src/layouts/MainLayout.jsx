import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BottomNav from '../components/Hamburger/BottomNav'
import TopNav from '../components/Hamburger/TopNav'

const MainLayout = () => {
  return (
    <>
    <div className="flex flex-col min-h-screen">
        <TopNav />
        <Navbar />
        <div className="flex-grow">
        <Outlet />
        </div>
       <Footer className="hidden md:block" />
       <BottomNav />
    </div>
    </>
  )
}

export default MainLayout