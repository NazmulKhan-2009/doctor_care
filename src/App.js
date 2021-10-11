import React, { useEffect, useState } from 'react';
import Home from "./Components/Home/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import Appointment from './Components/Appointment/Appointment';
import Login from './Components/Authentication/Login/Login';
import { createContext } from 'react';
import DashboardHome from './Components/Dashboard/DashboardItems/DashboardHome/DashboardHome';
import DashboardNotification from './Components/Dashboard/DashboardItems/DashboardNotification/DashboardNotification';
import DashboardAdmin from './Components/Dashboard/DashboardItems/DashboardAdmin/DashboardAdmin';
import DashboardProfile from './Components/Dashboard/DashboardItems/DashboardProfile/DashboardProfile';
import DashboardAppointment from './Components/Dashboard/DashboardItems/Appointment/DashboardAppointment';
import { dataToDb } from './dbManagement';
import PrivateRoute from './Components/Authentication/PrivateRoute';



export const appContext=createContext()

function App() {

// calender state ↓
const [appointmentDate, setAppointmentDate] = useState(new Date());
//selector state ↓
const [item, setItem]=useState(null)
//AdminDBAction State ↓
const [actionType,setActionType]= useState('')
// console.info(actionType)
//doctor list from DB state
const [ourDoctors, setOurDoctors]=useState([])
//appointment list from DB state
const [appointmentList, setAppointmentsList]=useState([])
//adminform- doctor data state
const [formData, setFormData]=useState({})
const [foundData, setFoundData]=useState({})
const [editable, setEditable]=useState({name:false,phone:false,email:false})
const [file, setFile]= useState(null)
//state of available doctors 
const [selectedDr, setSelectedDr]=useState('')

//Sync data
const [syncDoctor,setSyncDoctor]=useState('')
const [syncAppointment,setSyncAppointment]=useState('')

// SIGN IN/UP STATE
const [signIn, setSignIn]= useState({})

//DATA FETCHED BASED ON ENTRANCE
const [entrant, setEntrant]=useState({})

//LOADER
const [loadOnAppointment, setLoadOnAppointment]=useState("")



// console area starts ↓
// console.info(appointmentList)

// console area ends ↓




// FUNCTION FOR DATA FROM DATA BASE  ↓ AREA STARTS ↓
//Doctor data fetching ↓
useEffect(()=>{
const baseURL='doctor/data/doctorslist';
  dataToDb('get',baseURL).then(recData=>setOurDoctors(recData.data))
},[syncDoctor])


// patients data fetching ↓

useEffect(()=>{
const baseURL='appointment/data/appointmentlist'
  dataToDb('get',baseURL).then(recData=>setAppointmentsList(recData.data))
},[syncAppointment])
// FUNCTION FOR DATA FROM DATA BASE  ↓ AREA ENDS ↓





return (

<appContext.Provider 
  value={{
    appointmentDate, setAppointmentDate,
    item,setItem,
    actionType,setActionType,
    ourDoctors, setOurDoctors,
    syncDoctor,setSyncDoctor,
    formData, setFormData,
    foundData, setFoundData,
    editable, setEditable,
    selectedDr, setSelectedDr,
    appointmentList, setAppointmentsList,
    syncAppointment,setSyncAppointment,
    signIn, setSignIn,
    file, setFile,
    loadOnAppointment, setLoadOnAppointment
   
}}>
  <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/appointment" component={Appointment} />
        <Route exact path="/login" component={Login} />
        
        {/* <Route exact path="/dashboard" component={DashboardHome} /> */}
        <PrivateRoute exact path="/dashboard" > <DashboardHome/> </PrivateRoute> 

        {/* <Route exact path="/dashboard/profile" component={DashboardProfile} /> */}
        <PrivateRoute exact path="/dashboard/profile" > <DashboardProfile/> </PrivateRoute>

        {/* <Route exact path="/dashboard/notification" component={DashboardNotification} /> */}
        <PrivateRoute exact path="/dashboard/notification"><DashboardNotification/></PrivateRoute>

        {/* <Route exact path="/dashboard/admin" component={DashboardAdmin} /> */}
        <PrivateRoute exact path="/dashboard/admin"><DashboardAdmin/></PrivateRoute>

        {/* <Route exact path="/dashboard/appointment" component={DashboardAppointment} /> */}      
        <PrivateRoute exact path="/dashboard/appointment"><DashboardAppointment/></PrivateRoute>

        <Route  path="*" component={NotFound} />
      </Switch>

      <div id="preloader">
        <div className="loader" id="loader-1"></div>  
      </div>  
  </Router>   
</appContext.Provider>

    

  );
}

export default App;
