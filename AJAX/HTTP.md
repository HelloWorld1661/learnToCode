# HTTP

HTTP(hypertext transport protocol) 协议\[超文本传输协议]， 协议详细规定了浏览器和王维网服务器之间互相通信的规则。

(协议其实就是约定，规则。)

## 请求报文

重点是格式与参数

- 行 (POST /s?ie=utf-8 HTTP/1.1)
  - 请求类型 (GET/POST/...)
  - URL路径 (/s?ie=utf-8)
  - HTPP协议的版本 (HTTP/1.1)

- 头
  - Host： atguigu.com
  - Cookie: name=guigu
  - Content-type: application/x-www-form-urlencoded
  - User-Agent: chrome 83
  - ...

- 空行

- 体(username=admin&password=admin)

## 响应报文

- 行 (HTTP/1.1 200 OK)
  - HTPP协议的版本 (HTTP/1.1)
  - 响应状态码 (200)
  - 响应状态字符串 (OK)

- 头
  - Context-Type: text/html;charset=utf-8
  - Content-length: 2048
  - Content-encoding: gzip
  - ...

- 空行

- 体

```html
  <html>
  <head>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
  </html>
```
  
