// 1. 引入express
const express = require('express');

// 2. 创建应用对象
const app = express();

// 3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/server',(request,response)=>{
  
  // 设置响应头 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin','*');

  //设置响应
  response.send('Hello AJAX');
});

// 4. 监听端口，启动服务
app.listen(8080,()=>{
  console.log("服务已启动， 8800端口监听中...");
})