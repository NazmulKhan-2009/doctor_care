import React, { useContext } from 'react'
import { appContext } from '../../../App';
import './AvailableDoctors.css'
export default function AvailableDoctors({doctor}) {

  

 return (
  <div className="available_doctors d-flex flex-row align-items-center" >

      <img src={doctor.image} alt="" width="30%" height="90%"/>
 
    <div className="doctor_info" >
     <span>Name: Dr. {doctor.name}</span><br/>
     <span>{doctor.specialist}</span><br/>
     <span>Phone: {doctor.phone}</span>
     <p>ID: {doctor.doctorId}</p>
    </div>  
  </div>
 )
}
