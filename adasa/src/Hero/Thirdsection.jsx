import React from 'react'
import './Third-section.css'
import data from '../data/Articles.json'
import { Link } from 'react-router'
const icons = {
  'إضاءة': 'fa-solid fa-sun',
  'بورتريه': 'fa-solid fa-user',
  'مناظر طبيعية': 'fa-solid fa-mountain-sun',
  'تقنيات': 'fa-solid fa-sliders',
  'معدات': 'fa-solid fa-gear',
}
export default function Thirdsection() {
    let categories = data.categories
  return (
    <div className='hero2'>
        
        <div className='container w-75 mx-auto '>
  <div className='text-center py-5'>
         <div className='styleb d-inline-flex  text-center'>
            <div  className=' p-0 m-0 d-flex  align-items-center justify-content-center'>
                <span className='dot'></span>
          <span className='dot'></span>
          </div>
        
        <p className='p-0 m-0'>التصنيفات</p>
    </div>
        </div>
        <h1 className='text-white fonts4 text-center'>استكشف حسب الموضوع</h1>
        
    <p className='text-secondary text-center'>اعثر على محتوى مصمم حسب اهتماماتك</p>
<div className='row g-4 mt-3'>
  {categories.map((post) => (
    <Link to='./Blog' state={{ category: post.name }} className=' text-decoration-none col-md-3 col-6' key={post.name}>
      <div className='small-card position-relative'>
        <div className='small-icon'>
          <i className={icons[post.name]}></i>
        </div>
        <h5 className='text-white fw-bold mt-4 mb-1'>{post.name}</h5>
        <p className='text-secondary small m-0'>{post.count} مقالة</p>
              <div className='small-arrow'>
  <i className='fa-solid fa-chevron-left bg-transparent '></i>
</div>
      </div>

    </Link>
    
  ))}
</div>
    
        </div>
    </div>
  )
}
