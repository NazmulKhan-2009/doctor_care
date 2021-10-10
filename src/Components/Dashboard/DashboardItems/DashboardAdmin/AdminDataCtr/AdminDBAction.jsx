import React, { useContext, useState } from 'react'
import { appContext } from '../../../../../App';
import './adminDBAction.css'
export default function AdminDBAction() {
const {setActionType,setFoundData,setFormData,setEditable,setFile}= useContext(appContext)


const [menuHandle,setMenuHandle]= useState(false)


const handleMenu=()=>{
    setMenuHandle(!menuHandle)
    // setActionType('')
}

const handleAction=(type)=>{
    setMenuHandle(!menuHandle)
    setActionType(type)
    setFoundData({name:'',phone:'',email:''})
    setFormData({})
    setEditable({name:false,phone:false,email:false})
    setFile(null)
    // console.info(type)
}

const actionData=[
    {
        id:"doctor",
        icon:"fas fa-user-circle",
        menu:"Doctor data control",
        actItem:['Our Doctors','Add Doctor','Delete Doctor','Update Doctor']
    },
    {
        id:"admin",
        icon:"fas fa-user-circle",
        menu:"Admin data control",
        actItem:['Our Admins','Add Admin','Delete Admin','Update Admin']
    },
    {
        id:"patient",
        icon:"fas fa-user-circle",
        menu:"Patient data control",
        actItem:['Our Patients','Delete Patient','Update Patient']
    },

    {
        id:"blog",
        icon:"fas fa-user-circle",
        menu:"Doctor blog",
        actItem:['Doctor blogs','Write blogs','Delete blogs','Update blogs']
    },

]


 return (
  <div className="py-5" id="action_selection">
  <ui className="mainMenu  mx-auto ">
  
    {
        actionData.map((element)=>
       
        <li key={Math.random()} className="item" id={element.id}>
          <a href={`#${element.id}`} className="btn" onClick={handleMenu}><i className={element.icon}></i>{element.menu}</a>
          <div className= { menuHandle ? 'open_subMenu subMenu' : 'close_SubMenu subMenu'}>
            {
                element.actItem.map((action)=>
                <p key={Math.random()}  onClick={()=>handleAction(action)}>{action}</p>
                )
            }
          </div>         
        </li>
        )
    }



      
    </ui> 
</div>
 )
}
