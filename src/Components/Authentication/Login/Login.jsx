import React, { useContext, useEffect, useState } from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import Fade from 'react-reveal/Fade';
import { appContext } from '../../../App';
import { initializeLoginFramework, handleGoogleSignIn, handleFacebookSignIn, token, userSignOut } from '../loginManager';
import { dataToDb } from '../../../dbManagement';
import googleIcon from '../../../images/login/google_icon.png';
import facebookIcon from '../../../images/login/facebook_icon.png';
import './login.css';
import doctor from '../../../images/doctor-sm.png'
import notify from '../../../images/notification/nf-2.png'



export default function Login() {
//HOOKS ↓
   const {setSignIn,loadOnAppointment,setLoadOnAppointment,syncAppointment}=useContext(appContext)
   const history=useHistory()
   const location = useLocation();
//STATES ↓
   //Forms 
   const [userData,setUserData]=useState({}) 
   //Password view
   const [passwordType, setPasswordType ] = useState(true)
   const [passwordReType, setPasswordReType ] = useState(true)
   //Sign Up or In
   const [signUp, setSignUp ] = useState(false)

//Texting purpose state
// const [defaultUser, setDefaultUser]=useState({phone:"01712985380",password:"123"})   
// const [defaultAdmin, setDefaultAdmin]=useState({phone:"01234567890",password:"admin-Khan-721"}) 
const  defaultUser={phone:"01712985380",password:"123"}
const defaultAdmin={phone:"01234567890",password:"admin-Khan-721"}

const handleDefaultUser=()=>{
   setUserData(defaultUser)
}
const handleDefaultAdmin=()=>{
   setUserData(defaultAdmin)
}
console.info(userData)
//Redirecting path ↓
   const { from } = location.state || { from: { pathname: "/" } };

//session storage login info
const userInfo=JSON.parse(sessionStorage.getItem('userInfo'))   

// FUNCTION HELPER ↓
   //Login to home route
   const backToHome =()=>{
      history.push('/');
   }
   //Sign In by Firebase and Database
   const handleResponse=(loginInfo,redirect)=>{
      if(redirect==='firebaseAuth'){
         setSignIn(loginInfo);
         sessionStorage.setItem('userInfo' , JSON.stringify(loginInfo));
         token().then(token=>{
         sessionStorage.setItem('token',token);    
         history.replace(from);
         })}      
      if(redirect==='DBAuth'){
         sessionStorage.setItem('token',loginInfo.token) ;
         delete loginInfo.token;
         sessionStorage.setItem('userInfo' , JSON.stringify(loginInfo));
         setSignIn(loginInfo);
         history.replace(from) ;
         }   
      }
//METHODS APPLIED ↓
   initializeLoginFramework();

//GOOGLE SIGN IN
 const googleSignIn=()=>{
  handleGoogleSignIn().then(res=>handleResponse(res,'firebaseAuth')) ;
}

//FACEBOOK SIGN IN
const handleFaceSignIn=()=>{
 alert('Sign In by FaceBook is not capable at this moment please try with google or registration ');
}

//Helper Function
const createUserResponse =(resData)=>{
   
   alert(resData.data.notify);
   setSignUp(false);
   setUserData({});
   if(resData.data['token']){
      const {displayName, email, token, photoURL,entrant}=resData.data;
      const loginInfo={displayName,email,token,photoURL,entrant};
         handleResponse(loginInfo, "DBAuth");
   }
}

//FORM SUBMISSION  ↓
const handleInput=(e)=>{
   setUserData({...userData,[e.target.name]:e.target.value});
}
const formSubmit=(e)=>{
 e.preventDefault();
   const handleSubmission= ()=>{
   const baseURL='user/data/create' ;
      dataToDb('post',baseURL,userData).then(res=>{createUserResponse(res)}) ;
   }
   switch (signUp) {
      case true:
         if(userData.password===userData.retypePass){
            delete userData.retypePass;
            handleSubmission(userData);
         }else{
         alert('password is not matching with retype password');
         }     
      break;

      case false:
         handleSubmission(userData);
         setLoadOnAppointment('appointment_body')
      break;   

      default:
      break;
   }
}

const signOut =()=>{
   userSignOut().then((res)=>{ 
   setSignIn(res);
   sessionStorage.removeItem('userInfo');
   sessionStorage.removeItem('token');
   history.push('/login');
   });
  }

  useEffect(()=>{
   setLoadOnAppointment(true)
  },[syncAppointment])


 const handleSignUp=()=>{
   setSignUp(!signUp);
   setUserData({})
 } 
  

 return (
   <div className={`${loadOnAppointment} bg_login`}>
      <div className="content">     
         <header><img src={logo} alt=""  width="15%" onClick={backToHome} style={{cursor:'Pointer'}}/> Login Zone</header>
         {!signUp && 
         <div className="d-flex align-items-center">           
            <img src={notify} alt="" width="50%" />       
            <div>
               <input type="radio" name="type"  id="pos" value="POS" onClick={handleDefaultUser}/> Default User    <br/> 
               <input type="radio" name="type"  id="ecom" value="e-com" onClick={handleDefaultAdmin}/> Default Admin
            </div>
         </div>}

      {!userInfo ?
      <>
         <Fade up>       
          <form onSubmit={formSubmit}>
          {
            signUp && 
            <Fade right>
            <div className="field" >
               <span className="fa fa-user"></span>
               <input type="text" required placeholder="Name" name="name" onChange={handleInput} value={userData.name || ""}/>
            </div>
            <div className="field space">
               <span className="far fa-envelope"></span>
               <input type="email" required placeholder="Your email" name="email" onChange={handleInput} value={userData.email || ""}/>
            </div>
            </Fade>
          }
            <div className="field space">
           
               <span className="bx bx-phone"></span>
               <input type="number" required placeholder="Your phone" name="phone" onChange={handleInput} value={userData.phone || ""}/>
            </div>
            <div className="field space">
               <span className="fa fa-lock"></span>
               <input type={passwordType ? 'password' : 'text'} className="pass-key" required placeholder="Password" name="password" onChange={handleInput} value={userData.password || ""}/>
               <span className="view" onClick={()=>setPasswordType(!passwordType)}>View</span>
            </div>
          {
             signUp && 
             <Fade left>
             <div className="field space">
               <span className="fas fa-glasses"></span>
               <input type={passwordReType ? 'password' : 'text'} className="pass-key" required placeholder="Retype Password" name="retypePass" onChange={handleInput} value={userData.retypePass || ""}/>
               <span className="view" onClick={()=> setPasswordReType(!passwordReType)}>View</span>
            </div>
            </Fade>
          }
            <div className="pass">
               <span>Forgot Password?</span>
            </div>          
            <div className="field">
               <input type="submit" value={signUp ? "REGISTER" : "LOGIN"} />
            </div>          
         </form>
         </Fade>
         <div className="login">
            Or login with
         </div>
         <div className="links">           
            <div className="google" onClick={googleSignIn}>
               {/* <i className=" fab fa-google"><span></span></i>               */}               
               <span><img src={googleIcon} alt="" width="35"/></span>
            </div>
            <div className="facebook" onClick={handleFaceSignIn}>
               {/* <i className="fab fa-facebook-f"><span>Facebook</span></i> */}
               <span><img src={facebookIcon} alt="" width="30"/></span>
            </div>
         </div>
         <div className="signup">
            {signUp ?  "Already" : "Dont" } have account?
            <span  onClick={handleSignUp}> {signUp ? "Sign In" : "Sign Up"}</span>
         </div>
         </> :
         <p>You are already logged in <span className="logged_out" onClick={signOut}>click here to Log out</span></p>
         }
      </div>
   </div>
 )
}
