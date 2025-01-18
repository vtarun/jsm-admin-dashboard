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
import { ChartsHeader } from "../../components";

import { pieChartData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const Pie = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Pie" title="Project Cost Breakdown"/>
      <AccumulationChartComponent 
        id='pie-chart' 
        legendSettings={{ background: 'white' }} 
        enableSmartLabels={true} 
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
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
              name='Infaltion'
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