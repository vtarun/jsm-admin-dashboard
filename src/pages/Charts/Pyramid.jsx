import React from 'react';
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject, 
  AccumulationLegend,
  PyramidSeries,
  AccumulationTooltip,
  AccumulationDataLabel
} from'@syncfusion/ej2-react-charts';

import { PyramidData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const Pyramid = () => {
  const { currentMode } = useStateContext();
  const datalabel = { visible: true, position: 'Inside', name: 'text' };
  return (
    <AccumulationChartComponent 
      id='pyramid-chart' 
      tooltip={{ enable: true }}
      title='Food Comparison Chart'
      legendSettings={{position: 'Bottom', background : 'white'}}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    >      
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          dataSource={PyramidData}
          xName='x'
          yName='y'
          type='Pyramid'
          width='60%' 
          height='80%'           
          dataLabel={datalabel}
          gapRatio={0.03}
          name="Food"
        />
      </AccumulationSeriesCollectionDirective>
      <Inject services={[AccumulationLegend, PyramidSeries, AccumulationTooltip, AccumulationDataLabel]} />
    </AccumulationChartComponent>
  )
}

export default Pyramid;