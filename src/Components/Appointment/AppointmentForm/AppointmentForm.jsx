import React, { useContext, useState } from 'react'
import { appContext } from '../../../App';
import { dataToDb } from '../../../dbManagement';
import { notification } from '../../commonFunction';
import './AppointmentForm.css';

export default function AppointmentForm() {

 const {appointmentDate,selectedDr,setAppointmentDate,setSelectedDr,setSyncAppointment}=useContext(appContext)

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
alert(`Hello ${name} ${recData.data.notify} on ${appointmentDate} with serial No ${serial}`)
// from common function
// notification(`Hello ${name} ${recData.data.notify} on ${appointmentDate} with serial No ${serial}`)
setAppointmentField({})
setAppointmentDate(new Date())
setSelectedDr('')
setSyncAppointment(Math.random())
}






 const submitForm=(e)=>{
 e.preventDefault()
 if(selectedDr.name){
//  const appointmentData={...appointmentField,drName:selectedDr.name,appointmentDate:appointmentDate.toLocaleDateString()}

const appointmentData=userInfo ? {...appointmentField,name:userInfo.displayName,email:userInfo.email,drName:selectedDr.name,appointmentDate:appointmentDate.toLocaleDateString()} :  {...appointmentField,drName:selectedDr.name,appointmentDate:appointmentDate.toLocaleDateString()}

 dataToDb("post",'appointment/data/setappointment/',appointmentData).then(recData=>handleAppointmentInfo(recData))
}else{
    alert('you have not select any doctor')
}

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

  <section className="pt-3" id="appointment_form">
    <div className="container">           
      
      
          <form onSubmit={submitForm}>
          <div className="row"> 
            <div className="form-row col-md-6">
               <div className="control-group col-md-6">
                   <input type="text" className="form-control p-4" id="appointment_date" placeholder="Appointment Date"
                       name="appointment_date" value={appointmentDate.toLocaleDateString()}  disabled/>
          
               </div>
               <div className="control-group col-md-6">
                   <input type="text" className="form-control p-4" id="dr_name" placeholder="Select Doctor"
                       required="required"  name="dr_name" value={selectedDr.name || ""} disabled />
                  
               </div>
               <div className="control-group col-md-6">
                   <input type="text" className="form-control p-4" id="name" placeholder="Your Name"
                       required="required"  name="name" onChange={onChange} value={userInfo?.displayName ||appointmentField.name || "" } />
                   
               </div>
               <div className="control-group col-md-6">
                   <input type="email" className="form-control p-4" id="email" placeholder="Your Email"
                       required="required" name="email"  onChange={onChange} value={userInfo?.email  || appointmentField.email || "" } />
                  
               </div>
               <div className="control-group col-md-6">
                   <input type="number" className="form-control p-4" id="phone" placeholder="Your Phone"
                       required="required" name="phone" onChange={onChange} value={appointmentField.phone || "" } />
                  
               </div>
               <div className="control-group col-md-6">
                   <input type="number" className="form-control p-4" id="age" placeholder="Your Age"
                       required="required"  name="age" onChange={onChange} value={appointmentField.age || ""}/>
                   
               </div>

            </div>

              
              <div className="control-group col-md-6">
               {/* <textarea className="form-control py-3 px-4" rows="5" id="message" placeholder="Message"
                   required="required" 
                   name="message"></textarea> */}
                <h4>Please Read the Terms</h4>
               <ul>
                <li><i class="fas fa-stethoscope"></i> Please bring your previous health report</li>
                <li><i class="fas fa-stethoscope"></i> Please bring your Covid-19 vaccination report</li>
                <li><i class="fas fa-stethoscope"></i> please be weared mask</li>
                <li><i class="fas fa-stethoscope"></i> Appointment time is tentative, it may change </li>
                <li><i class="fas fa-stethoscope"></i> Doctor may cancel the appointment with logical reason</li>
               </ul>

               
              </div>
          
              <button className="button_style_all" style={{outline:"none"}}>Set Appointment</button>  
              </div>  
          </form>
               
    </div>   
 
 </section>   
 )
}
