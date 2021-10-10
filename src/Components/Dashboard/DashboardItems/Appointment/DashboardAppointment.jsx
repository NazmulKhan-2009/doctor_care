import DashboardWrapper from '../../DashboardWrapper/DashboardWrapper';
import AppointmentSchedule from './AppoinmentSchedule/AppointmentSchedule';
import UpdateAppointment from './UpdateAppointment/UpdateAppointment';



export default function DashboardAppointment() {



 return (
  
  <DashboardWrapper>
    <AppointmentSchedule/> 
    <UpdateAppointment/>
  </DashboardWrapper>
 )
}