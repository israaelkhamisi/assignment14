import React from 'react'
import './About.css'
import Values2 from './Values2'
import Team from './Team'

export default function About() {
  const stats = [
  { icon: 'fa-solid fa-users', number: '+2 مليون', label: 'قارئ شهرياً' },
  { icon: 'fa-solid fa-newspaper', number: '+500', label: 'مقالة منشورة' },
  { icon: 'fa-solid fa-pen-nib', number: '+50', label: 'كاتب خبير' },
  { icon: 'fa-solid fa-book-open', number: '+15', label: 'تصنيف' },
]
  return (<>
     <div className='hero py-5'>
      <div className='container w-75 py-5 text-center'>

        <div className='styleb d-inline-flex align-items-center gap-2'>
          <span className='dot'></span>
          <span className='dot'></span>
          <p className='p-0 m-0'>من نحن</p>
        </div>

        <h1 className='text-white fw-bold display-3 mt-4'>
          مهمتنا هي <span className='text-gradient'>الإعلام والإلهام</span>
        </h1>

        <p className='text-secondary fs-5 mx-auto about-text mt-3'>
          مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية
          لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم
          من خلال محتوى عالي الجودة.
        </p>

        <div className='row g-4 justify-content-center mt-4'>
          {stats.map(({label,icon,number}) => ( 
            <div className='col-md-3 col-6' key={label}>
              <div className='about-card'>
                <i className={`${icon} about-icon`}></i>
                <h3 className='about-num mt-3 mb-1'>{number}</h3>
                <p className='text-secondary small m-0'>{label}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
    <Values2/>
    <Team/>
    </>
  )
}
