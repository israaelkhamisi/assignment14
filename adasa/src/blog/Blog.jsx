import React from 'react'
import './Blog.css'
import Articles from '../Articles/Articles'
import { useState } from 'react'
import { useLocation } from 'react-router'

export default function Blog() {
let [search,searchvalu]= useState('')
let location =useLocation()
 let[category,setcategory]=useState(location.state?.category ||'جميع المقالات')
  return (<>

   <div className='mt-5 p-5 hello2'>
      <div className='badge0 mt-5 text-center d-flex justify-content-center align-items-center '>
      <div className='dot'></div>
      <i className="fa-regular fa-newspaper"></i>
      <p className='p-0 m-0'>مدونتنا</p>
        </div>
        <h1 className='text-center mt-4 fw-bolder fonts2'>استكشف <span>مقالاتنا</span></h1>
        <h4 className='text-center logoc2'>اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث</h4>
        
        
        </div>
        <div className='hello2e'>
          <div className='container w-75 mx-auto'>
            <nav className="navbar   navbar-expand-lg navbar-light bg-transparent">
 
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    
    <form className="form-inline my-2 my-lg-0">
      <input onChange={(e)=>searchvalu(e.target.value)} className="form-control mr-sm-2 bg-transparent  input-dark text-secondary" type="search" placeholder="ابحث فى المقالات...." aria-label="Search"/>

    </form>
    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
      <li className="nav-item  ">
        <button onClick={()=>setcategory('جميع المقالات')} className={`nav-link  rounded-4 me-2 ${category ===  'جميع المقالات' ? 'active' : ''} `} to="/blog" >جميع المقالات</button>
      </li>
       <li className="nav-item ">
        <button onClick={()=>setcategory('إضاءة')} className={`nav-link  rounded-4 me-2 ${category ===  'إضاءة' ? 'active'  : ''} `} to="/blog/lighting">إضاءة</button>
      </li>
       <li className="nav-item ">
        <button  onClick={()=>setcategory('بورتريه')}  className={`nav-link  rounded-4 me-2 ${category ===  'بورتريه'  ? 'active'  : ''} `} to="/blog/portrait">بورتريه</button>
      </li>
       <li className="nav-item ">
        <button onClick={()=>setcategory('مناظر طبيعية')}  className={`nav-link  rounded-4 me-2 ${category ===  'مناظر طبيعية'  ? 'active' : ''} `} to="/blog/landscape">مناظر طبيعية</button>
      </li>
       <li className="nav-item ">
        <button onClick={()=>setcategory('تقنيات')}  className={`nav-link  rounded-4 me-2 ${category ===  'تقنيات' ? 'active' : ''} `} to="/blog/techinques">تقنيات</button>
      </li>
       <li className="nav-item ">
        <button onClick={()=>setcategory('معدات')}  className={`nav-link  rounded-4 me-2 ${category ===  'معدات' ? 'active': ''} `} to="/blog/equepmint">معدات</button>
      </li>
    
    </ul>
  </div>
</nav>
<hr className='border-bottom-3 text-secondary w-100'/>
<Articles category={category}  search={search}/>
          </div>
        </div>
        
        </>
       
  )
}

