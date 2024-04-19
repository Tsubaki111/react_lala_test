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




//无法实现自动跳转
// import { Anchor,Typography } from '@arco-design/web-react';
// import menuData from './menuData.json'
// // import anchorData from
// const AnchorLink = Anchor.Link;

// //明天要做的：修改menuData.json并传入我设置的affix内容，然后用key在test Page里面找


// const App = ({selectedKey}) => {
//     const returnAnchor = (key) =>{
//         const selectedItem = menuData[0].children.find(item => item.key === key);
//         if (selectedItem && selectedItem.anchor) { // 进行安全性检查，确保 anchor 不为 undefined
//             // 使用 map 方法遍历 anchor 数组，并将每个对象转换为 AnchorLink 组件
//             return selectedItem.anchor.map((anchorItem, index) => (
//               <AnchorLink key={index} href={anchorItem.href} title={anchorItem.title} />
//             ));
//           }
//           else{
//             console.log(selectedItem)
//           }
//     }

//     // const anchorValue = 
//     return (
//         <div>
//         <Anchor
//             affix={false}
//             direction='horizontal'
//             lineless
//             style={{margin:'20px'}}
//         >
//             {returnAnchor(selectedKey)}
//             {/* <AnchorLink href='#Basic' title='Basic' />
//             <AnchorLink href='#Static' title='Static' />
//             <AnchorLink href='#Lineless-mode' title='Lineless mode' />
//             <AnchorLink href='#Affix' title='Affix' />
//             <AnchorLink href='#Scroll-boundary' title='Scroll boundary' />
//             <AnchorLink href='#Hash-mode' title='Hash mode' /> */}
//         </Anchor>
//         </div>
//     );
// };