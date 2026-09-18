import React from 'react'
import './Notfound.css'
import { Link } from 'react-router'

export default function Notfound() {
  return (<>
    <div className='hero'>
        <div className='container w-75 mx-auto py-5'>
      <h1 className='py-5 NOT text-center'>404</h1>  
       <div className='circle-wrapper'>
      <div className='circle'>
        <i className="fa-regular fa-face-frown fa-xs"></i>
      </div>
      <span className='dot1 dot-orange '></span>
      <span className='dot1 dot-yellow'></span>
    </div>
<h1 className='text-white text-center mt-4'>عفواً! الصفحة غير موجودة</h1>
<p className='text-secondary text-center mt-4 w-50 mx-auto no'>الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى المسار الصحيح.</p>
   <div className='d-flex justify-content-center gap-3 flex-wrap mt-4'>
  <Link to='/' className='btn-home'>
    <i className="bi bi-house"></i>
    الذهاب للرئيسية
  </Link>

  <Link to='/Blog' className='btn-articles'>
    <i className="bi bi-newspaper"></i>
    تصفح المقالات
  </Link>
</div>

<hr className='divider' />

<p className='helpful-text text-center'>قد تجد هذه مفيدة:</p>

<div className='helpful-links'>
  <Link to='/Blog'>المدونة</Link>
  <span>•</span>
  <Link to='/About'>من نحن</Link>
  <span>•</span>
  <Link to='/privacy'>الخصوصية</Link>
</div>
   
    </div></div>
 </> )
}
