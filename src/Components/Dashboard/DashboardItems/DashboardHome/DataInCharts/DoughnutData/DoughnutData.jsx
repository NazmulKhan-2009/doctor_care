import React from 'react';
import { Doughnut } from 'react-chartjs-2';

export default function DoughnutData() {

 //link https://www.educative.io/edpresso/how-to-use-chartjs-to-create-charts-in-react

 const infoGraphData={
   Male:30,
   Female:50,
   Kids:20
  }
 
  const dataPick=(type, data)=>{
   return Object[type](data)
  }
 
 const state = {
  labels:dataPick('keys',infoGraphData),
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#F1536E',
        '#00A6B4',
        '#FDA006',       
      ],
      hoverBackgroundColor: [
      '#501800',
      '#003350',
      'yellow',     
      ],
      data:dataPick('values',infoGraphData),
    }
  ]
}

return (
   <Doughnut
          data={state}
          options={{
           plugins: {
            title: {
                display: true,
                text: 'Patient type in %',
                color:'crimson',
                padding:"20px"
            }
        },
            legend:{
              display:true,
              position:'right'
            },
            responsive: true,
            maintainAspectRatio: false,
    
          }}
        />
  
 )
}
