import React from 'react'
import './Team.css'
import team1 from '../assets/team1.png'
import team2 from '../assets/team2.png'
import team3 from '../assets/team3.png'
import team4 from '../assets/team4.png'
import team5 from '../assets/team5.png'
import team6 from '../assets/team6.png'

export default function Team() {

  let team = [
    { img: team1, name: 'سالم أحمد', job: 'مصور محترف' },
    { img: team2, name: 'محمد علي', job: 'مصور بورتريه' },
    { img: team3, name: 'إبراهيم حسن', job: 'مصور طبيعة' },
    { img: team4, name: 'داود خالد', job: 'مدرب تصوير' },
    { img: team5, name: 'ليث محمود', job: 'فنان بصري' },
    { img: team6, name: 'جمال عبدالله', job: 'مصور ومراجع تقني' },
  ]

  return (
    <section className='team-section'>
      <div className='container py-5'>

        <div className='text-center mb-5'>
          <span className='team-badge'>
            <span className='badge-dot'></span>
            فريقنا
          </span>
          <h2 className='team-title'>تعرف على كتابنا</h2>
          <p className='team-subtitle'>
            فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع.
          </p>
        </div>

        <div className='row g-4'>
          {team.map(({ img, name, job }, index) => (
            <div className='col-lg-4 col-md-6' key={index}>
              <div className='team-card'>

                <div className='avatar-wrapper'>
                  <img src={img} alt={name} className='avatar' />
                  <span className='verified'>
                    <i className="fa-solid fa-check"></i>
                  </span>
                </div>

                <h3>{name}</h3>
                <p>{job}</p>

                <div className='social-links'>
                  <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                  <a href="#"><i className="fa-brands fa-github"></i></a>
                  <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}