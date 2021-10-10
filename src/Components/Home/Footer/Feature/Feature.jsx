import React from 'react';
import featureIcon from '../../../../images/footer/feature.png'
import './feature.css'
export default function Feature() {
 return (
  <div className="footer_feature d-flex align-items-start flex-column mx-auto">
    <div className="mx-auto">
      <img src={featureIcon} alt="" width="80" />
    </div>
    <p className="mx-auto"><i class="fas fa-hand-holding-medical"></i> Online Care <br/>
      <i class="fas fa-stethoscope"></i> Recent Health Blog <br/>
      <i class="fas fa-heartbeat"></i> Community care<br/>
      <i class="fas fa-viruses"></i> Corona Campaign <br/>
      <i class="fas fa-briefcase-medical"></i> Medicine Supply<br/>
      <i class="fas fa-briefcase-medical"></i> Research center
    </p>
  </div>
 )
}
