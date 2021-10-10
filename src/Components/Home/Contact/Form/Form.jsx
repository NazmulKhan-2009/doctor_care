import React, { useEffect, useState } from 'react'
// import AOS from 'aos';
// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";
// import { createMessage } from '../../../../dataManagement';
import Fade from 'react-reveal/Fade';

export default function Form() {

    const [formValue, setFormValue]=useState({})
console.info(formValue)

    const [inputValue, setInputValue] = useState("");

    const [messageSend,setMessageSend]=useState(false)

    console.info(inputValue)




const handleSubmit=(e)=>{

 e.preventDefault()
 console.log({...formValue,phone:inputValue})

 // createMessage({...formValue,phone:inputValue})
 // .then(data=>
 //    {
 //    setMessageSend(true);
 //    setFormValue({})
 //    setInputValue("")
 //    }
 //    )

}

const handleChange=(e)=> {
 setFormValue({...formValue,[e.target.name]:e.target.value})
   
 }

 return (
  
                       
                        <form onSubmit={handleSubmit} id="contactForm" name="sentMessage">


                            <div className="form-group" >
                                <input className="form-control"                                
                                onChange={handleChange} 
                                name="name"
                                type="text" 
                                placeholder="Your Name *"    
                                value={formValue.name || ""}                          
                                required 
                                />    
                            </div>
           
                            
                            <div className="form-group" >
                               <input  
                                className="form-control" 
                                id="email" 
                                type="email" 
                                name="email"
                                placeholder="Your Email *" 
                                onChange={handleChange}
                                value={formValue.email || ""}
                                required="required"                               
                              />                     
                            </div>
  
                            <div  className="form-group mb-md-0">
                               {/* <PhoneInput 
                                placeholder="Enter phone number"
                                value={inputValue}
                                onChange={inputValue => setInputValue(inputValue)}
                                        
                                className="form-control" id="phone" type="tel"  required="required" data-validation-required-message="Please enter your phone number." />
                                <p className="help-block text-danger"></p> */}
                            </div>


                          <div  
                            data-aos="fade-down" 
                            className="form-group form-group-textarea mb-md-5">
                              <textarea 
                                onChange={handleChange}
                                className="form-control" 
                                name="message" 
                                id="message" 
                                placeholder="Your Message *" 
                                value={formValue.message || ""}
                                required >                               
                              </textarea>
                                <p className="help-block text-danger"></p>
                          </div>

                            <div className="text-center">
                       
                        <div className="d-flex align-items-center">

                           
                            <button  type="submit" className="button_style_all" style={{outline:"none"}}><i className="far fa-envelope"></i> Send Message</button>
                            
                            <Fade right>{messageSend && <span className="text-danger px-5"> Your message Sent <i className="fas fa-backspace" onClick={()=>setMessageSend(!messageSend)}></i> </span>}</Fade>
                        </div>
                            

                           
                            

                            

                            </div>
                      </form>
                        
       
 )
}
