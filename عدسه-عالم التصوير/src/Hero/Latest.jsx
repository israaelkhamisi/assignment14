import React from 'react'
import data from '../data/Articles.json'
import './Latest.css'

export default function Latest() {
     let avatars = data.posts.slice(0, 3).map((post) => post.author.avatar)
  return (
     <div className='hero2 d-flex justify-content-center align-items-center '>
      <div className='container '>
        <div className='news-card text-center mx-auto'>

          <div className='news-icon mx-auto'>
            <i className='fa-regular fa-envelope'></i>
          </div>

          <h1 className='text-white fw-bold mt-4'>
            اشترك في <span className='text-gradient'>نشرتنا الإخبارية</span>
          </h1>
          <p className='text-secondary fs-5'>
            احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
          </p>

          <form className='news-form d-flex gap-3 mx-auto mt-4' onSubmit={(e) => e.preventDefault()}>
            <input type='email' className='news-input' placeholder='أدخل بريدك الإلكتروني' />
            <button className='news-btn'>اشترك الآن</button>
          </form>

          <div className='d-flex flex-wrap justify-content-center align-items-center gap-3 mt-4 text-secondary small'>
            <div className='d-flex align-items-center gap-2'>
              <div className='avatars'>
                {avatars.map((src, i) => (
                  <img key={i} src={src} alt='' />
                ))}
              </div>
              <span>انضم لـ <b className='text-white'>+10,000</b> مصور</span>
            </div>
            <span>•</span>
            <span>بدون إزعاج</span>
            <span>•</span>
            <span>إلغاء الاشتراك في أي وقت</span>
          </div>

        </div>
      </div>
    </div>
  )
}
