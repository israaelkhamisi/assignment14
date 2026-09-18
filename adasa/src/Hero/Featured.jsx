import React from 'react'
import './Featured.css'
import data from '../data/Articles.json'
import { Link } from 'react-router'


export default function Featured() {
    let featured = data.posts.filter((post)=> post.featured === true)
  return (
    <> 
    <div className='hero2 '>

   <div className='container w-75 py-5'>
         <div className='styleb d-flex '>
            <div  className=' p-0 m-0 d-flex  align-items-center justify-content-center'>
                <span className='dot'></span>
          <span className='dot'></span>
          </div>
        
        <p className='p-0 m-0'>مميز</p>
    </div>
    <h1 className='text-white font3s mt-3'>مقالات مختارة</h1>
    <div className='d-flex justify-content-between mt-3'>
        <p className='text-secondary '>محتوى منتقى لبدء رحلة تعلمك</p>
        <Link to='./Blog' className='text-decoration-none btns text-white rounded-3 border-0'>عرض الكل<i className="fa-solid fa-angle-left goleft"></i></Link>
    </div>


 <div className='row g-4 mt-3'>
  {featured.map((post) => {
    let { title, excerpt, category, image, author } = post
    return (
      <div className='col-12 ' key={post.id}>
        <div className='card2 overflow-hidden position-relative rounded-5 border border-secondary border-1'>
         <div className='row g-0'>
            <div className='col-md-6 '>
                <img className='scale w-100  h-100 ' src={image} alt='' />
            </div>
            <div className='col-md-6 d-flex flex-column justify-content-between p-4'>
   <div className='p-3'>
            <h5 className='colorc'>{title}</h5>
            <span className='logo3c'>{excerpt}</span>
            <p className='badge3'> <i className="fa-solid fa-xs fa-star"></i>مميز</p>
          </div>
          <hr className='text-secondary w-75 mx-auto' />
          <div className='d-flex gap-2 avatarcircle p-2 mt-4'>
            <img className='rounded-circle' src={author.avatar} alt='' />
            <div className='d-flex flex-column justify-content-between align-items-center'>
              <p className='p-0 m-0 text-white'>{author.name}</p>
              <p className='p-0 m-0 small text-secondary'>{author.role}</p>
            </div>
            <div className='ms-auto'>
              <span className=' d-inline-block chevrons fw-bold'>اقرأ المقال</span><i className='fa-solid fa-sm fa-arrow-left ms-2 arrows border-0 bg-transparent'></i>
            </div>
          </div>
        </div>
      </div>
     
            </div>
            
         </div>
         
          
       
   ) 
  })}
</div> 

    </div>
    <hr className='border-secondary opacity-50 m-0'/>
   </div>
    
    </>
  )
  
}
