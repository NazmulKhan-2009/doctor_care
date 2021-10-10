import React from 'react'
import socialIcon from '../../../../images/footer/social1.png'
import './socialLink.css'
export default function SocialLink() {
 return (
  <div id="footer_social_icon">
  <div className="pb-3" style={{textAlign: 'center'}}>
   <img src={socialIcon} alt="" width="70" />
  </div>
   <ul className="mx-auto">
         <li><i class="fab fa-facebook-f"></i></li>
         <li><i class="fab fa-twitter"></i></li>
         <li><i class="fab fa-instagram"></i></li>
         <li><i class="fab fa-linkedin-in"></i></li>
         
      </ul>
  </div>
 )
}
