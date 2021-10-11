import { useContext, useState } from 'react';
import { appContext } from '../../../../../App';
import { doctorSpecialist } from './doctorSpecialiteisData';
import FileBase64 from 'react-file-base64';
import Flip from 'react-reveal/Flip';
import './adminDataForm.css';
import { dataToDb } from '../../../../../dbManagement';
import avator from '../../../../../images/dashboard/avator.png'

export default function AdminDataForm() {

// state area starts ↓
const {actionType,setSyncDoctor,foundData, setFoundData,formData, setFormData,editable, setEditable,file,setFile}= useContext(appContext)

// const [file, setFile]= useState(null)
// const [formData, setFormData]=useState({})

// const [foundData, setFoundData]=useState({})
// const [editable, setEditable]=useState({name:false,phone:false,email:false})
// state area ends ↑


// console for testing area starts ↓
    console.info(actionType)
// console for testing area ends ↑


//functionality  ↓ area starts ↓
//Form Data handler ↓
const inputField=(e)=>{
setFormData({...formData,[e.target.name]:e.target.value})
}

// Image handler ↓
const handleImage=(imgInfo)=>{
    if(imgInfo.type.slice(0,5)!=="image"){
      alert('You should Ipload Image')
    }else if(imgInfo.size.split(' ')[0]>601){
      alert('you should not upload image abobe 600 KB')
    }
    else{
      setFile(imgInfo.base64)
    }
}

// Submit create doctor form ↓
const afterRecData=(recData)=>{
  alert(recData.data.notify);
  setSyncDoctor(Math.random())
  setFoundData({name:'',email:'',phone:''})
  setFormData({})
  
}

// const submitForm=(e)=>{
//   e.preventDefault()

//   if(formData.specialist!==undefined && file!==null) {
//     const dataForDB={...formData,image:file}
//     const baseURL="doctor/data/create/"
  
//     dataToDb('post', baseURL, dataForDB).then(recData=>afterRecData(recData))
  
//     setFormData({})
//     setFile(null)

//   }else{
//     alert('You have to select specialist option also Upload an Image')
//   }
// }


//HELPER FUNCTION ↓
const handleFoundData = (recData) => {
  if(recData.data.data!==undefined){
    setFoundData(recData.data.data)
    // setVisible(true)
  }else{
    alert(recData.data.notify)
  }
  
}

//SWITCH CASE TESTING
const submitForm=(e)=>{
  e.preventDefault()

const keyOfAction=actionType.split(' ')[0]
const keyOfURL=actionType.split(' ')[1].toLowerCase()

  switch (keyOfAction) {

  case "Add":
      if(keyOfURL==='admin' && file!==null || formData.specialist!==undefined && file!==null) {
        const dataForDB={...formData,image:file}
        // const baseURL="doctor/data/create/"
        const baseURL=`${keyOfURL}/data/create/`     
        dataToDb('post', baseURL, dataForDB).then(recData=>afterRecData(recData))      
        setFormData({})
        setFile(null)    
      }else{
        alert('You have to select specialist option also Upload an Image')
      }     
  break;

  case "Delete":
      const baseURL=`${keyOfURL}/data/delete/`
      dataToDb('delete', baseURL , undefined ,formData.id).then(recData=>afterRecData(recData))
  break;

  case "Update":
     
      if(Object.keys(formData).length>1){
        const baseURL=`${keyOfURL}/data/update/`
      dataToDb('patch',baseURL,formData).then(recData=>afterRecData(recData))
      // console.info(formData)
      }else{
        alert('you have nothing to updated')
      }
      
  break;
 
  default:
      alert('something error')
  break;
  }  
}

//handle refresh for id based data 
const handleRefresh =()=>{
  const keyOfURL=actionType.split(' ')[1].toLowerCase()
  const baseURL=`${keyOfURL}/data/doctorinfo/`    
  dataToDb('get', baseURL , undefined ,formData.id).then(recData=>handleFoundData(recData))
}

//functionality ↑ area ends ↑
const handleEdit=(key)=>{
  // setEditable(!editable)
  setEditable({...editable,[key]:!editable[key]})
}


 return (
 
      <form id="data_form" onSubmit={submitForm}>        
        <div className="row">

        {actionType!=="Add Doctor" && actionType!=="Add Admin"  &&
          <div className="col-md-6 "> 
            <div className="row d-flex align-items-center">              
                <div className="form-group col-md-10"> 
                  <label for="id">ID *</label> 
                  <input id="id" type="text" name="id" className="form-control" required="required" onChange={inputField} value={formData?.id || ''}/> 
                </div>
              
              {actionType!=="Add Doctor"   &&
                <div className="col-md-1 pt-3">
                <img onClick={handleRefresh} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/385be77d-3360-4ac7-92ca-5671235ee4dc/d7j5lmc-a1a45610-478d-426d-b953-9cf1841c115e.gif" alt="" width="25"/>
                </div>
              }
        
        </div>
        
        {actionType!=="Update Doctor"  && foundData.name && <div>
          <h5>{`Name : ${foundData.name}`}</h5>
          <p>{`Phone : ${foundData.phone}`}</p>
          <p>{`Email : ${foundData.email}`}</p>
          <img src={foundData.image} alt="" width="75"/>
        </div> }
        </div> }   

          {actionType==="Add Doctor" || actionType==="Update Doctor" || actionType==="Add Admin"? 
          <div className="col-md-6">         
            <div className="form-group">
              <label for="name">Name *</label> 
              <input id="name" type="text" name="name" className="form-control" required="required" onChange={inputField} value={formData?.name || '' ||foundData.name} disabled ={actionType==="Update Doctor" &&  !editable.name } />{actionType!=="Add Doctor" && actionType!=="Add Admin" && <i class="fas fa-wrench" onClick={()=>handleEdit("name")}></i>}
            </div>
          </div> : ""}

          {actionType!=="Delete Doctor" && <div className="col-md-6">
            <div className="form-group"> 
              <label for="phone">Phone *</label> 
              <input id="phone" type="number" name="phone" className="form-control" required="required" onChange={inputField} value={formData?.phone || '' || foundData.phone} disabled ={actionType==="Update Doctor" &&  !editable.phone }/> {actionType!=="Add Doctor" && actionType!=="Add Admin" && <i class="fas fa-wrench" onClick={()=>handleEdit("phone")}></i>}
            </div>
          </div>}
        
       
          {actionType!=="Delete Doctor" &&  <div className="col-md-6">
            <div className="form-group"> 
              <label for="email">Email *</label> 
              <input id="email" type="email" name="email" className="form-control" required="required" onChange={inputField} value={formData?.email || '' || foundData.email} disabled ={actionType==="Update Doctor" 
               &&  !editable.email }/>{actionType!=="Add Doctor" && actionType!=="Add Admin" && <i class="fas fa-wrench" onClick={()=>handleEdit("email")}></i>} 
            </div>
          </div>}

        {actionType==="Add Doctor" &&
          <div className="col-md-6 mx-auto">
            <div className="form-group"> 
              <label for="specialist">Specialist on *</label> 
              <select id="specialist" name="specialist" className="form-control" required onChange={inputField} disabled ={actionType==="Update Doctor" }>
                <option value=""> --Select Speciality--</option>
              {
                doctorSpecialist.map((speciality)=>
                <option key={speciality} value={speciality} >{speciality}</option>
                )
              }                                          
              </select> 
            </div>
          </div>
        
        }
      </div>
        <div className="row">
          {actionType=== "Add Doctor"  &&
          
          <div className="col-md-10">
            <div className="form-group"> 
              <label for="Dr_Details">Dr. Details *</label> 
              <textarea id="Dr_Details" name="dr_Details" className="form-control"  rows="4" required="required" onChange={inputField} value={formData?.dr_Details || ''}></textarea> 
            </div>
          </div>
          }

          {/* FILEBASE64 STARTS ↓ */}
         {actionType=== "Add Doctor" | actionType=== "Add Admin"  && <div className="col-md-2">               
            <label for="fileInput">Upload Img</label>           
            <Flip left>
              <div className="uploaded_img">
              <img src={file!==null? file : avator} alt="" width="100" height="100"/>
              </div> 
            </Flip>             
            <div className="file_base img_control">
              <i className="fas fa-camera my_camera" ></i>
              <FileBase64 id="fileInput" required={true} multiple={false} onDone={(image)=>handleImage(image)}/>
            </div>                                         
          </div>}
          
                      

          {/* FILEBASE64 ENDS ↑ */}

          {/* SUBMIT BUTTON   ↓ */}
          <div className="col-md-12 "> 
            <input  type="submit" className="button_style_all " value={actionType}/> 
          </div>
        </div>
      </form>
              


 )
}
