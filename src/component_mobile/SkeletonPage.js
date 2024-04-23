// export default App;
import React, { useState, useEffect } from 'react';
import { Space, Typography } from 'antd';
import { Skeleton } from 'antd-mobile'
const { Title } = Typography;

const App = ({calculatedWidth}) => {
  // console.log(calculatedWidth)
  const skeletonGroups = [];

  for (let i = 0; i < 3; i++) {
    const skeletons = [];
    for (let j = 0; j < 3; j++) {
      skeletons.push(
        <div key={10+j} style={{margin:'10px'}}>
            <Skeleton style={{ '--width': calculatedWidth, '--height': calculatedWidth, '--border-radius': '8px' }}/>
              <div style={{height:'20px'}}></div>
            <Skeleton style={{ '--width': calculatedWidth, '--height': '30px', '--border-radius': '8px' }}/>
        </div>
      );
    }
    skeletonGroups.push(
      <div key={i}>
         <div style={{margin:'10px'}}>
            <Skeleton style={{ '--width': '100px', '--height': '30px', '--border-radius': '8px' }}/>
        </div>
        <Space style={{ '--gap': '50px' }} wrap>
          {skeletons}
        </Space>
      </div>
    );
  }

  return (
    <div style={{width:'100vw'}}>
      {skeletonGroups}
    </div>
  );
};

export default App;

