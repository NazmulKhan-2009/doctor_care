import React, { useContext} from 'react';
import { NavLink , useHistory} from 'react-router-dom';
import { appContext } from '../../../../App';
import { initializeLoginFramework, userSignOut } from '../../../Authentication/loginManager';
import './profileMenu.css';



export default function ProfileMenu() {
const {setSignIn}=useContext(appContext)
const history=useHistory()

const userInfo=JSON.parse(sessionStorage.getItem('userInfo'))
const dispName =(name)=>{
 const shortName=name.split(' ')
 return shortName[shortName.length-1]
}

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
  <div id="profile_menu">
    <ul className="profile-wrapper">
			<li>		
				<div className="profile">
					<img src={!userInfo ? "https://www.pngitem.com/pimgs/m/421-4213036_avatar-hd-png-download.png" : userInfo.photoURL} alt=""/>
					<span className="name">{!userInfo ? "Stranger" : dispName(userInfo.displayName)}</span>	<br/>
         							
					<ul className="menu">		
            {/* {userInfo && <li >
              <span className="">
               
              </span>
            </li>	}	 */}
            {!userInfo ? 
            <li>
            <i class="bx bx-log-in-circle"></i>
              <NavLink className="" to="/login">
                Log In
              </NavLink>
            </li>
              :
              <>
            <li onClick={signOut}>
            <i class="bx bx-log-out-circle"></i>
              <span className="">
               Log Out
              </span>
            </li>

            <li>
              <i class="fas fa-user-cog"></i>
              <NavLink className="" to="/dashboard/profile">
                Setting
              </NavLink>
            </li>
            <li>
              <i class="far fa-comments"></i>
              <NavLink className="" to="/dashboard/notification">
                Comments
              </NavLink>
            </li>
            <span className="logged_as">{`${userInfo.email}`} </span>	</>}	
					</ul>
          
				</div>
			</li>
		</ul>  
  </div>
 )
}
