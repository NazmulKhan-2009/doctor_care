import React from 'react'
import DoughnutData from './DoughnutData/DoughnutData';
import LineGraphData from './LineGraphData/LineGraphData';
import './dataCharts.css'
import BarGraphData from './BarGraphData/BarGraphData';
export default function DataCharts() {
  return (
    <section id="dataCharts">
    <div className="container py-5" id="data_charts">
    <h4>Recover Analytics</h4>
      <div className="row pt-3">     
        {
          [<DoughnutData/>, <LineGraphData/> , <BarGraphData/>].map((component)=>
          <div key={Math.random()} className="col-md-4 pb-2 chart_style" >
            {component}
          </div>         
          )
        }
     </div>
    </div>
    </section>
  )
}
