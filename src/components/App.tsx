import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout, theme } from 'antd';

import Spinner from './Spinner';
import SideBar from './SideBar'; 


const HomePage = lazy(() => import('./pages/HomePage'));
const ChartsPage = lazy(() => import('./pages/ChartsPage'));  




const { Header, Content, Footer } = Layout;


function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <BrowserRouter> 
      <Layout style={{ minHeight: '100vh' }}>
        <SideBar/>
        <Layout className="site-layout">
          <Header style={{ padding: 0, background: colorBgContainer }} />
          <Content style={{ margin: '0 16px' }}>
            
            {/* <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}> */}
              <Suspense fallback={<Spinner/>}>
                <Routes>
                  <Route path="/" element={<HomePage/>}/> 
                  <Route path="/charts/*" element={<ChartsPage/>}/> 
                
                  {/* <Route path="*" element={<Page404/>}/> */}
                </Routes>
              </Suspense>
            {/* </div>  */}

          </Content>
          <Footer style={{ textAlign: 'center' }}>Modules ©2023 Created by Paul Kurilov</Footer>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
