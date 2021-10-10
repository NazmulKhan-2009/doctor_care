import React, { useContext, useState } from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import Fade from 'react-reveal/Fade';
import { appContext } from '../../../App';
import { initializeLoginFramework, handleGoogleSignIn, handleFacebookSignIn, token, userSignOut } from '../loginManager';
import { dataToDb } from '../../../dbManagement';
import './login.css';



export default function Login() {
//HOOKS ↓
   const {setSignIn}=useContext(appContext)
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
      dataToDb('post',baseURL,userData).then(res=>createUserResponse(res)) ;
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
  

 return (
   <div className="bg-img">
      <div className="content">     
         <header><img src={logo} alt=""  width="15%" onClick={backToHome} style={{cursor:'Pointer'}}/> Login Zone</header>
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
               <span className="show" onClick={()=>setPasswordType(!passwordType)}>SHOW</span>
            </div>
          {
             signUp && 
             <Fade left>
             <div className="field space">
               <span className="fas fa-glasses"></span>
               <input type={passwordReType ? 'password' : 'text'} className="pass-key" required placeholder="Retype Password" name="retypePass" onChange={handleInput} value={userData.retypePass || ""}/>
               <span className="show" onClick={()=> setPasswordReType(!passwordReType)}>SHOW</span>
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
            <div className="facebook" onClick={handleFaceSignIn}>
               <i className="fab fa-facebook-f"><span>Facebook</span></i>
            </div>
            <div className="instagram" onClick={googleSignIn}>
               <i className=" fab fa-google"><span>Google</span></i>              
            </div>
         </div>
         <div className="signup">
            {signUp ?  "Already" : "Dont" } have account?
            <span  onClick={()=>setSignUp(!signUp)}> {signUp ? "Sign In" : "Sign Up"}</span>
         </div>
         </> :
         <p>You are already logged in <span className="logged_out" onClick={signOut}>click here to Log out</span></p>
         }
      </div>
   </div>
 )
}
