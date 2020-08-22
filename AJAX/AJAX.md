# AJAX

## 原生 AJAX

### AJAX 简介

AJAX 全称为 Asynchronous JavaScript And XML, 就是异步 JS 和 XML。
通过 AJAX 可以在浏览器中向服务器发送异步请求，最打的优势：**无刷新获取数据**。
AJAX 不是新的编程语言，而是一种将现有的标准组合在一起使用的新方式。

### XML 简介

- **XML 可扩展标记语言。**

- **XML 被设计用来传输和存储数据。**

- **XML 和 HTML 类似， 不同的是 HTML 中都是预定标签，而 XML 中没有预定义标签，全都是自定义标签，用来表示一些数据。**

> 比如说我有一个学生数据：
>> name = "孙悟空"; age=18; gender="男";
>>> 用 XML 表示:
>>>> \<student>
>>>> \<name>孙悟空\</name>
>>>> \<age>18\</age>
>>>> \<gender>男\</gender>
>>>> \</student>

现在已经被JSON取代

> 用JSON表示：
>> {"name":"孙悟空","age":"18","gender":"男"}

### AJAX的特点

#### AJAX的优点

1. 可以无需刷新页面与服务器端进行通信。
2. 允许你根据事件来更新部分页面内容。

#### AJAX的缺点

1. 没有浏览历史，不能回退
2. 存在跨域问题(同源)
3. SEO不友好

### AJAX的使用



