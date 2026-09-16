import React from 'react'
import './Newest.css'
import { Link } from 'react-router'
import data from '../data/Articles.json'

export default function Newest() {

     let Newarticles = data.posts.filter((post) => !post.featured).slice(0, 3)

  return (
    <div className='hero3'>
          <hr className='border-secondary opacity-50 m-0'/>
      <div className='container w-75 py-5'>

        
        <div className='styleb d-inline-flex align-items-center gap-2'>
          <span className='dot'></span>
          <span className='dot'></span>
          <p className='p-0 m-0'>الأحدث</p>
        </div>
        <h1 className='text-white fonts4 mt-3'>أحدث المقالات</h1>
        <div className='d-flex justify-content-between align-items-center mt-3'>
          <p className='text-secondary m-0'>محتوى جديد طازج من المطبعة</p>
          <Link to='/blog' className='latest-link'>
            عرض جميع المقالات <i className='fa-solid fa-arrow-left ms-2'></i>
          </Link>
        </div>

        
        <div className='row g-4 mt-3'>
          {Newarticles.map((post) => {
            let { id, title, excerpt, category, image, author, readTime, date } = post
            return (
              <div className='col-md-4' key={id}>
                <div className='latest-card position-relative'>
                  <img className='latest-img' src={image} alt='' />
                  <span className='badge2'>{category}</span>

                  <div className='p-3'>
                    <div className='d-flex align-items-center gap-2 text-secondary small mb-2'>
                      <i className='fa-regular fa-clock'></i>
                      <span>{readTime}</span>
                      <span>•</span>
                      <span>{date}</span>
                    </div>
                    <h5 className='colorc fw-bold'>{title}</h5>
                    <p className='logo3c'>{excerpt}</p>
                  </div>

                  <hr className='text-secondary w-75 mx-auto m-0' />

                  <div className='d-flex align-items-center gap-2 avatarcircle p-3'>
                    <img className='rounded-circle' src={author.avatar} alt='' />
                    <div>
                      <p className='p-0 m-0 text-white'>{author.name}</p>
                      <p className='p-0 m-0 small text-secondary'>{author.role}</p>
                    </div>
                    <div className='ms-auto latest-arrow'>
                      <i className='fa-solid fa-chevron-left'></i>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
      
    </div>
  
  )
}
