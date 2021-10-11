import React from 'react';
import SectionTitle from '../../CommonComponents/SectionTitle.jsx/SectionTitle';
import cont_img from '../../../images/contact/contact_1.png';
import './contact.css';
import Form from './Form/Form';


export default function Contact() {
 return (
  <section className="about_section" id="contact">
  <div className="container pt-5">

     <SectionTitle
       title="Contact with us"        
    />       
    <div className="row d-flex align-items-center">         
        {/* column left */}
        <div className="col-md-4 order-md-1 order-2 contact_left" data-aos="zoom-in-down"  data-aos-delay="200">
        <img className="img-fluid"  src={cont_img} alt="" />   
        </div>

        {/* column right */}
        <div className="col-md-8 order-md-2 order-1 my_form d-flex align-items-center"
          // data-aos="zoom-in-down"
          // data-aos-delay="400"
          >
          
          <Form/>
        </div>                     
    </div>        
  </div>
</section>
 )
}
