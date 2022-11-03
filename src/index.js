import React from "react";
import { createRoot } from "react-dom/client";

import App from './App';
import { BrowserRouter } from 'react-router-dom';


import axios from 'axios';
import request from './service/request';
// import "antd/dist/antd.css";
import './App.less';
import 'antd/dist/antd.less';
import "./index.css";

// 7.默认配置
axios.defaults.baseURL = "https://httpbin.org";
axios.defaults.timeout = 5000;
axios.defaults.headers.common["token"] = "dafdafadfadfadfas";
axios.defaults.headers.post["Content-Type"] = "application/text";

request({
    url: "/get",
    params: {
        name: "why",
        age: 18
    }
}).then(console.log)



const root = createRoot(document.getElementById("root"));
root.render(<BrowserRouter>
    <App />
</BrowserRouter>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
