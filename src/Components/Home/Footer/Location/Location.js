import React from 'react'
import locationIcon from '../../../../images/footer/locationIcon.png'
import './location.css'
export default function location() {
 return (
  <div className="footer_location d-flex align-items-start flex-column mx-auto">
  <div className="mx-auto pb-3">
   <img src={locationIcon} alt="" width="70" />
  </div>
   

   <p  className="mx-auto">
   <i className="ico fas fa-street-view"></i> 68/B Excess Road
    Agrabad, Chittagong-4100<br/>
    <i className="fas fa-phone-volume"></i> +8896005878974 , +880963258741 <br/>
    <i className="far fa-envelope"></i>  help4care@doctorcare.com <br/>
    <i class="fas fa-ambulance"></i> +880987523011 , +880125877442 <br/>
    <i class="fas fa-user-md"></i> 24/7 help 16257
   </p>
  </div>
 )
}
