import React from 'react'
import DashboardWrapper from '../../DashboardWrapper/DashboardWrapper';
import './dashboardNotification.css';
import doctorImg from '../../../../images/notification/doctor.png'
import patientImg from '../../../../images/notification/ins.png'

export default function DashboardNotification() {

 const userInfo=JSON.parse(sessionStorage.getItem('userInfo'))
 const chatImg=()=>{
  return userInfo.entrant==='admin' ? patientImg : doctorImg 
 } 
const chatEmail =()=>{
 return userInfo.entrant==='admin' ? userInfo.email : ""
} 

 return (
  <DashboardWrapper>
  
    <div className="row">
      {Array(6).fill().map(()=>
       <div className="col-md-4">
        <div className="mt-5 d-flex align-items-center">
          <img src={chatImg()} alt="" width="50"/>
          <div className="chat_box">
          <span>{chatEmail()}</span><br/>
          <span>{new Date().toLocaleTimeString() +' '+new Date().toLocaleDateString() }</span>
           <p>Lorem, ipsum dolor sit anventoiquam?</p>
           <div className="d-flex justify-content-between">
           <i class="fas fa-reply" title="Reply"></i>
           <i class="far fa-heart"></i>
           <i class="far fa-thumbs-up"></i>
           </div>
          
          </div>     
        </div>
      </div>
      ) }
    </div>


 </DashboardWrapper>
 )
}
