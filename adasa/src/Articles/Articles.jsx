import React from 'react'
import data from '../data/Articles.json'
import { useState } from 'react'
import Blog from '../blog/Blog'
import './Articles.css'
export default function Articles(props) {
    let articlelist = data.posts
    let [view, setView] = useState('grid')
   let filtered=articlelist.filter((post)=>
    ( props.category === 'جميع المقالات' || post.category === props.category) && post.category.includes(props.search)
   )
   let [page,setpage]=useState(1)
   let perpage =6
   let paginated = filtered.slice((page - 1) * perpage, page * perpage)
   let totalPages =Math.ceil((filtered.length/perpage))
   let pages =[]
   for(let i =1; i<= totalPages;i++){
    pages.push(i)
   }

  return (
    <>
    <div className='text-white py-4 d-flex align-items-start justify-content-between'>
        <h3 >عرض{filtered.length}مقالات</h3>
        <div className='' >
            <button className={`style-btn ${view === `grid` ? 'active' : ''}`} onClick={()=>setView('grid')}> <i className='fa-solid fa-table-cells-large'></i></button>
             <button className={`style-btn ${view === `list` ? 'active' : ''}`} onClick={()=>setView('list')}> <i className='fa-solid fa-list'></i></button>
        </div>
    </div>
    <div className='row g-4 rounded-3 mt-3 '>
        { paginated.map((post)=>{
            let {title,excerpt,category,image,author} =post
            return <div className={view === 'grid' ? 'col-md-4' : 'col-12'} key={post.id}>
               
                <div className='card position-relative rounded-5 border border-secondary  border-1 '>
                     <img  className='scale w-100 rounded-top-5 ' src={image} alt=""/>
                     <div className='p-3'>
                       
<h5 className='colorc  '>{title}</h5>
<span className='logo3c'>{excerpt}</span>
<p className='badge2'>{category}</p>
                </div>
                <hr className='text-secondary w-75 mx-auto'/>
                <div className='d-flex gap-2 avatarcircle p-2 '>
                <img className=' rounded-circle ' src={author.avatar} alt=""/>
               <div className='d-flex flex-column justify-content-between align-items-center' >
                <p className='p-0 m-0  text-white'>{author.name}</p>
              <p className='p-0 m-0  small text-secondary '>{author.role}</p>
 </div>
 <div className='ms-auto'>
     <i className="fa-solid fa-sm fa-chevron-left "></i>
 </div>

 </div>
                </div>

            </div>
        })}
    </div>
    <div className='d-flex justify-content-center gap-2 mt-3 pb-5'>
        {pages.map((num)=> <button key={num} onClick={()=>setpage(num)} className={`btnstyle ${page === num ? 'active' : ''}`}>{num}</button>
       
        )}
    </div>
    </>
  )
}
