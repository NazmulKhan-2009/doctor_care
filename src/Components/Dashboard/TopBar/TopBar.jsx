import React, { useEffect, useState } from 'react'
import './TopBar.css'
export default function TopBar() {

  const [now, setNow]=useState(new Date().toLocaleTimeString())

  setInterval(()=>{
    setNow(new Date().toLocaleTimeString())
  },1000)

 

 return (
  <section className="pt-1" id="top_bar">   
    <div className="container"> 
    <h5 className='text-center text-white font-weight-bold'>{`${now} -- ${new Date().toLocaleDateString()}`} </h5>
      <div className="row user_data">      
        <div className="col-md-2 mx-auto">
          <img className="img-fluid"  src='https://i.ibb.co/6DCzY77/Nazmul-Hossain-Khan.png' alt="" width="120"/>    
        </div>     
        <div className="col-md-10 mr-auto">
        {/* <h5 className='text-center text-white font-weight-bold'>{now}</h5> */}
           <p>
           <span>Name :</span>  Nazmul Hossain Khan <br/>
           <span>Age : </span> 34   , <span>Gender : </span>Male <br/>          
           <span>Phone : </span>017120000000 <br/>
           <span>Address : </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tempora.
           </p>            
        </div>                   
      </div>  
    </div>            
</section>
 )
}
