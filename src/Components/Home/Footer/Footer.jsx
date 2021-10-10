import React from 'react'
import './footer.css';
import logo from '../../../images/logos/logo.png'
import Location from './Location/Location';
import SocialLink from './SocialLink/SocialLink';
import Feature from './Feature/Feature';
import RecentPost from './RecentPost/RecentPost';

export default function Footer() {
 return (
  <footer className="footer_wrapper">
   <div className="container-fluid">
    <div className="row">
     <div className="col-md-4">
       <Location/>
     </div>
     <div className="col-md-2">
       <SocialLink/>
     </div>
     <div className="col-md-2">
      <Feature/>
     </div>
     <div className="col-md-3">
      <RecentPost/>
     </div>     
    </div>
   </div>
   <p className="copyright">Copyright © {new Date().getFullYear()} <img src={logo} alt="" width="1.7%"/> <span>Doctor Care</span>  All rights reserved.</p>
  </footer>
 )
}
