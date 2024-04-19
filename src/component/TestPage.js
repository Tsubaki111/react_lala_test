import React, { useState, useEffect } from 'react';
import './TestPage.css';
import { Layout, Menu, Button, Message } from '@arco-design/web-react';
import { IconCalendar, IconCaretRight, IconCaretLeft } from '@arco-design/web-react/icon';
import menuData from './menuData.json';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Content } from 'antd/es/layout/layout';
import { Anchor } from '@arco-design/web-react';
import ContentPage from './ContentPage'
import ContentPageAnchor from './ContentPageAnchor'

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const Sider = Layout.Sider;
const Header = Layout.Header;

// 创建组件 ClothPage
const ClothPage = () => <div>Cloth Page</div>;
// 创建组件 ShoesPage
const ShoesPage = () => <div>Shoes Page</div>;
// 创建组件 FoodPage
const FoodPage = () => <div>Food Page</div>;

const App = () => {
  const [selectedKey, setSelectedKey] = useState(sessionStorage.getItem('key'));

  const renderMenuItems = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu key={item.key} title={<span><IconCalendar />{item.title}</span>}>
            {renderMenuItems(item.children)}
          </SubMenu>
        );
      } else {
        return (
          <MenuItem key={item.key}>
            <Link to={item.path} onClick={() => setSelectedKey(item.key)}>
              {item.title}
            </Link>
          </MenuItem>
        );
      }
    });
  };

  useEffect(() => {
  }, [selectedKey]); // 添加 selectedKey 作为 useEffect 的依赖项

  return (
    <Router>
      <Layout className='layout-collapse-demo'>
        <Sider>
          <Menu
            defaultOpenKeys={['1']}
            defaultSelectedKeys={['0_3']}
            style={{ width: '100%' }}
          >
            {renderMenuItems(menuData)}
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ position: 'fixed', width: '100%', zIndex: 1000 }}>
            <ContentPageAnchor selectedKey={selectedKey} />
          </Header>
          <Layout style={{ padding: '88px 24px', height: '100%' }}>
            <Content>
              <Routes>
                <Route path='/cloth' element={<ClothPage />} />
                <Route path='/shoes' element={<ShoesPage />} />
                <Route path='/food' element={<FoodPage />} />
                <Route path='/another' element={<ContentPage />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
