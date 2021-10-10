import React from 'react'
import Sidebar from '../Sidebar/Sidebar';
import TopBar from '../TopBar/TopBar';

export default function DashboardWrapper(props) {
 return (
  <>
  <Sidebar/>
  {/* <TopBar/> */}
  <div  className="container">
  <div className="row">  
    <div className="col-md-12 pl-5">
      
      {props.children}
    </div>
 </div>
  </div>
 </> 
 )
}