import React from 'react'
import demo_img from '../../../images/doctor-sm.png'
import './blog.css'
export default function BlogSingle() {
 return (

  <div className=''>
<div className="blog-item " data-aos="fade-up">
  <p>
    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
    Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
  </p>
  <img src={demo_img} className="blog-img"  alt="" />
  <h3>Saul Goodman</h3>
  <h4>Ceo &amp; Founder</h4>
</div>   
</div>   

 )
}
