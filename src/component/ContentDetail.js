import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Card, Skeleton, Space } from '@arco-design/web-react';
import { Empty } from '@arco-design/web-react';
import request from '../util/request';

const { Meta } = Card;
function App(props) {
    const { selectedKey, selectedTitle } = props;
    console.log(selectedKey);
    console.log(selectedTitle);

    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);
    const timestamp = useSelector(state => state.timestamp.value);

    useEffect(() => {
        const returnJson = (selectedKey, selectedTitle) => {
            setLoading(true)
            // console.log('key: '+selectedKey+',title: ' + selectedTitle)
            const url = `/getData?key=${selectedKey}&title=${selectedTitle}`;
            console.log(url)
            request.get(url)
            .then(response => {
                console.log(response)
                setItems(response);
            })
            .catch(error => {
              console.error('请求失败:', error);
            });
            setLoading(false)
        };
        returnJson(selectedKey,selectedTitle);
        // setItems(cardContent);
      }, [selectedKey, selectedTitle, timestamp]);


    return (
        <>
            <Space align='start' size='large' wrap='true'>
                {console.log(items)}
                {(!items || items.length===0) && <div style={{height:'20vh', width:'100vh'}}><Empty /></div>}    
                {items && items.length!==0 && items.map((item) => (
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
