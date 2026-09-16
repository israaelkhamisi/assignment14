import React from 'react'
import './hero.css'
import Featured from './Featured'
import Thirdsection from './Thirdsection'
import Newest from './Newest'
import Latest from './Latest'
import { Link } from 'react-router'




export default function Hero() {
  
  return ( <>
    <div className=' hero mt-0'>
        <div className='container w-75 h-100 spacet p-5'>

 <div className='hello d-flex justify-content-center align-items-center w-25 mx-auto p-1 px-0 text-white'>
   <span className='dot'></span>
   <span  className='dot'></span>
   <span >مرحباً بك في عدسة</span>
    </div>
        </div>
        <div className=' text-center '>
<h1 className=' Logof text-white'>اكتشف <span className='Logoc'>فن </span><br/>
التصوير الفوتوغرافي</h1>
<h4  className='logoc2 mt-3'>انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في <br/>التصوير.</h4>
        </div>
  <div className='text-center mt-5'>
    <Link to='./Blog' className='btn btns me-2 ' >استكشف المقالات<i className=" me-2 fa-solid fa-arrow-left-long"></i> </Link>
    <Link to='./About' className='me-4 btn btns2'> <i className="ms-2 fa-solid fa-circle-info"></i>اعرف المزيد </Link>
  </div>
  <div className='container w-75'>
<div className='row justify-content-center g-5 mt-4 '>
  <div className='col-md-auto '>

<div className='item2   '>
<i className="pb-3 fa-solid fa-newspaper fa-2xl text-center textorange"></i>
<h3 className='p-0 text-warning'>50+</h3>
<p className='p-0 m-0 logoc2'>مقالة</p>
</div>

  
  </div>
   <div className='col-md-auto '>

<div className='item2 '>
<i className="pb-3 fa-solid fa-users fa-2xl text-center textorange"></i>
<h3 className='p-0  text-warning'> ألف10+</h3>
<p className='p-0 m-0 logoc2'>قارئ</p>
</div>

  
  </div>
   <div className='col-md-auto '>

<div className='item2  '>
<i className="pb-3 fa-solid fa-folder-open fa-2xl text-center textorange"></i>
<h3 className='p-0 text-warning'>4</h3>
<p className='p-0 m-0 logoc2'>تصنيفات</p>
</div>

  
  </div>
   <div className='col-md-auto '>

<div className='item2 '>
<i className="pb-3 fa-solid fa-pen-nib fa-2xl text-center textorange"></i>
<h3 className='p-0 text-warning'>6</h3>
<p className='p-0 m-0 logoc2'>كاتب</p>
</div>

  
  </div>
</div>
</div>

    </div>
    <Featured/>
    <Thirdsection/>
    <Newest/>
    <Latest/>
    </>
  )
}
