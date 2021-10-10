import recentPost from '../../../../images/footer/recent_post.png';
import brain from "../../../../images/footer/brain.png";
import heart from "../../../../images/footer/heart.JPG";
import './recentPost.css'
export default function RecentPost() {
 return (
  <div className="footer_location d-flex align-items-start flex-column mx-auto" id='recent_post'>
  <div className="mx-auto py-2">
   <img src={recentPost} alt="" width="50" />
  </div>
    <ul>
     <li>
       <div  className="d-flex">
        <img src={brain} alt="" width="50"/>
        <h5>Why Mental Health Matters</h5>
       </div>  
       <p>Mental pain is less dramatic than physical pain, but it is more common and also more hard to bear. <span>read blog..</span></p> 
     </li>  
     <li>
       <div  className="d-flex">
        <img src={heart} alt="" width="50"/>
        <h5>Eat healthy fats, NOT trans fats</h5>
       </div>  
       <p>You know that exercise and a good diet can keep your heart healthy ? <span>read blog..</span></p> 
     </li>  
    </ul>  
  </div>
 )
}
