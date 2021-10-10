
import firebase from 'firebase/compat/app';
import { firebaseConfig } from "./firebase.config";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';




export const initializeLoginFramework=() => {

 if(firebase.apps.length===0){
   firebase.initializeApp(firebaseConfig)
 }
 
};

//GOOGLE SIGN IN START-POINT ↓
export const handleGoogleSignIn=()=>{
 const provider = new firebase.auth.GoogleAuthProvider();
 return firebase.auth().signInWithPopup(provider).then((result)=>{

  try{
   const {displayName, email, photoURL}= result.user._delegate.providerData[0]

   return {displayName, email, photoURL,signIn:true}
      
   }catch(e){
     alert(e.message)
   } ;
 });
};
//GOOGLE SIGN IN END-POINT ↑


export const handleFacebookSignIn=()=>{
  const faceBookProvider = new firebase.auth.FacebookAuthProvider();

 return firebase.auth().signInWithPopup(faceBookProvider).then(function(result) {
    const {displayName,email}=result.user

 const user={
  name:displayName,
  email,
  isSignIn:true
 }
 return user
    
  }).catch(function(error) {
    // console.log(error)
    alert(error.message);
    
  });
}


//USER SIGN OUT START POINT ↓
export const userSignOut=()=>{
 return firebase.auth().signOut()
 .then(()=>{  
  return {displayName:"",email:"",photoURL:"",signIn:false,notify:'You Are Signed Out'}
}).catch(function(error) {

 return error
});
}
//USER SIGN OUT END POINT ↓


//custom email submit
export const handleCreateAc=(email,password,name)=>{
  
 return firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((user) => {
    console.log(user)
    
    const userInfo={
      
      email:user.user.email,
      isSignUp:true    
    }
    updateUserName(name)
    emailVerification()
    return userInfo 
   
  })

  .catch((error) => {
    
    const errorSignUp={
      msg:error.message,
      isSignUp:false
    }
    return errorSignUp  
  });
}
export const signInCustom=(email, password)=>{
return firebase.auth().signInWithEmailAndPassword(email, password)
  .then((user) => {
    const userInfo={
      name:user.user.displayName,
      email:user.user.email,
      isSignIn:true
    }
    return userInfo
  })
  .catch((error) => {
    // console.log(error)
    const errorSignIn={
      err:error.message,
      isSignIn:false
    }
    return errorSignIn
    
    
  });
}


// khan123456780@gmail.com

 const updateUserName=name=>{
  const user = firebase.auth().currentUser;

return user.updateProfile({
  displayName: name
})
.then(()=>{

  return `Account Updated Succesfully`
 
}).catch((error)=>{

  return error
});
}

const emailVerification=()=>{
  var user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
  console.log('pls verify the email') 
}).catch(function(error) {
return error
});
}

//reset password

export const resetPassAuth=(email)=>{

var auth = firebase.auth();
// var emailAddress = "user@example.com";

auth.sendPasswordResetEmail(email).then(function() {
console.log("email sent to reset your password")
// console.log(okay)



}).catch(function(error) {
  // console.log(error)
  // return error
  
});

}


//TOKEN INILIALIZE  START-POINT↓
export const token=()=>{

 return firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
    return idToken
  }).catch(function(error) {
    alert(error)
  });
  
}
//TOKEN INILIALIZE  END-POINT↓




























