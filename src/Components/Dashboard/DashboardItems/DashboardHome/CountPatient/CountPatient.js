import { useContext } from 'react';
import { CountUp } from 'use-count-up';
import {appContext} from '../../../../../App' ;
import './CountPatient.css';

export default function CountPatient() {
  const {appointmentList,appointmentDate}=useContext(appContext)
  const userInfo=JSON.parse(sessionStorage.getItem('userInfo'))

  
  const color=['#FDA006' , '#00C689' ,'#3DA5F4', '#F1536E'];
  const visitation=['Total Appointments','Not Visited' , 'Visited' , 'Cancel'];
  const adminTitle= ['Total Appointments','Pending Appointments','Appointments Done','Cancel Appointments'];

  const userAppointment=visitation.map((item,i)=> {return{['count']: appointmentList.filter(app=>item==='Total Appointments' ? app.email===userInfo.email : app.status===item && app.email===userInfo.email && userInfo.entrant!=='admin').length , ["area_title"]:adminTitle[i],["color"]:color[i]}})
  // console.info(userAppointment)

  const adminAppointment=adminTitle.map((item,i)=>{return {['count']:item==='Total Appointments'? appointmentList.length  : appointmentList.filter(app=>  app.status===visitation[i]).length,["area_title"]:item,["color"]:color[i] } })
  // console.info(adminAppointment)

  const appointmentData=userInfo.entrant==='admin' ? adminAppointment : userAppointment
  return (
    <section id="patient_count" className="py-5">
    <div className="container-fluid">
    <h4>Appointment Status</h4>
      <div className="row">     
      {appointmentData.map((item)=>
        <div key={Math.random()} className="col-md-3 count_area">
        <div className="para" style={{background:item.color}}>
          {/* <h1>{item.count}</h1><span>{item.area_title}</span> */}
          <h1><CountUp isCounting end={item.count} duration={2.2}/></h1><span>{item.area_title}</span>
        </div>
      </div>
      )}
      </div>
    </div>
    </section>
  )
  }
