import React, { useContext, useState } from 'react'
import { appContext } from '../../../App';
import { dataToDb } from '../../../dbManagement';
import { notification } from '../../commonFunction';
import './AppointmentForm.css';

export default function AppointmentForm() {

 const {appointmentDate,selectedDr,setAppointmentDate,setSelectedDr,setSyncAppointment,setLoadOnAppointment}=useContext(appContext)

 const [appointmentField, setAppointmentField]=useState({})
 const [load, setLoad]=useState(false)
//  const [appointmentInfo, setAppointmentInfo]=useState({})
console.info(selectedDr.name)

 const onChange=(e)=>{
setAppointmentField({...appointmentField,[e.target.name]:e.target.value})
 }


const handleAppointmentInfo =(recData)=>{
// setAppointmentInfo(recData.data.data)
const {name,appointmentDate,serial}= recData.data.data
setLoad(true)
alert(`Hello ${name} ${recData.data.notify} on ${appointmentDate} with serial No ${serial-1}`)
// from common function
// notification(`Hello ${name} ${recData.data.notify} on ${appointmentDate} with serial No ${serial}`)
setAppointmentField({})
setAppointmentDate(new Date())
setSelectedDr('')

// setSyncAppointment(Math.random())
}

// console.info(selectedDr)

 const submitForm=(e)=>{
 e.preventDefault()
 if(selectedDr.name){
//  const appointmentData={...appointmentField,drName:selectedDr.name,appointmentDate:appointmentDate.toLocaleDateString()}

const appointmentData=userInfo ? {...appointmentField,name:userInfo.displayName,email:userInfo.email,drName:selectedDr.name,appointmentDate:appointmentDate.toLocaleDateString()} :  {...appointmentField,drName:selectedDr.name,appointmentDate:appointmentDate.toLocaleDateString()}

 dataToDb("post",'appointment/data/setappointment/',appointmentData).then(recData=>handleAppointmentInfo(recData))
}else{
    alert('you have not select any doctor')
}

setLoadOnAppointment("appointment_body")
setSyncAppointment(Math.random())

}
const userInfo=JSON.parse(sessionStorage.getItem('userInfo'))

// const fieldValue=(key)=>{
//     const userInfo=JSON.parse(sessionStorage.getItem('userInfo'))
//     if(userInfo){
        
//         return userInfo[key=== 'name' ? 'displayName' : key]
//     }else{
//        return  appointmentField[key] || ""
//     }
// }


// value={appointmentField.email || ""}

 return (

  <section className="pt-1" id="appointment_form">
    <div className="container">           
      <span className="text-danger font-weight-bold">{`Date : ${appointmentDate.toLocaleDateString()}`} {selectedDr ? `Doctor : ${selectedDr.name}` : 'Select Doctor →'}</span>
      
      
          <form onSubmit={submitForm}>
          <div className="row"> 
            <div className="form-row">
               {/* <div className="control-group col-md-6">
                   <input type="text" className="form-control p-4" id="appointment_date" placeholder="Appointment Date"
                       name="appointment_date" value={appointmentDate.toLocaleDateString()}  disabled/>
          
               </div>
               <div className="control-group col-md-6">
                   <input type="text" className="form-control p-4" id="dr_name" placeholder="Select Doctor"
                       required="required"  name="dr_name" value={selectedDr.name || ""} disabled />
                  
               </div> */}
               <div className="control-group  mx-auto col-md-12">
                   <input type="text" className="form-control p-4" id="name" placeholder="Your Name"
                       required="required"  name="name" onChange={onChange} value={userInfo?.displayName ||appointmentField.name || "" } />
                   
               </div>
               <div className="control-group  mx-auto col-md-12">
                   <input type="email" className="form-control p-4" id="email" placeholder="Your Email"
                       required="required" name="email"  onChange={onChange} value={userInfo?.email  || appointmentField.email || "" } />
                  
               </div>
               <div className="control-group  mx-auto col-md-7">
                   <input type="number" className="form-control p-4" id="phone" placeholder="Your Phone"
                       required="required" name="phone" onChange={onChange} value={appointmentField.phone || "" } />
                  
               </div>
               <div className="control-group  mx-auto col-md-5">
                   <input type="number" className="form-control p-4" id="age" placeholder="Your Age"
                       required="required"  name="age" onChange={onChange} value={appointmentField.age || ""}/>
                   
               </div>
               <button className="button_style_all" style={{outline:"none"}}>Set Appointment</button> 
            </div>

              
             
          
              {/* <button className="button_style_all" style={{outline:"none"}}>Set Appointment</button>   */}
              </div>  
          </form>
               
    </div>   
 
 </section>   
 )
}
