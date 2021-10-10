import React, { useContext } from 'react';
import { appContext } from '../../../../../App';
import './updateAppointment.css'

export default function UpdateAppointment({keySearch}) {

  const {appointmentList}=useContext(appContext)
  // console.info(appointmentList)

// const pData=[
//  {
//   serial:1,
//   name:"Mr kutti" , 
//   date:"25-08-21" , 
//   time:"7:20" , 
//   contact:"012587478" ,
//   status:"pending"
 
//  },
//  {
//   serial:2,
//   name:"Mr kutti" , 
//   date:"25-08-21" , 
//   time:"7:20" , 
//   contact:"012587478" ,
//   status:"pending"
 
//  },
//  {
//   serial:3,
//   name:"Mr kutti" , 
//   date:"25-08-21" , 
//   time:"7:20" , 
//   contact:"012587478" ,
//   status:"pending"
  
//  },
//  {
//   serial:1,
//   name:"Mr kutti" , 
//   date:"25-08-21" , 
//   time:"7:20" , 
//   contact:"012587478" ,
//   status:"pending"
 
//  },
//  {
//   serial:2,
//   name:"Mr kutti" , 
//   date:"25-08-21" , 
//   time:"7:20" , 
//   contact:"012587478" ,
//   status:"pending"
 
//  },
//  {
//   serial:3,
//   name:"Mr kutti" , 
//   date:"25-08-21" , 
//   time:"7:20" , 
//   contact:"012587478" ,
//   status:"pending"
  
//  },

// ]

//link https://freefrontend.com/css-tables/#google_vignette

const textDesign={
  fontWeight:'bold',
  fontSize:'16px',
  textAlign:'center',
  textShadow: "2px 3px 2px rgba(0,0,0,0.3),0px 0px 0px rgba(255,255,255,0.3)"
}

const handleColor=(status)=>{
  switch (status) {
    case "Not Visited":
      return {color:'#5C9A67', ...textDesign}
      break;
    case 'Visited':
      return {color:'#0089D2',...textDesign}
      break;
    case 'Cancel':
      return {color:'crimson', ...textDesign}
      break;
  
    default:
      return null
      break;
  }
}

const filteringData= keySearch ?  appointmentList.filter(each=>each.email===keySearch) : appointmentList


 return (
  <section id="update_appointment" className="py-2">   
   <h3>Appointments</h3>
   <main>
     <table>
       <thead>
         <tr>
           {
            appointmentList?.slice(0,1).map((item)=>Object.keys(item).filter(each=>each!=="serial").map((th)=>
            <th key={Math.random()}>
            {th.toLocaleUpperCase()}
            </th> 
            ))
           }      
         </tr>
       </thead>        
       <tbody>  
       {/* {appointmentList.filter(each=>delete each.serial).map((item)=>
          <tr>
          {Object.values(item).map((td,i)=>
           <td data-title={Object.keys(item)[i]} style={handleColor(td)} >
            {td}
          </td>
          ) }       
         </tr>
         )}      */}

         {filteringData.filter(each=>delete each.serial).map((item)=>
          <tr>
          {Object.values(item).map((td,i)=>
           <td data-title={Object.keys(item)[i]} style={handleColor(td)} >
            {td}
          </td>
          ) }       
         </tr>
         )}  
       </tbody>  
     </table>  
   </main>
 </section>
 )
}


