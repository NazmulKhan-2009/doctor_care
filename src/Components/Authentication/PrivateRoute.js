import jwtDecode from 'jwt-decode';
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { appContext } from '../../App';

const PrivateRoute = ({children, ...rest}) => {

  
 const {signIn, setSignIn}= useContext(appContext)

// console.log(signIn.email)
 const tokenVerify=()=>{
   const token=sessionStorage.getItem('token')

   if(!token || signIn.onlySignOut){
      return false
   }
   const decodeToken= jwtDecode(token)
   const currentTime=new Date().getTime()/1000
   // console.log(`de-time ${decodeToken.exp}\n cur-time ${currentTime}`)
   // console.log(decodeToken.exp > currentTime)
   return decodeToken.exp > currentTime
 }
 
 
 return (
  <Route
      {...rest}
      render={({ location }) =>
        (signIn.email || tokenVerify()) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
 );
};

export default PrivateRoute;
