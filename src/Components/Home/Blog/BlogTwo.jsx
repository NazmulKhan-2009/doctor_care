import React from "react";
import './blog.css'

import "swiper/swiper-bundle.min.css";
// import 'swiper/css/swiper.css'
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Virtual,
} from "swiper";

// import { Swiper, SwiperSlide } from 'swiper';

import { Swiper, SwiperSlide } from "swiper/react";
import BlogSingle from "./BlogSingle";
import SectionTitle from "../../CommonComponents/SectionTitle.jsx/SectionTitle";


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, Virtual]);

const BlogTwo = () => {
  
  

 

  return (
    
    <section id="blog" className="blog section-bg pt-5">
      <div className="container">
    
        <SectionTitle
          title="Doctor blogs"
          detail="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."
        />
    

   

    
        <Swiper
            spaceBetween={35}
            slidesPerView="auto"
            navigation={false}
            autoplay={true}
            key={Math.random()}
            
        >
        
            
              
            {[1,2,3,4,5,6].map((item,i) => (
                 <SwiperSlide key={i}>
                  <BlogSingle key={Math.random()}/>
                </SwiperSlide>
             )) }


             
              
               

          </Swiper>
      </div>    
   
 
  
    </section>      
          

  );
};

export default BlogTwo;

