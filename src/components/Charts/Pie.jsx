import React from 'react';
import { AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationLegend,
  PieSeries,
  AccumulationTooltip,
  AccumulationDataLabel  
} from '@syncfusion/ej2-react-charts';
import { Header } from "../../components";

import { pieChartData } from '../../data/dummy';

const Pie = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Area" title="Inflation Rate in Percentage"/>
      <AccumulationChartComponent 
        id='pie-chart' 
        title='Browser Market Share' 
        load={load.bind(this)} 
        legendSettings={{ background: 'white' }} 
        enableSmartLabels={true} 
        enableAnimation={true} 
        center={{ x: '50%', y: '50%' }} 
        enableBorderOnMouseMove={false} 
        tooltip={{ enable: true}}
      >
        <Inject services={[
          AccumulationLegend,
          PieSeries,
          AccumulationTooltip,
          AccumulationDataLabel]}
        />
        <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              dataSource={pieChartData}
              name='Browser'
              xName='x'
              yName='y'
              explode={true}
              explodeOffset='10%'
              explodeIndex={0}
              startAngle={55} 
              innerRadius="40%"
              dataLabel={{
                visible: true, 
                position: 'Outside',
                name: 'text', 
                font: { fontWeight: '600' }, 
                connectorStyle: { length: '20px', type: 'Curve' } 
              }} 
              radius={'70%'}
          />
        </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
    </div>
  )
}

export default Pie;