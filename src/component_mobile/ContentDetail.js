import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Space, Image } from 'antd-mobile'
import { Empty } from 'antd-mobile'
import request from '../util/request';

function App(props) {
    const { selectedKey, selectedTitle, calculatedWidth } = props;
    // console.log(selectedKey);
    // console.log(selectedTitle);

    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);
    const timestamp = useSelector(state => state.timestamp.value);


    useEffect(() => {
        const returnJson = (selectedKey, selectedTitle) => {
            setLoading(true)
            // console.log('key: '+selectedKey+',title: ' + selectedTitle)
            const url = `/getData?key=${selectedKey}&title=${selectedTitle}`;
            // console.log(url)
            request.get(url)
            .then(response => {
                // console.log(response)
                setItems(response);
            })
            .catch(error => {
              console.error('请求失败');
            });
            setLoading(false)
        };
        returnJson(selectedKey,selectedTitle);
        // setItems(cardContent);
      }, [selectedKey, selectedTitle, timestamp]);

      const width= calculatedWidth*3 + 50

    return (
        <>
            <div style={{width: width}}>
            <Space align='start' size='large' wrap='true'>
                {(!items || items.length===0) && <div style={{display: 'flex', justifyContent: 'center'}}>
                <           Empty description='暂无数据' />
                        </div>}    
                {items && items.length!==0 && items.map((item) => (
                    <>
                    <div style={{margin:'3px'}}>
                        <Image
                        src={item.src}
                        width={calculatedWidth}
                        height={calculatedWidth}
                        fit='cover'
                        style={{ borderRadius: 8 }}
                        />
                        <div style={{height:'10px'}}></div>
                        <div style={{display: 'flex', justifyContent: 'center', width:calculatedWidth, fontSize:'13px'}}>
                            {item.title}
                        </div>
                    </div>
                    </>
                ))}
            </Space>
            </div>
        </>
    );
}

export default App;
