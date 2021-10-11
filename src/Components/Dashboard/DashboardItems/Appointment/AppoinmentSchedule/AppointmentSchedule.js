import React, { useContext, useEffect, useState } from 'react';
import { appContext } from '../../../../../App';
import Calendar from '../../../../Appointment/Calender/Calender';
import Modal from '../../../../CommonComponents/Modal/Modal';
import './appointmentSchedule.css'


export default function AppointmentSchedule() {

 const {appointmentDate,appointmentList,syncAppointment}=useContext(appContext)

 const  [openModal, setOpenModal]=useState(null)
 const  [selectedOption, setSeletedOption]=useState('')
 


 const [statusChangedData, setStatusChangedData]=useState({})

 const dateWiseAppointment=appointmentList.filter(appointment=>appointment.appointmentDate===appointmentDate.toLocaleDateString())

 const [load ,setLoad]=useState(false)

 console.info(selectedOption)

const handleColor=(status)=>{
  switch (status) {
    case 'Not Visited':
      return '#5C9A67'
      
      break;

      case 'Visited':
      return '#0089D2'
      
      break;

      case 'Cancel':
      return 'crimson'
      
      break;
  
    default:
      break;
  }

}
const handleChange=(e)=>{
  setSeletedOption(e.target.value)
  setOpenModal('modal')
  // setStatusChangedData(appointment)

}

const handleModal=(appointment)=>{
  setOpenModal('modal')
  setStatusChangedData(appointment)

}

const loadFunc =(isLoad)=>{
  setLoad(isLoad)
}

useEffect(()=>{
setLoad(false)
},[syncAppointment])



 return (
  <div className="row pt-3">
   <div className="col-md-4">
    <h5 className='dash_app_head'> <span>Appointment Schedule </span> {appointmentDate.toLocaleDateString()}</h5>
     <Calendar/>
   </div>  
   <div className="col-md-8" id="appointment_table">

   
     <div className='table_head'>
        {["Sr","Name","Status","Update","Action"].map((item)=>
            <span key={Math.random()}>{item}</span>   
        )}     
     </div>
    <div className="table_body">        
      {appointmentList.length>0 ? dateWiseAppointment.map((appointment,i)=>
        <div key={Math.random()}>
          <div className='table_data d-flex align-items-center' style={{backgroundColor: i%2===0 ? '#202932' : '#2C3845' }}>
          
          
            <span>{i<=8 ? `0${i+1}` : i+1 }</span>
            <span>{appointment.name}</span>
            
            <span className="appointment_status" style={{backgroundColor:handleColor(appointment.status)}}>{appointment.status} {load && i===statusChangedData.serial-1 ? <i class="fas fa-spinner"></i> : ""}</span>
            <select name="status" onChange={handleChange}>  
              <option value="none" selected disabled>Select</option>     
              <option>Not Visited</option>
              <option>Visited</option>
              <option>Cancel</option>           
            </select> 
            

            
            <i class="fas fa-pen-alt"  onClick={()=>handleModal({...appointment,serial:i+1,status:selectedOption})}  data-toggle={selectedOption !=="" ? openModal : null} data-target="#exampleModal"></i>                
          </div>
        </div>    
      ):
           
        <img src="https://i.pinimg.com/originals/3d/6a/a9/3d6aa9082f3c9e285df9970dc7b762ac.gif" alt="" width="40%"/>
      
         }
      </div>  
      
    
     
     <Modal statusChangedData={statusChangedData} loadFunc={loadFunc}/>
   </div>
  </div>
 )
}
