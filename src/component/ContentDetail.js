import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Card, Switch, Skeleton, Avatar, Link, Typography, Space } from '@arco-design/web-react';
import { Empty } from '@arco-design/web-react';
const { Meta } = Card;
function App(selectedKey, selectedTitle) {

    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([{
        title: 'title1',
        src:'//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp' 
    },
    {
        title: 'title2',
        src:'//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp' 
    }]);
    const timestamp = useSelector(state => state.timestamp.value);

    useEffect(() => {
        const returnJson = (selectedKey, selectedTitle) => {
            setLoading(true)
            //如何模拟交互！！！
            setLoading(false)
        };
        const cardContent = returnJson(selectedKey,selectedTitle);
        // setItems(cardContent);
      }, [selectedKey, selectedTitle, timestamp]);


    return (
        <>
            <Space align='start' size='large' wrap='true'>
                {!items && <div style={{height:'20vh', width:'100vh'}}><Empty /></div>}    
                {items && items.map((item) => (
                    <Card
                        style={{ width: 130 }}
                        cover={
                            <Skeleton
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                                loading={loading}
                                image={{
                                    style: {
                                        width: 100,
                                        height: 100,
                                        margin: '16px 16px 0 16px',
                                    },
                                }}
                            >
                                <div>
                                    <img
                                        style={{
                                            width: 100, height: 100,
                                            margin: '16px 16px 0 16px'
                                        }}
                                        src={item.src}
                                    />
                                </div>
                            </Skeleton>
                        }
                    >
                        <Meta
                            title={
                                <Skeleton
                                    loading={loading}
                                    style={{ marginTop: 0 }}
                                    text={{
                                        rows: 1,
                                        width: 72,
                                    }}
                                >
                                    {item.title}
                                </Skeleton>
                            }
                        />
                    </Card>
                ))}
            </Space>
        </>
    );
    // checked={!loading}
    // onChange={(checked) => setLoading(!checked)}
}

export default App;
