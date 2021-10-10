import React from 'react';
import {Bar} from 'react-chartjs-2';


export default function BarGraphData() {


 const DBdata={
  icu:{mar:40,apr:51,may:66,jun:78,jul:83,aug:90},
  doctor:{mar:20,apr:22,may:22,jun:25,jul:28,aug:35}
 } 
 
 const dataPick=(type, data)=>{
  return Object[type](data)
 }

 const label=(i)=>{
  const key=Object.keys(DBdata)[i]
// return key.slice(0,1).toLocaleUpperCase()+key.substr(1)
return key.toLocaleUpperCase()
 }

 const state = {
  labels: dataPick("keys", DBdata.icu),
  datasets: [
    {
      label:label(0),
      backgroundColor: 'rgba(75,192,192,1)',
      // borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data:dataPick("values", DBdata.icu)
    },
    {
     label: label(1),
     backgroundColor: 'crimson',
     // borderColor: 'rgba(0,0,0,1)',
     borderWidth: 2,
     data:dataPick("values", DBdata.doctor)
   }
  ]
}
 
    
 

     return (
      <Bar
          data={state}
          options={{
           plugins: {
            title: {
                display: true,
                text: 'Facility in number',
                color:'crimson',
                padding:"40px"
            }
        },
            legend:{
              display:true,
              position:'right'
            },
            responsive: true,
    maintainAspectRatio: false
          }}
        />
     )
    }
    