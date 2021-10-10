import {Line} from 'react-chartjs-2';

 export default function LineGraphData() {


const DBdata={
 recover:{mar:80,apr:81,may:56,jun:60,jul:68,aug:80},
 surgery:{mar:40,apr:91,may:86,jun:70,jul:38,aug:95}
}  

   
const dataPick=(type, data)=>{
 return Object[type](data)
}

  
const state = {
 

 labels:dataPick("keys", DBdata.recover),
 datasets: [
   {
     label: 'patient recover report',
     fill: false,
     lineTension: .4,
     backgroundColor: 'rgba(75,192,192,1)',
     borderColor: '#F1536E',
     borderWidth: 1,
     data:dataPick("values" , DBdata.recover)
   },
   {
    label: 'Surgery Report',
    fill: false,
    lineTension: .4,
    backgroundColor: 'crimson',
    borderColor: 'indigo',
    borderWidth: 1,
    data: dataPick("values" , DBdata.surgery)
  },

 ]
}
   return (
   
        <Line
          data={state}
          options={{
           plugins: {
            title: {
                display: true,
                text: 'Recovery in %',
                color:'crimson',
                padding:"20px"
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
  