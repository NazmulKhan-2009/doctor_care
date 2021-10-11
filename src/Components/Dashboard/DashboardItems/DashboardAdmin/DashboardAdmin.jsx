import React, { useContext } from 'react'
import { appContext } from '../../../../App';
import Fade from 'react-reveal/Fade';
import DashboardWrapper from '../../DashboardWrapper/DashboardWrapper';
import AdminDBAction from './AdminDataCtr/AdminDBAction';
// import AdminDataCtr from './AdminDataCtr/AdminDataCtr';
import AdminDataForm from './AdminDataForm/AdminDataForm';
import './dashboardAdmin.css';
import DoctorsList from './OurDoctors/DoctorsList';
export default function DashboardAdmin() {
  const {actionType}= useContext(appContext)
// console.info(actionType)
  
  let showDoctor=true;
  let showForm=false;

  switch (actionType) {
    case 'Our Doctors':
      showDoctor=true
    break;

    case 'Add Doctor' :
      showForm=true;
      showDoctor=false;
    break; 

    case 'Delete Doctor':
      showForm=true;
      showDoctor=false;
    break; 

    case 'Update Doctor':
      showForm=true;
      showDoctor=false;
    break; 

    case 'Add Admin':
      showForm=true;
      showDoctor=false;
    break;
    
  
    default:
      break;
  }



 return (
  <DashboardWrapper>
   <div className="container pt-2" id="admin_control">
   {/* <h3>Admin Control</h3> */}
    <div className="row pt-5">
     <div className="col-md-4 mx-auto">
     <h3>Admin Control</h3>
      <AdminDBAction/>    
     </div>

     {/* //! recheck khan */}
     <div className="col-md-8 mx-auto">
     {showForm && <Fade right><AdminDataForm/></Fade> }

     {showDoctor && <Fade bottom><DoctorsList selection={null} /></Fade>}
                   
     </div>
    </div>
   </div>
  
 </DashboardWrapper>
 )
}
