import React from 'react'
import { NavLink } from 'react-router-dom';
import notFoundImg from '../../images/not_found/nf_2.png'
export default function NotFound() {
 return (
  <div className="container">
   <div className="row">
    <div className="col-md-6 mx-auto d-flex flex-column">
    <img className="img-fluid doctor_details" src={notFoundImg} alt="" />
    <NavLink to="/"  className="button_style_all nav_style">Back to Home</NavLink>
    </div>
   </div>
  </div>
 )
}
