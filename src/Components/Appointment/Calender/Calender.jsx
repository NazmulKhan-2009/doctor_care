import React, { useContext, useState } from 'react';
import CalendarApi from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { appContext } from '../../../App';
import './calender.css';



const Calendar=()=>{
  
  // const [value, onChange] = useState(new Date());
  const {appointmentDate, setAppointmentDate}=useContext(appContext)
  



 return (
   <div>
     <CalendarApi
       onChange={setAppointmentDate}
       value={appointmentDate}
      //  defaultActiveStartDate={new Date()}
      //  minDate={new Date(2020,10,25)}
      //  maxDate={new Date(2020,11,25)}
      minDate={new Date()}
      
     /> 
     
   </div>
 );
}

export default Calendar
