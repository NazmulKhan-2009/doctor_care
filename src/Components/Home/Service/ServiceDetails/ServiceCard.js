import React from 'react'

export default function ServiceCard({service,cardFor}) {
 return (
  <div className="col-md-4 col-sm-10 pb-2 doctor">

  <img  src={service.img} alt="" width={cardFor==="doctor" ? "25%" : "20%"}/>
  <div className="doctor_data">
   <span>{service.name}</span>
   <h5>{service.title}</h5>
   <p>{service.description} <span>{cardFor==="doctor" ? "Details" : "Get Appointment"}</span></p> 
  </div>
   
  </div>
 )
}
