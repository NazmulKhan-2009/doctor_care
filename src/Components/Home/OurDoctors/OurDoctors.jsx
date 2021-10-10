import React, { useState } from 'react'
import SectionTitle from '../../CommonComponents/SectionTitle.jsx/SectionTitle';
import ServiceCard from '../Service/ServiceDetails/ServiceCard';
import { doctorsData } from './doctorsData';
import './ourDoctors.css'
export default function OurDoctors() {
// const [start, setStart]=useState(0)
const [end, setEnd]=useState(3)

const handleDoctorList=()=>{

 setEnd(end+3)
}


 return (
  <div className="container pt-5" id="doctor">   
    <SectionTitle 
      title="Our Doctors"
      detail="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."
    />
         
    <div className="row" id='button'>         
    {
     doctorsData.slice(0,end).map(service=>
     <ServiceCard
      key={service.title}
      service={service}
      cardFor='doctor'
       />
     )
    }
    <button className="button_style_all" style={{outline:"none"}} onClick={handleDoctorList}>See More</button>
    </div>    
  </div>
 )
}
