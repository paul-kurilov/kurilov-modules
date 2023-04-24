import React from 'react'; 
import { Card, Col, Row } from 'antd';
import { Line } from '@ant-design/charts';
import { displayCode } from '../modify/displayCode';

interface Props {
  data: Array<object>;
  style?: object;
}

const ChartLine: React.FC<Props> = ({ data, style }) => { 
  const config = {
    data,
    height: 400, xField: 'day', yField: 'value', point: { size: 5, shape: 'diamond', },
    ...style
  };



  const txtFunc = displayCode(`export const getBitcoinPrice = async (start: string = '2022-01-01', end: string = '2022-02-01'): Promise<any> => {
    const response = await fetch(\`https://api.coindesk.com/v1/bpi/historical/close.json?start=\${start}&end=\${end}\`);
    const data = await response.json();
    const array = Object.entries(data.bpi).map(([day, value]) => ({ day, value }));
    return array; 
  }
  
  const dataProps = getBitcoinPrice('2022-01-01', '2022-04-30');`);

  const txtLine = displayCode(`<ChartLine data={dataProps} style={styleProps} />
  
  import React from 'react';  
  import { Line } from '@ant-design/charts'; 
  
  interface Props {
    data: Array<object>;
    style?: object;
  }
  
  const ChartLine: React.FC<Props> = ({ data, style }) => { 
    const config = {
      data,
      height: 400, xField: 'day', yField: 'value', point: { size: 5, shape: 'diamond', },
      ...style
    }; 
  
    return <Line {...config} />
  };
  
  export default ChartLine;  
  `);

  
  return (
    <> 
      <Line {...config} />   

      <Row gutter={16} style={{ padding: '20px 0px' }}>
        <Col span={12}>
          <Card title="func: getBitcoinPrice()" bordered={false}>
            {txtFunc}
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Chart" bordered={false}>
            {txtLine}
          </Card>
        </Col> 
      </Row>
    </>
  )
};

export default ChartLine;