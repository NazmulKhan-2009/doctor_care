import { useEffect, useState } from "react";
import './backToTop.css'
const BackToTop = ({
 showBelow,
}) => {



 const [show, setShow] = useState(showBelow ? false : true)

 const handleScroll = () => {
     if (window.pageYOffset > showBelow) {
         if (!show) setShow(true)
     } else {
         if (show) setShow(false)
     }
 }

 const handleClick = () => {
     window[`scrollTo`]({ top: 0, behavior: `smooth` })
 }

 useEffect(() => {
     if (showBelow) {
         window.addEventListener(`scroll`, handleScroll)
         return () => window.removeEventListener(`scroll`, handleScroll)
     }
 })

 return (
     <div className="scrollBtn">
         {show &&
             

             <i onClick={handleClick} className="top icofont-simple-up" style={{color:"red"}}></i>
         }
     </div>
 )
}
export default BackToTop
