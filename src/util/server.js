const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001; // 设置服务器端口号

const axios = require('axios');

app.use(cors());
app.use(express.json());

// 定义一个函数，根据 key 和 title 生成不同的数据
function generateData(key, title) {
    if (key === '1') {
        if (title === '推荐') {
            return [{
                src: 'https://img.ltwebstatic.com/images3_pi/2021/09/01/1630491559ad0d138a628c8511e2d3af1bbc1520e8_wk_shein_thumbnail_900x.webp',
                title: '毛衣'
            }];
        }
        else if (title === '热门') {
            return [{
                src: 'https://img.yousame.com/uploads/allimg/20221107/1-22110G6024X58.jpg',
                title: '卫衣'
            }];
        }
    }
    else if (key === '2') {
        if (title === '推荐') {
            return [{
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdKI8vHB-TsKSu99of2Y4y49C2DUyWoMNNsw&s',
                title: '国外文学'
            }];
        }
        else if (title === '热门') {
            return [];
        }
        else if (title === '文学经典') {
            return [{
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGGGmp3Q-O1EH-hIxr0Q88LYQbv_u5AHhFqw&s',
                title: '四大名著'
            }];
        }
    } 
    else if (key === '3') {
        if (title === '推荐') {
            return [{
                src: 'http://5b0988e595225.cdn.sohucs.com/images/20200511/54ad1f6142024eb9b97e3992f235bfcd.jpeg',
                title: '面食'
            }];
        }
        else if (title === '零食') {
            return [{
                src: 'https://robert-parker-michelin-hk-prod.s3.amazonaws.com/media/image/2017/09/25/d89314229207459c850e56e600a31bac_Flan.jpg',
                title: '甜点'
            },
            {
                src: 'https://www.pinktravel.net/wp-content/uploads/2021/03/2021032505501735.jpg',
                title: '国外进口'
            }];
        }
    } 
    else if (key === '4') {
        if (title === '推荐') {
            return [{
                src: 'https://img2.baidu.com/it/u=2562853434,3518708133&fm=253&fmt=auto&app=120&f=JPEG?w=888&h=500',
                title: '手机'
            },
            {
                src: 'https://www.biccamera.com.c.lj.hpcn.transer-cn.com/bc/include_cms_contents/topics/notebook/b202211.jpg',
                title: '电脑'
            },
            {
                src: 'https://imgservice.suning.cn/uimg1/b2c/image/qTjd7chltuLMDEadka81xw.jpg',
                title: '相机'
            }];
        }
        else if (title === '手机') {
            return [{
                src: 'https://img2.baidu.com/it/u=2562853434,3518708133&fm=253&fmt=auto&app=120&f=JPEG?w=888&h=500',
                title: '荣耀'
            }];
        }
        else if (title === '电脑') {
            return [{
                src: 'https://www.biccamera.com.c.lj.hpcn.transer-cn.com/bc/include_cms_contents/topics/notebook/b202211.jpg',
                title: 'MacBook'
            }];
        }
    } 
    else{
        return []
    }
}

let responseData = []
// 在 GET /getData 接口中调用生成数据的函数
app.get('/getData', (req, res) => {
    const { key, title } = req.query;
    console.log('Received request:', { key, title });
    if (key !== undefined && title !== undefined) {
        responseData = generateData(key, title);
        console.log(responseData)
    }
    else{
        res.status(400).send({ code: 400, message: '缺少参数' });
    }
    // 调用生成数据的函数

    // 返回生成的数据
    res.json(responseData)
});

// 启动服务器
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
