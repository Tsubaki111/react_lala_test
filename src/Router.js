import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App'; // 导入你的 App 组件

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} /> 
      </Switch>
    </Router>
  );
};

export default Routes;
