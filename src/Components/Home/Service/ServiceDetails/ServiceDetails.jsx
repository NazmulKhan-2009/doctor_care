import React from 'react'
import ServiceCard from './ServiceCard';
import { serviceData } from './serviceData';
// import '../../OurDoctors/ourDoctors.css'

export default function ServiceDetails() {

  const handleServiceList=()=>{

  }
 return (
    
     <div className="container mt-5" id="button">

       
      <div className="row">         
          {
           serviceData.map(service=>
           <ServiceCard 
            key={service.title}
            service={service}
             />
           )
          }
          {/* <button className="doctor_details" onClick={handleServiceList}>Other Services</button>   */}
          <button className="button_style_all" style={{outline:"none"}}  onClick={handleServiceList}>Other Services <i class="fas fa-arrow-up"></i></button>  
      </div> 

    </div> 

      
 )
}
