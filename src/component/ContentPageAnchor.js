import { Anchor,Typography } from '@arco-design/web-react';
import React, { useState, useEffect } from 'react';
import menuData from './menuData.json'
// import anchorData from
const AnchorLink = Anchor.Link;

const App = ({selectedKey}) => {
    const [anchorLinks, setAnchorLinks] = useState([]);
    
    useEffect(() => {
        console.log('selectedKey:', selectedKey);
        //开始寻找 selectedItem 
        const returnAnchor = (selectedKey) => {
            console.log(selectedKey)
          const selectedItem = menuData[0].children.find(item => item.key == selectedKey);

          if (selectedItem && selectedItem.anchor) {
            return selectedItem.anchor.map((anchorItem, index) => (
              <AnchorLink key={index} href={anchorItem.href} title={anchorItem.title} />
            ));
          } else {
            console.log("No Anchor: ",selectedItem)
          }
        };
        const links = returnAnchor(selectedKey);
        setAnchorLinks(links);
      }, [selectedKey]);

    return (
        <div>
        <Anchor
            affix={false}
            direction='horizontal'
            lineless
            style={{margin:'20px'}}
        >
            {anchorLinks}
        </Anchor>
        </div>
    );
};

export default App;



