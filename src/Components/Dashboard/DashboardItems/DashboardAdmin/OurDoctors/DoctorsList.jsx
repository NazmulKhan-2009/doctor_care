import React, { useContext, useEffect } from 'react'
import { appContext } from '../../../../../App';
import AvailableDoctors from '../../../../Appointment/AvailableDoctors/AvailableDoctors';


export default function DoctorsList({selection}) {

  const {ourDoctors,item,setItem,setSelectedDr}= useContext(appContext)

  const selectDrType=ourDoctors.filter((each)=>each.specialist===item)
  
  // console.info(selectDrType.length)

  // selectDrType.length<1 && setSelectedDr('')

 
  const type= item!==null ? selectDrType : ourDoctors

  useEffect(()=>{
    setItem(selection)
  })

  return (
  
   <div className="row doctors_wrapper">
   
     {ourDoctors.length>0 || selectDrType.length>0? 
     type.map((doctor)=>
          <div key={Math.random()} className="col-md-6  p-2 mx-0 " onClick={()=>setSelectedDr(doctor)}>
            <AvailableDoctors doctor={doctor} /> 
          </div>
              ) 
    : 
    <img src="https://i.pinimg.com/originals/3d/6a/a9/3d6aa9082f3c9e285df9970dc7b762ac.gif" alt="" width="60%"/>
              }  
              
     </div>
  
 )
}
