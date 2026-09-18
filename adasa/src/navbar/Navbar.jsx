import React from 'react'
import { Link, NavLink } from 'react-router'
import logoimg from '../assets/logo.png'
import './Navbar.css'


export default function Navbar() {
  return (
    <div className='fixed-top'>
    
        <nav className="navbar navbar2 navbar-expand-lg bg-black "  >
  <div className="container w-75 px-4  ">
   <div className='  d-flex  align-items-center gap-4'>
    <img src={logoimg} className='  logos ' alt=''/>
  <div>
    <h3 className="p-0 m-0 text-white">عدسة</h3>
    <p className="p-0 m-0 texts">عالم التصوير الفوتوغرافي</p>
  </div>
</div>
   <button
  className="navbar-toggler"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#navbarSupportedContent"
>
  <span className="navbar-toggler-icon"></span>
</button>

    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0   p-2 border border-secondary border-opacity-50 rounded-5 d-flex justify-content-center align-items-center">
        <li className="nav-item ms-0">
          <NavLink className="nav-link "  to="/">الرئيسيه</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="Blog">المدونة</NavLink>
        </li>
          <li className="nav-item">
          <NavLink className="nav-link" to="About">من نحن</NavLink>
        </li>
    
      </ul>
      <form className="d-flex" role="search">
<i className="fa-solid fa-magnifying-glass textst mt-2  me-2"></i>
        <Link to='./Blog' className="btn btno rounded-5 px-3 py-2 fs-bold" >ابدأ القراءة</Link>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
