import AOS from 'aos';
import { useEffect } from "react";
import SectionTitle from "../../CommonComponents/SectionTitle.jsx/SectionTitle";
import about_img from "../../../images/about/about-2.png";
import './about.css';

export default function About() {


 useEffect(()=>{
  AOS.init();
  AOS.refresh();
},[])

 return (
  <section className="about_section" id="about">
    <div className="container pt-5">       
      <div className="row ">     
        <div className="about_wrapper">
          {/* column left */}
          <div className="col-md-3">
            <img className="img-fluid"  src={about_img} alt="" />
          </div>
          {/* column right */}
          <div className="col-md-9" data-aos="zoom-in-down">
            <SectionTitle
              title="About us"
              detail="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio asperiores molestias esse, numquam enim aut sit eligendi praesentium doloremque, dolorem ipsum deserunt molestiae doloribus rerum alias repudiandae nobis. Officia dolores numquam, perferendis similique dicta molestias, ipsa, quidem consequatur at incidunt voluptates? Eligendi dolores asperiores facilis dolor vero id architecto obcaecati."
            />
            <SectionTitle
              title="Our Vission"
              detail="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio asperiores molestias esse, numquam enim aut sit eligendi praesentium doloremque, dolorem ipsum deserunt molestiae doloribus rerum alias repudiandae nobis. Officia dolores numquam, perferendis similique dicta molestias, ipsa, quidem consequatur at incidunt voluptates? Eligendi dolores asperiores facilis dolor vero id architecto obcaecati."
            />                      
          </div>
        </div>                
      </div>        
    </div>
</section>
 )
}
