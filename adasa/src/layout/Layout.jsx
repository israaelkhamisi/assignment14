import React from 'react'
import Navbar from '../navbar/Navbar'
import { Outlet , useLocation } from 'react-router'
import Footer from '../Footer/Footer'
import { useEffect } from 'react'
export default function Layout() {
  let location = useLocation()
useEffect(() => {
  window.scrollTo(0, 0)
}, [location.pathname])
  return (
    <div>
      <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
  )
}
