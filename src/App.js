import React from 'react';
import { Button } from '@arco-design/web-react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'; // 使用 BrowserRouter 和 Route
import TestPage from './component_mobile/TestPage'; // 正确引入 TestPage 组件
// import ContentPageAnchor from './component/ContentPageAnchor';

const App = () => {
  return (
    <Router>
      <TestPage></TestPage>
    </Router>
  );
};

export default App;
