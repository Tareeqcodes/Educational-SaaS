import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../components/profile/Dashboard'
import Upload from '../components/Storage/Upload'
import News from './News'
 
const Profile = () => {
  return (
    <>
    
       <div className="bg-white text-black">
        <Dashboard />
       </div>
      <Routes>
        <Route path='/uploads' element={<Upload />}/>
        <Route path='/news' element={<News />}/>
      </Routes>
    
    </>
  )
}

export default Profile