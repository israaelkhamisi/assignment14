import React from 'react'
import './Values2.css'
export default function Values2() {
     let values = [
    { icon: 'fa-solid fa-bullseye', title: 'الجودة أولاً', desc: 'محتوى مدروس ومكتوب بخبرة' },
    { icon: 'fa-solid fa-bolt', title: 'تركيز عملي', desc: 'أمثلة واقعية يمكنك تطبيقها اليوم' },
    { icon: 'fa-solid fa-handshake', title: 'المجتمع', desc: 'تعلم مع آلاف المصورين' },
    { icon: 'fa-solid fa-rotate', title: 'دائماً محدث', desc: 'أحدث الاتجاهات وأفضل الممارسات' },
  ]
  return (
    <section className='values-section'>
      <div className='container py-5'>

        <div className='text-center mb-5'>
          <h2 className='values-title'>
            <span className='title-bar'></span>
            قيمنا
            <span className='title-bar'></span>
          </h2>
          <p className='values-subtitle'>المبادئ التي توجه كل ما نقوم بإنشائه</p>
        </div>

        <div className='row g-4'>
          {values.map(({icon,title,desc}, index) => (
            <div className='col-lg-3 col-md-6' key={index}>
              <div className='value-card'>
                <i className={icon}></i>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section> 
  )
}
