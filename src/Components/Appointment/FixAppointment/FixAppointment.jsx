import React, { useContext, useEffect, useState } from 'react'
import Calendar from '../Calender/Calender';
import Selector from '../../CommonComponents/Selector/Selector';
import { doctorSelector } from '../../CommonComponents/Selector/selectorData';
// import AvailableDoctors from '../AvailableDoctors/AvailableDoctors';

import './fixAppointment.css';
import { appContext } from '../../../App';
import DoctorsList from '../../Dashboard/DashboardItems/DashboardAdmin/OurDoctors/DoctorsList';
import { doctorSpecialist } from '../../Dashboard/DashboardItems/DashboardAdmin/AdminDataForm/doctorSpecialiteisData';
import AppointmentForm from '../AppointmentForm/AppointmentForm';


export default function FixAppointment() {

const {appointmentDate,item,setItem}=useContext(appContext)


 return (
  <section className="pt-5" id="fix_appointment">
    <div className="container pt-5">           
      <div className="row fix_appointment">           
          {/* column left */}
        <div className="col-md-4   mx-auto"  data-toggle="tooltip" data-placement="top" title="Select Appointment Date">        
          <Calendar/>
          <AppointmentForm/>
        </div>
        {/* column right */}
        <div className=" col-md-8 mx-auto wrapper_doctor_info">  
          <div className="row">
            <div className="col-6">
              {/* <Selector options={doctorSelector}/> */}
              <Selector options={doctorSpecialist}/>
            </div>
            <div className="col-1">
            <i className="fas fa-sync" onClick={()=>setItem(null)}></i>
           
            </div>
            <div className="col-5">
              <h5 className=" text-danger font-weight-bold">{appointmentDate && `Appointment date : ${appointmentDate.toLocaleDateString()}`}</h5>
            </div>
          </div>
            

            <div className="pt-3 doctor_list ">
              <DoctorsList selection={item}/>
            </div>      
        </div>                            
      </div>        
    </div>
</section>
 )
}
