import React from 'react';
import './headersection.css';
import nav_logo from '../../../../images/logos/logo.png';
import { useHistory } from 'react-router';

export default function HeaderSection() {
const history = useHistory()

const letsAppointment=()=>{
  history.push('/appointment')
}

 return (
  <section className="" id="home">
    
      <div className="container pt-5">
        <div id="button">
        {/* <div className="get_appoint">

          <h3>Your health our first priority Voluptate, <br/> obcaecati! Natus praesentium quidem nesciunt amet in eos saepe mollitia ad.</h3>
          <button className='appointment_btn'>Get Appointment</button>
        </div> */}
        <div className="row">
          <div className="col-md-5 mr-auto  my-auto get_appoint">
            
              <img src={nav_logo} alt="" width="10%"/><span>Doctor Care</span>
              <h3>Your health our first priority Voluptate, <br/> obcaecati! Natus praesentium quidem nesciunt amet in eos saepe mollitia ad.</h3>
          <button className='appointment_btn' onClick={letsAppointment}>Get Appointment</button>
        
          </div>
        </div>
        
        </div>
      </div>
    </section>
 )
}
