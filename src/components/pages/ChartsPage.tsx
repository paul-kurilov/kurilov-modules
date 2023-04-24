import React, { useEffect, useState, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { getBitcoinPrice } from '../../modules/fetch/api-coindesk/getBitcoinPrice';

const ChartLine = lazy(() => import('../../modules/charts/ChartLine')); 
const ChartArea = lazy(() => import('../../modules/charts/ChartArea')); 




const ChartsPage: React.FC = ( ) => { 
  const [dataProps, setDataProps] = useState<Array<object>>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getBitcoinPrice('2022-01-01', '2022-04-30'); 
      setDataProps(data);
    }
    getData();
  }, []);


  const styleProps = {
    height: 300, 
    xField: 'day', 
  };
 
  const styleProps2 = {
    height: 300, 
    xField: 'day', 
    point: { size: 3 },
    xAxis: {
      range: [0, 1],
      tickCount: 5,
    },
    animation: true,
    slider: {
      start: 0,
      end: 1,
      trendCfg: {
        isArea: true,
      },
    },
  };
 

  
  return (
    <>   
      <Routes> 
        <Route path="/line" element={<ChartLine data={dataProps} style={styleProps} />} />  
        <Route path="/area" element={<ChartArea data={dataProps} style={styleProps2} />} />   
      </Routes> 
      
    </>
  )
};

export default ChartsPage;