import React from 'react'
import online_care_img from '../../../images/online_care/oc-3.png'
import SectionTitle from '../../CommonComponents/SectionTitle.jsx/SectionTitle';
import phone from '../../../images/online_care/phone.png';
import mobile from '../../../images/online_care/mobile.png';
import dl from '../../../images/online_care/dl.png';
import './onlineCare.css'
export default function OnlineCare() {
 return (
  <section className="about_section" id="online">
    <div className="container pt-5">

    <SectionTitle
              title="Online Care"
              
            />       
      <div className="row online_style">     
       
          {/* column left */}
          <div className="col-md-8 order-md-1 order-2" 
          // data-aos="zoom-in-down"  data-aos-delay="200"
          >
           
           <p className="pt-5 text-justify text-dark">
           consult with a professional doctor from the comfort of your home.Health Advice and Consulting Online Anytime. Start Today! Ask Your Health Questions Online Anytime.Experts are Here for You. Start Today! Online Tutors 24/7. 
           </p>
           <h5>Easy Steps For care Your Health</h5>
           <div className="row steps">
             <div className="col-md-4 d-flex align-items-center">
              <img src={dl} alt="" width="40"  />
              <p className="mx-3 pt-3">Download our App <br/> on your phone</p>
             </div>
             <div className="col-md-4 d-flex align-items-center ">
              <img src={mobile} alt="" width="40"/>
              <p className="mx-3 pt-3">Register with <br/> the App</p>
             </div>

             <div className="col-md-4 d-flex align-items-center">
              <img src={phone} alt="" width="40"/>
              <p className="mx-3 pt-3">Call for Appointment <br/> +998574587895</p>            
             </div>
           </div>
           

           <div className=" text-center">  
             <button className=" button_style_all mt-3" style={{outline:"none"}}>Book Appointment</button>
           </div>
           
          </div>

          {/* column right */}
          <div className="col-md-4 order-md-2 order-1" 
          // data-aos="zoom-in-down" data-aos-delay="400"
          >
           <img className="img-fluid"  src={online_care_img} alt="" />       
          </div>
      

                        
      </div>        
    </div>
</section>
 )
}
