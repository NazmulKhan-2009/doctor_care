import React from 'react'
import Navbar from '../Home/Header/Navbar/Navbar';
import AppointmentForm from './AppointmentForm/AppointmentForm';
import FixAppointment from './FixAppointment/FixAppointment';

export default function Appointment() {



 return (
  <>
   <Navbar menuFor="appointment"/>
   <FixAppointment/>
   <AppointmentForm/>


  </>
 )
}
