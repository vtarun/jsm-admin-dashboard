import React from 'react';
import { 
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DataLabel,
  ColumnSeries,
  Category,
  Legend,
  Tooltip,
  Highlight
  
} from '@syncfusion/ej2-react-charts';
import { barPrimaryXAxis, barPrimaryYAxis, barCustomSeries } from '../../data/dummy';
import { ChartsHeader } from "../../components";
import { useStateContext } from '../../contexts/ContextProvider';

const Bar = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Bar" title="Olympic Medal Counts - RIO" />
      <div className='w-full'>
      <ChartComponent
        id='bar-chart'
        style={{ textAlign: "center" }}
        legendSettings={{ background: 'white' }}
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        width={'75%'} 
        tooltip={{ enable: true }}
      >
        <Inject services={[ColumnSeries, DataLabel, Category, Legend, Tooltip, Highlight]} />
        <SeriesCollectionDirective>
            {barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
        </SeriesCollectionDirective>
    </ChartComponent>
    </div>
    </div>
  )
}

export default Bar
