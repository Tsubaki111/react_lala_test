import axios from "axios";
import { Notification } from '@arco-design/web-react';

let request = axios.create({
    baseURL : 'http://localhost:3001',
    timeout : 5000,
    responseType : "json"
})

request.interceptors.response.use((response) => {
    const code = response.data.code || 200;
    const message = response.data.message || "未知错误";
    console.log(response.data.message)
    if(code !== 200){
        Notification.error({
            closable: true,
            title: 'Error',
            content: message,
        });
        return Promise.reject(new Error(message));
    }
    Promise.resolve(response)
    return response.data
}, (error) => {
    const errorMessage = error.response.data.message;
    Notification.error({
        closable: true,
        title: 'Notification',
        content: JSON.stringify(errorMessage),
    });
    return Promise.reject(new Error(error));
});

export default request;
