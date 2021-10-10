import React from 'react'
import SectionTitle from '../../CommonComponents/SectionTitle.jsx/SectionTitle';
import ServiceDetails from './ServiceDetails/ServiceDetails';
import './serviceStyle.css'
export default function Service() {
 return (
  
  <div className="container pt-5" id="service">   
    <SectionTitle
      title="Our Services"
      detail="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."
    />     
    <ServiceDetails/>
  </div>
 
 )
}
