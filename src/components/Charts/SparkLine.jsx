import React from 'react';
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

const SparkLine = ({id, currentColor, height, type, width, data, color }) => {
  return (
    <div>
      <SparklineComponent 
        id={id}
        height={height}
        width={width}
        lineWidth={1}
        valuetype="Numeric"
        fill={color}
        dataSource={data}
        border={{color: currentColor, width: 2}}
        xName='x'
        yName='y'
        type={type}
        tooltipSettings={{visible: true, format: '${x} : data ${y}',
          trackLineSettings: {visible: true}
        }}
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
    </div>
  )
}

export default SparkLine
