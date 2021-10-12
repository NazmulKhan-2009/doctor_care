import React from 'react'
import './blog.css';
import demo_img from '../../../images/doctor-sm.png'
import SectionTitle from '../../CommonComponents/SectionTitle.jsx/SectionTitle';
// import $ from 'jquery';
export default function Blog() {



  // $(".blog-carousel").owlCarousel({
  //   autoplay: true,
  //   dots: true,
  //   loop: true,
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     768: {
  //       items: 2
  //     },
  //     900: {
  //       items: 3
  //     }
  //   }
  // });



 return (
  <section id="blog" className="blog section-bg pt-5">
    <div className="container">
        <SectionTitle
          title="Doctor blogs"
          detail="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."
        />

        <div className="owl-carousel blog-carousel">
        {Array(6).fill().map(()=>
          <div key={Math.random()} className="blog-item" 
          // data-aos="fade-up"
          >
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <img src={demo_img} className="blog-img"  alt="" />
            <h3>Saul Goodman</h3>
            <h4>Ceo &amp; Founder</h4>
          </div>      
          )  
        }
        </div>
    </div>
  </section>
 )
}
