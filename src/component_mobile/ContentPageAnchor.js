import { Tabs } from 'antd-mobile'
import React, { useState, useEffect } from 'react';
import menuData from './menuData.json'
import { Anchor } from '@arco-design/web-react';
import { useNavigate } from 'react-router-dom';
import { useThrottleFn } from 'ahooks'

const AnchorLink = Anchor.Link;
const tabHeight = 42

const App = (props) => {
  const { selectedKey, viewportWidth } = props;
  const [anchorLinks, setAnchorLinks] = useState([]);
  const [activeKey, setActiveKey] = useState('')
  const navigate = useNavigate();

  // // useEffect 监听页面加载完成后执行的事件
  // useEffect(() => {
  //   const hash = window.location.hash;
  //   if (hash) {
  //     const id = hash.substring(1); // 去除 '#' 符号
  //     const element = document.getElementById(id);
  //     if (element) {
  //       element.scrollIntoView({ behavior: 'smooth' });
  //     }
  //   }
  // }, []); // [] 表示只在组件挂载时执行一次

  //   navigate(`#${'aaa'}`, { replace: false });
  // };

  const { run: handleScroll } = useThrottleFn(
    () => {
      const selectedItem = menuData.find(item => item.key === selectedKey);
      let currentKey = selectedItem.anchor[0].href
      for (const item of selectedItem.anchor) {
        const element = document.getElementById(`anchor-${item.href}`)
        if (!element) continue
        const rect = element.getBoundingClientRect()
        if (rect.top <= tabHeight) {
          currentKey = item.href
        } else {
          break
        }
      }
      setActiveKey(currentKey)
    },
    {
      leading: true,
      trailing: true,
      wait: 100,
    }
  )

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])


  useEffect(() => {
    console.log('selectedKey:', selectedKey);
    //开始寻找 selectedItem 
    const returnTab = (selectedKey) => {
      console.log(selectedKey)
      const selectedItem = menuData.find(item => item.key === selectedKey);
      if (selectedItem && selectedItem.anchor) {
        return selectedItem.anchor.map((anchorItem, index) => (
          <Tabs.Tab title={anchorItem.title} key={anchorItem.href}>
          </Tabs.Tab>
        ));
      } else {
        console.log("No Anchor: ", selectedItem)
      }
    };
    const links = returnTab(selectedKey);
    setAnchorLinks(links);
    setActiveKey(links[0].key)
  }, [selectedKey]);


  useEffect(() => {
    navigate(`${activeKey}`, { replace: false });
    const hash = window.location.hash;
    if (hash) {
      const id = hash.substring(1); // 去除 '#' 符号
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [activeKey]);



  const width = viewportWidth - 105

  return (
    <div style={{ position: 'fixed'}}>
      <Tabs activeKey={activeKey} onChange={key => {
        setActiveKey(key)
        document.getElementById(`anchor-${key}`)?.scrollIntoView()
        window.scrollTo({
          top: window.scrollY - tabHeight,
        })
      }}
        style={{ backgroundColor: 'white', width: width }} >
        {anchorLinks}
      </Tabs>
    </div>
  );
};

export default App;



