import React from 'react';
import { 
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  HiloOpenCloseSeries,
  Category,
  Tooltip,
  DateTime,
  Zoom,
  Logarithmic,
  Crosshair  
} from '@syncfusion/ej2-react-charts';
import { useStateContext } from "../../contexts/ContextProvider";
import { ChartsHeader } from "../../components";

import { 
  financialChartData,
  FinancialPrimaryXAxis,
  FinancialPrimaryYAxis
} from '../../data/dummy';

const Financial = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Financial" title="AAPLE Historical"/>
      <div className="w-full">
      <ChartComponent id='finance-charts' 
        style={{ textAlign: "center" }} 
        primaryXAxis={FinancialPrimaryXAxis} 
        primaryYAxis={FinancialPrimaryYAxis} 
        chartArea={{ border: { width: 0 } }} 
        tooltip={{ enable: true, shared: true }} 
        width={'75%'} 
        legendSettings={{ visible: false }} 
        crosshair={{ enable: true, lineType: 'Vertical' }} 
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      >
        <Inject services={[HiloOpenCloseSeries, Category, Tooltip, DateTime, Zoom, Logarithmic, Crosshair]} />
        <SeriesCollectionDirective>
            <SeriesDirective 
              type='HiloOpenClose' 
              dataSource={financialChartData} 
              animation={{ enable: true }} 
              bearFillColor='#2ecd71' 
              bullFillColor='#e74c3d'
              xName='x'
              low='low'
              high='high'
              open='open'
              close='close'
              name='Apple Inc' 
            />
        </SeriesCollectionDirective>
      </ChartComponent>
      </div>
    </div>
  )
}

export default Financial
