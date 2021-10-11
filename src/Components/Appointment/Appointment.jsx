import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../Home/Header/Navbar/Navbar';
import AppointmentForm from './AppointmentForm/AppointmentForm';
import FixAppointment from './FixAppointment/FixAppointment';
// import './appointment.css'
import { appContext } from '../../App';
export default function Appointment() {

 const {loadOnAppointment,setLoadOnAppointment,syncAppointment}=useContext(appContext)

console.info(loadOnAppointment)

 useEffect(()=>{
  setLoadOnAppointment(true)
 },[syncAppointment])


 return (
  <div className={loadOnAppointment}>
   <Navbar menuFor="appointment"/>
   <FixAppointment/>
   {/* <AppointmentForm/> */}


  </div>
 )
}
