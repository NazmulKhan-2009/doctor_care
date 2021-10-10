import React from 'react'
import './adminDataCtr1.css'
export default function AdminDataCtr() {


const handleChange=(e)=>{
console.log(e.target.value)
}

 return (
  
  
   <form id="app-cover">
     <div id="select-box">
       <input type="checkbox" id="options-view-button"/>
       <div id="select-button" class="brd">
         <div id="selected-value">
             <span>Select action</span>
         </div>
         <div id="chevrons">
           <i class="fas fa-chevron-up"></i>
           <i class="fas fa-chevron-down"></i>
         </div>
       </div>
       <div id="options">
         <div class="option">
           <input class="s-c top" type="radio" name="platform" value="doctor_data" onChange={handleChange}/>
           <input class="s-c bottom" type="radio" name="platform" value="doctor_data1"/>
           <i class="fas fa-user-md"></i>
           <span class="label">Doctor Data Control</span>
           <span class="opt-val">Doctor Data Control</span>
         </div>
         <div class="option">
           <input class="s-c top" type="radio" name="platform" value="patient_data" onChange={handleChange}/>
           <input class="s-c bottom" type="radio" name="platform" value="patient_data"/>
           <i class="fas fa-procedures"></i>
           <span class="label">Patient Data Control</span>
           <span class="opt-val">Patient Data Control</span>
         </div>                    
         <div class="option">
           <input class="s-c top" type="radio" name="platform" value="blog_data" onChange={handleChange}/>
           <input class="s-c bottom" type="radio" name="platform" value="blog_data"/>
           <i class="fab fa-blogger-b"></i>
           <span class="label">Blog Data Control</span>
           <span class="opt-val">Blog Data Control</span>
         </div>
         <div id="option-bg"></div>
       </div>
     </div>
  </form>
    
 )
}
