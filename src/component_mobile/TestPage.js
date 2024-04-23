import React, { useState, useEffect } from 'react';
import { NavBar, SideBar, Button } from 'antd-mobile'
import menuData from './menuData.json';
import { useDispatch } from 'react-redux';
import { setTimestamp } from '../app/timestampSlice';
import { BrowserRouter as Router, Route, Routes, Link, history, useNavigate } from 'react-router-dom';
import ContentPage from './ContentPage'
import ContentPageAnchor from './ContentPageAnchor'
import SkeletonPage from './SkeletonPage'


const App = () => {
  const [activeKey, setActiveKey] = useState('1')
  const [selectedKey, setSelectedKey] = useState(activeKey);
  const renderSideBar = (data) => {
    return data.map((item) => {
      return (
        <SideBar.Item key={item.key} title={item.title}>
        </SideBar.Item>
      );
    });
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    setSelectedKey(activeKey)
    sessionStorage.setItem('key', activeKey)
    dispatch(setTimestamp());
    const selectedItem = menuData.find(item => item.key == activeKey);
    navigate(selectedItem.path)
  }, [activeKey]);

  useEffect(() => {
  }, [selectedKey]); // 添加 selectedKey 作为 useEffect 的依赖项

  return (
    <>
      <div style={{ minHeight: '100vh' }}>
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 }}>
          <NavBar backArrow={false} style={{ '--height': '80', backgroundColor: 'white' }}>
            <div style={{ height: '10px' }}></div>
            商品分类
            <div style={{ height: '10px' }}></div>
          </NavBar>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'stretch' }}>
          <div style={{ position: 'fixed', top: '47px', bottom: 0, left: 0, zIndex: 90 }}>
            <SideBar style={{ '--height': '93vh' }} activeKey={activeKey} onChange={setActiveKey}>
              {renderSideBar(menuData)}
            </SideBar>
          </div>
          
          <div style={{width:'105px', height:'100vh'}}>
            {/* <SideBar style={{ '--height': '93vh' }} activeKey={activeKey} onChange={setActiveKey}>
              {renderSideBar(menuData)}
            </SideBar> */}
          </div>
          <div style={{ position: 'fixed', height:'100vh',width:'100vw', backgroundColor:'white', zIndex: -1}}></div>
          <div style={{ marginLeft: '0px', marginTop:'50px'}}>
            <Routes>
              <Route path='/' element={<SkeletonPage />} />
              <Route path='/cloth' element={<ContentPage selectedKey={selectedKey} />} />
              <Route path='/book' element={<ContentPage selectedKey={selectedKey} />} />
              <Route path='/food' element={<ContentPage selectedKey={selectedKey} />} />
              <Route path='/electric' element={<ContentPage selectedKey={selectedKey} />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
