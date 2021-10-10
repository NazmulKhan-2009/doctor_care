import React, { useContext, useState } from 'react'
import { Link, NavLink , useHistory} from 'react-router-dom';
import { appContext } from '../../../App';
import { initializeLoginFramework, userSignOut } from '../../Authentication/loginManager';

import './sidebar.css'
export default function Sidebar() {
  const history=useHistory()
const {setSignIn}=useContext(appContext)
// const [btnEffect, setBtnEffect]=useState()
const [sidebarStyle, setSidebarStyle]=useState(false)

const userInfo=JSON.parse(sessionStorage.getItem('userInfo'))

const handleSidebar=()=>{
 setSidebarStyle(!sidebarStyle)
}

//SIGN OUT EFFECT FROM SIDEBAR
initializeLoginFramework()
const signOut =()=>{
userSignOut().then((res)=>{ 
setSignIn(res);
sessionStorage.removeItem('userInfo');
sessionStorage.removeItem('token');
history.push('/');
});
}


 return (
  <div className={sidebarStyle ? "sidebar active" : "sidebar"}>
    <div className="all">
  
      <div className="logo_content">

      
        <div className="logo">
          <header>
            <img src={userInfo.photoURL ? userInfo.photoURL :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB68ebXPWRig_Qe-ustmw3bTYrmbCGUiiT4RSa2bXiHpn0SsY&s"} alt="" />
            {/* <p>Mystery Code</p> */}
          </header>
        </div>
        <i className="bx bx-menu" id="btn" onClick={handleSidebar}></i><br/>
        
        
      </div>

      <ul className="nav_list">
        <li>
          <NavLink to="/">
           <i className="bx bx-home-alt"></i>
            <span className="links_name">Home</span>
          </NavLink>
        </li>

        <li><NavLink to="/dashboard">
          <i className="bx bxs-dashboard"></i>
          <span className="links_name">Dashboard</span>
        </NavLink></li>

        <li><NavLink to="/dashboard/profile">
          <i class="bx bxs-user-pin"></i>
          <span className="links_name">Profile</span>
        </NavLink></li>

  

        <li><NavLink to="/dashboard/notification">
          <i class="bx bx-bell"></i>
          <span className="links_name">Notification <span className="badge badge-light bg-danger">4</span></span>
        </NavLink></li>

        {userInfo.entrant ==='admin' && 
        <>
        <li><NavLink to="/dashboard/appointment">
        <i class="bx bx-calendar"></i>
          <span className="links_name">Appointment</span>
        </NavLink></li>

        <li><NavLink to="/dashboard/admin">
          <i className="bx bx-user"></i>
          <span className="links_name">Admin</span>
        </NavLink></li>
        </>
}

        <li>
          <a href='#'>       
          <i class="bx bx-log-out-circle" onClick={signOut}></i>
            <span className="links_name" onClick={signOut}>log Out</span>
          </a>
        </li>
      </ul>
    </div>

    


  </div>

 )
}
