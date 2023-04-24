import React from 'react'; 
import { Area } from '@ant-design/charts';

interface Props {
  data: Array<object>;
  style?: object;
}

const ChartArea: React.FC<Props> = ({ data, style }) => { 
  const config = {
    data,
    height: 400, xField: 'day', yField: 'value', point: { size: 5, shape: 'diamond', },
    ...style
  };
  return (
    <> 
      <Area {...config} />     
    </>
  )
};

export default ChartArea;