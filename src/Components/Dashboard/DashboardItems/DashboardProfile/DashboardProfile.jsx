import React from 'react'
import DashboardWrapper from '../../DashboardWrapper/DashboardWrapper';
import ProfileData from './ProfileData';

export default function DashboardProfile() {

 const userInfo=JSON.parse(sessionStorage.getItem('userInfo'))

 return (
  <DashboardWrapper>
 
    <ProfileData/>
  
  </DashboardWrapper>
 )
}
