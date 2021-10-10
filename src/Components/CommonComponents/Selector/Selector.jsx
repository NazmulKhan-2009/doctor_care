
import React, { useContext, useState } from 'react';
import Select from 'react-select';
import { appContext } from '../../../App';
// import TextareaAutosize from 'react-autosize-textarea';
import './selector.css'


const DoctorCategory=({options})=>{

  let  drOption=[]
  options.map((each)=>drOption.push({value:each, label:each}))
 

  const {item, setItem}=useContext(appContext)
 

  const handleChange = selectedOption => {
  setItem(selectedOption.value);
  };



 return(  
  <>
    <Select
        value={item}
        onChange={handleChange}
        options={drOption}
        placeholder={item ? item : 'select doctor'}
        isSearchable
      />
  </> 
 )
}



export default DoctorCategory