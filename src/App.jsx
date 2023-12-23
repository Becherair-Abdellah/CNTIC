import React from 'react'
import Navbar from './components/PublicComponents/Navbar'
import { Outlet } from 'react-router'
import Footer from './components/PublicComponents/Footer'
export default function App() {
  return (
    <div>
      <Navbar />

      <div className=' min-h-[calc(100vh-85px)]'>
        <Outlet />
      </div>
      <Footer/>
    </div>
  )
}
