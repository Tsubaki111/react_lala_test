import { Descriptions } from '@arco-design/web-react';
const data = [
  {
    label: ' ContentPage ',
    value: '存放页面内容, 包含ContentDetail与ContentPageAnchor',
  },
  {
    label: 'ContentDetail',
    value: '存放页面细节, 通过redux进行监听, 实时与后端模拟交互',
  },
  {
    label: 'ContentPageAnchor',
    value: '页面表头, 用anchor定位',
  },
  {
    label: 'TestPage',
    value: '一整个框架的页面',
  },
  {
    label: 'request',
    value: '自定义的axior',
  },
  {
    label: 'server',
    value: '自定义的后端',
  },
];

const App = () => {
  return (

    <div>
        <div style={{ height: '88px', }} />
        <Descriptions
            column={1}
            title='Web Info'
            data={data}
            style={{ marginBottom: 20 }}
            labelStyle={{ paddingRight: 36 }}
        />
    </div>
  );
};

export default App;
