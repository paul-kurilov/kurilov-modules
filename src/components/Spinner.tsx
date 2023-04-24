import React from 'react';
import { Space, Spin } from 'antd';

const Spinner: React.FC = () => (
  <Space size="middle">
    <Spin size="small" />
    <Spin />
    <Spin size="large" />
  </Space>
);

export default Spinner;