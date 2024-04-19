// import logo from './logo.svg';
// import './App.css';
// import test from './component/TestPage';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       <test></test>
//     </div>
//   );
// }

// export default App;


// App.js

import React from 'react';
import { Button } from '@arco-design/web-react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'; // 使用 BrowserRouter 和 Route
import TestPage from './component/TestPage'; // 正确引入 TestPage 组件
// import ContentPageAnchor from './component/ContentPageAnchor';

const App = () => {
  return (
    
  <TestPage></TestPage>
  );
};

const Home = () => <h1>Welcome to Home!</h1>;

export default App;
