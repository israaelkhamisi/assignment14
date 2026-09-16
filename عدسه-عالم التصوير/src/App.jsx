import { useState } from 'react'
import { useEffect } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router'
import Layout from './layout/Layout'
import Navbar from './navbar/Navbar'
import Footer from './Footer/Footer'
import Hero from './Hero/Hero'
import './App.css'
import Blog from './blog/Blog'
import About from './about/About'
import Articles from './Articles/Articles'
import Notfound from './Notfound/Notfound'

function App() {
  let routes = createBrowserRouter([
    {path:'',element:<Layout/>,children:[
     { index: true, element: <Hero /> },
    {path:'Blog',element:<Blog/>,children:[
      {index:true ,element:<Articles/>}]},
  {path:'About',element:<About/>},
  {path:'*',element:<Notfound/>}]}
  ])
 useEffect(()=>{
  document.documentElement.lang= 'ar'
  document.documentElement.dir = 'rtl'
 },[])
  return (
    <>
     <RouterProvider router={routes}/>
    </>
  )
}

export default App
