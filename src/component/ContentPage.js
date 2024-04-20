import React, { useState, useEffect } from 'react';
import menuData from './menuData.json'
import ContentDetail from './ContentDetail'

const App = ({ selectedKey }) => {
  const [divContent, setDivContent] = useState([]);

  useEffect(() => {
    console.log('selectedKey:', selectedKey);
    //开始寻找 selectedItem 
    const returnContent = (selectedKey) => {
      console.log(selectedKey)
      const selectedItem = menuData[0].children.find(item => item.key == selectedKey);

      if (selectedItem && selectedItem.anchor) {
        return selectedItem.anchor.map((anchorItem, index) => (
          <div >
            <div id={anchorItem.href.slice(1)} style={{ height: '88px', }} />
            {index === selectedItem.anchor.length - 1 ? (
              <div style={{ minHeight: '88vh', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                {anchorItem.title}
                <br />
                <br />
                <ContentDetail selectedKey={selectedKey} selectedTitle={anchorItem.title}></ContentDetail>
              </div>
            ) : (
              <div style={{ minHeight: '80px', display: 'flex', flexDirection: 'column' }}>
                {anchorItem.title}
                <br />
                <br />
                <ContentDetail selectedKey={selectedKey} selectedTitle={anchorItem.title}></ContentDetail>
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
  }, [selectedKey]);


  return (
    <div>
      {divContent}
      {/* <div id="recommend" style={{ height: '88px', }}></div>
      <div style={{ height: '100px' }}>
        Recommend Section
      </div>
      <div id="different" style={{ height: '88px', }}></div>
      <div style={{ height: '100vh' }}>
        Different Section
      </div> */}
    </div>
  );
};

export default App;
