import { CountUp } from 'use-count-up'
import './CountPatient.css';

export default function CountPatient() {

const pData=[
 {count:70,
  area_title:"Total Appointments",
  color:'#F1536E',
 },
 {count:30,
  area_title:"Today's Appointments",
  color:'#3DA5F4',
 },
 {count:10,
  area_title:"Pending Appointments",
  color:'#00C689',
 },
 {count:20,
  area_title:"Appointments done",
  color:'#FDA006',
 },


]


 return (
  <section id="patient_count" className="py-5">
   <div className="container-fluid">
   <h4>Appointment Status</h4>
    <div className="row">
     
     {pData.map((item)=>
      <div key={Math.random()} className="col-md-3 count_area">
       <div className="para" style={{background:item.color}}>
        {/* <h1>{item.count}</h1><span>{item.area_title}</span> */}
        <h1><CountUp isCounting end={item.count} duration={5.2}/></h1><span>{item.area_title}</span>
       </div>
     </div>
     )}

    </div>
   </div>
  </section>
 )
}
