import React, { useState } from 'react'; 
import { useLocation, Link } from 'react-router-dom';

import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';

import type { MenuProps } from 'antd';

import { Layout, Menu } from 'antd';
const {  Sider } = Layout;




type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<Link to="/">Home</Link>, '/', <DesktopOutlined />), 
  getItem('Charts', 'subCharts', <PieChartOutlined />, [
    getItem(<Link to="/charts/line">Line</Link>, '/charts/line'),
    getItem(<Link to="/charts/area">Area</Link>, '/charts/area'), 
  ]),

  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),



  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];




const SideBar: React.FC = () => { 
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();  
 

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <div style={{display: "flex", 
                  justifyContent: "center", 
                  alignItems: "center", 
                  color: "white", 
                  height: 32, 
                  margin: 16, 
                  background: 'rgba(255, 255, 255, 0.2)' }}>
        Kurilov Modules
      </div>
      <Menu theme="dark" defaultSelectedKeys={[location.pathname]} mode="inline" items={items} />
    </Sider>
  )
};

export default SideBar;