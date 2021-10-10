import React, { useContext, useState } from 'react'
import DashboardWrapper from '../../DashboardWrapper/DashboardWrapper';
import { appContext } from '../../../../App';
import './DashboardHome.css';
import CountPatient from './CountPatient/CountPatient';
import RecentPatients from './RecentPatient/RecentPatients';
import DataCharts from './DataInCharts/DataCharts';
import UserAppointments from './UserAppointments/UserAppointments';
import UpdateAppointment from '../Appointment/UpdateAppointment/UpdateAppointment';



export default function DashboardHome() {

   const userInfo=JSON.parse(sessionStorage.getItem('userInfo'))

 return (
  <DashboardWrapper>
   <CountPatient/>
   {/* <RecentPatients/> */}
   {userInfo.entrant==='admin' ? <DataCharts/> : <UpdateAppointment keySearch={userInfo.email}/>}
  </DashboardWrapper>
   )
}