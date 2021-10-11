import AOS from 'aos';
import { useEffect } from "react";
import SectionTitle from "../../CommonComponents/SectionTitle.jsx/SectionTitle";
import about_img from "../../../images/about/about-2.png";
import vission from '../../../images/about/vission.png';
import './about.css';

export default function About() {

 useEffect(()=>{
  AOS.init();
  AOS.refresh();
},[])

 return (
  <section className="about_section pt-5" id="about">
    <div className="container pt-0">       
      <div className="row about_wrapper">            
          <div className="col-md-3">
            <img className="img-fluid"  src={about_img} alt="" />
          </div>
          <div className="col-md-9">        
            <SectionTitle
              title="About us"
              detail="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio asperiores molestias esse, numquam enim aut sit eligendi praesentium doloremque, dolorem ipsum deserunt molestiae doloribus rerum alias repudiandae nobis. Officia dolores numquam, perferendis similique dicta molestias, ipsa, quidem consequatur at incidunt voluptates? Eligendi dolores asperiores facilis dolor vero id architecto obcaecati."
            />          
          </div>
          <div className="col-md-3">
            <img className="img-fluid"  src={vission} alt="" width="80%" style={{paddingLeft:"60px"}}/>
          </div>
          <div className="col-md-9">         
            <SectionTitle
              title="Our vission"
              detail="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio asperiores molestias esse, numquam enim aut sit eligendi praesentium doloremque, dolorem ipsum deserunt molestiae doloribus rerum alias repudiandae nobis. Officia dolores numquam, perferendis similique dicta molestias, ipsa, quidem consequatur at incidunt voluptates? Eligendi dolores asperiores facilis dolor vero id architecto obcaecati."
            />         
          </div>                   
      </div>        
    </div>
</section>
 )
}
