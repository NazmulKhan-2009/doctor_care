import React, { useContext } from 'react';
import { appContext } from '../../../App';
import { dataToDb } from '../../../dbManagement';
import { notification } from '../../commonFunction';
import './modal.css';
export default function Modal({statusChangedData,loadFunc}) {

  const {setSyncAppointment}=useContext(appContext)

const confirmStatus = () => {
 
  // dataToDb("patch",'appointment/data/update/',statusChangedData).then(recData=>notification(recData.data))

  dataToDb("patch",'appointment/data/update/',statusChangedData).then(()=>{loadFunc(true);setSyncAppointment(Math.random())})
  
}


 return (
  <>
    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">            
          </div>
          <div className="modal-body">
            <h5 style={{color:'crimson'}}>You are changing the status please confirm serial {statusChangedData.serial} as {statusChangedData.name} on {statusChangedData.status}</h5>            
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary my_btn" data-dismiss="modal">✗</button>
            <button type="button" className="btn btn-primary my_btn" data-dismiss="modal" onClick={confirmStatus}> &#x2713;</button>
          </div>
        </div>
      </div>
    </div>
</>
 )
}
