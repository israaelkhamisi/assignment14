
import React from 'react'
import { Link } from 'react-router'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer p-3">
      <div className="container py-5">
        <div className="row g-4">

          
          <div className="col-lg-3 col-md-6">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div className="footer-logo">ع</div>
              <h4 className="m-0 text-white fw-bold">عدسة</h4>
            </div>
            <p className="footer-text">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.
            </p>
            <div className="d-flex gap-2">
              <a href="#" className="social-btn"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="#" className="social-btn"><i className="fa-brands fa-github"></i></a>
              <a href="#" className="social-btn"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="#" className="social-btn"><i className="fa-brands fa-youtube"></i></a>
            </div>
          </div>

        
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title">استكشف</h5>
            <ul className="footer-links">
              <li><Link to="/">الرئيسية</Link></li>
              <li><Link to="/blog">المدونة</Link></li>
              <li><Link to="/about">من نحن</Link></li>
            </ul>
          </div>

        
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title">التصنيفات</h5>
            <ul className="footer-links">
              <li><Link to="/blog">إضاءة</Link></li>
              <li><Link to="/blog">بورتريه</Link></li>
              <li><Link to="/blog">مناظر طبيعية</Link></li>
              <li><Link to="/blog">تقنيات</Link></li>
            </ul>
          </div>

          
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title">ابق على اطلاع</h5>
            <p className="footer-text">اشترك للحصول على أحدث المقالات والتحديثات.</p>
            <input type="email" className="footer-input mb-3" placeholder="أدخل بريدك الإلكتروني" />
            <button className="footer-btn">اشترك</button>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <div className="container d-flex flex-wrap justify-content-between align-items-center gap-2 py-3">
          <p className="m-0 footer-text">
            © 2026 عدسة. صنع بكل <i className="fa-solid fa-heart text-orange"></i> جميع الحقوق محفوظة.
          </p>
          <div className="d-flex gap-4">
            <a href="#" className="footer-link-sm">سياسة الخصوصية</a>
            <a href="#" className="footer-link-sm">شروط الخدمة</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
