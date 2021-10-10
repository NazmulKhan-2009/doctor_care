import React from 'react'
import About from '../About/About';
// import Blog from '../Blog/Blog';
import BlogTwo from '../Blog/BlogTwo';

import Header from '../Header/Header/Header';
import OurDoctors from '../OurDoctors/OurDoctors';
import Service from '../Service/Service';
import { Link as SmoothLink } from 'react-scroll';
// import $ from 'jquery';
import './home.css'
import OnlineCare from '../OnlineCare/OnlineCare';
import BackToTop from '../../CommonComponents/BackToTop/BackToTop';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
export default function Home() {

 


 return (
  <>
   <Header/>
   <About/>
   <Service/>
   <OurDoctors/>
   {/* <Blog/> */}
   <BlogTwo/>
   <OnlineCare/>
   <Contact/>
   <Footer/>


   {/* <a href="#home" className="back-to-top">  	
     <i className="icofont-simple-up"></i>
   </a> */}

   <BackToTop showBelow={250} />
   

   
  {/* <SmoothLink className='link_style desk_menu' to="home" smooth={true} duration={800}> <i class="back-to-top fas fa-arrow-up"></i> </SmoothLink> */}
  
  {/* <a style={{color:'red'}} className='link_style deviceMenu' href="#home" smooth={true} duration={800}><i className="back-to-top fas fa-arrow-up"></i> </a> */}

  {/* <i class="back-to-top fas fa-arrow-up"></i> */}
  
  </>
 )
}
