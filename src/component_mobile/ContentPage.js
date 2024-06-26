import React, { useState, useEffect } from 'react';
import menuData from './menuData.json'
import ContentDetail from './ContentDetail'
import ContentPageAnchor from './ContentPageAnchor'
import SkeletonPage from './SkeletonPage'
import { Footer } from 'antd-mobile'

import { Typography } from 'antd';
const { Title } = Typography;

const App = ({ selectedKey }) => {
  const [divContent, setDivContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  // 动态修改长度
  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const calculatedWidth = (viewportWidth - 100) * 0.25; // 计算宽度并转换为像素单位

  useEffect(() => {
    setLoading(true)
    console.log('selectedKey:', selectedKey);
    //开始寻找 selectedItem 
    const returnContent = (selectedKey) => {
      console.log(selectedKey)
      const selectedItem = menuData.find(item => item.key == selectedKey);

      if (selectedItem && selectedItem.anchor) {
        return selectedItem.anchor.map((anchorItem, index) => (
          <div >
            <div id={anchorItem.href.slice(1)} style={{
              scrollMarginTop: '100px',
            }} />
            {(
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {/* 标题 */}
                <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>{anchorItem.title}</div>
                {/* 核心内容 map形式 */}
                <ContentDetail selectedKey={selectedKey} selectedTitle={anchorItem.title} calculatedWidth={calculatedWidth}></ContentDetail>
                <div style={{height:'30px'}}></div>
              </div>
            )}
          </div>
        ));

      } else {
        console.log("No: ", selectedItem)
      }
    };
    const contents = returnContent(selectedKey);
    setDivContent(contents);
    setLoading(false)
  }, [selectedKey]);


  const widthh = viewportWidth - 105;
  return (
    <>

      {/* 顶部的锚点 */}
      <div style={{ marginTop: '-3px' }}>
        <ContentPageAnchor selectedKey={selectedKey} viewportWidth={viewportWidth} />
      </div>
      {/* 判断是否使用骨架 */}
      <div style={{ marginLeft: '10px' }}>
        {loading && <SkeletonPage calculatedWidth={calculatedWidth}></SkeletonPage>}
        {!loading &&
          <>
            <div style={{
              height: '60px',
            }}></div>
            <div>
              {divContent}
            </div>
          </>}
        <br></br>
      </div>

      {/* 底部标识 */}
      <div style={{ width: widthh }}>
        <Footer label='到底了'></Footer>
      </div>
    </>
  );
};

export default App;
