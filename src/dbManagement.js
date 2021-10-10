
import axios from 'axios';

// const hostURL='http://localhost:8000/';
const hostURL='https://immense-wildwood-58159.herokuapp.com/';
// const hostURL='https://hospitalapi.newazkitchenbdapi.com/';


export const dataToDb=async(crud,baseURL,data,params)=>{
 switch (crud) {

  case 'post':   
    const responseOfPost=await axios.post(`${hostURL}${baseURL}`, data) 
    return responseOfPost;
  break;

  case 'get':    
    const responseOfGet=params===undefined ? await axios(`${hostURL}${baseURL}`) : await axios(`${hostURL}${baseURL}${params}`)
    return responseOfGet
  break;

  case 'patch':
    const responseOfUpdate=await axios.patch(`${hostURL}${baseURL}`,data)
    return responseOfUpdate;
  
  break;

  case 'delete':
    const responseOfDelete=await axios.delete(`${hostURL}${baseURL}${params}`) 
    return responseOfDelete;
    
  break;

  case 'put':
    
  break;

 
  default:
   break;
 }

}

