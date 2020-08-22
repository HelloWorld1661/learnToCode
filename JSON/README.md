

# JSON教程

**学习缘起：**从Web API和服务端编程语言到NoSQL数据库和客户端框架，都有JSON的身影。在不同平台间传递数据方面，JSON已成为XML强有力的替代者。本教程将帮助初学者快速学习JSON，并且深入理解如何将其用在自己的项目中。

​	

**学习始于：**2020-06-01

**资料来源：**  https://www.runoob.com/json/json-tutorial.html

​					  https://www.w3cschool.cn/json

**相关网址：**

​					json中文官网：http://www.json.org/json-zh.html

​					json官网：http://www.json.org/

​					json参考手册：[(译) JSON-RPC 2.0 规范(中文版)](https://www.w3cschool.cn/ycuott)

---



## 认识JSON：

​	**JSON：JavaScript 对象表示法（JavaScript Object Notation）。 JSON 是存储和交换文本信息的语法。**类似 XML。 JSON 比 XML 更小、更快，更易解析。它基于ECMAScript的一个子集。 JSON采用完全独立于语言的文本格式，但是也使用了类似于C语言家族的习惯（包括C、C++、C#、Java、JavaScript、Perl、Python等）。这些特性使JSON成为理想的数据交换语言。 易于人阅读和编写，同时也易于机器解析和生成(一般用于提升网络传输速率)。

---



## JSON的发展及学习前的准备：

JSON是在2001年，由Douglas Crockford创建的，并且被IETF(Internet Engineering Task Force)定义为RFC 4627标准。JSON的媒体类型被定义为 application/json，而文件的后缀为.json。在2005年-2006年正式成为主流的数据格式，雅虎和谷歌就在那时候开始广泛地使用JSON格式。

---



## JSON的优缺点：

**优点：**

- **A.** 数据格式比较简单，易于读写，格式都是压缩的，占用带宽小；

- **B.** 易于解析，客户端JavaScript可以简单的通过eval()进行JSON数据的读取；　　

- **C.** 支持多种语言，包括ActionScript, C, C#, ColdFusion, Java, JavaScript, Perl, PHP, Python, Ruby等服务器端语言，便于服务器端的解析；　　

- **D.** 在PHP世界，已经有PHP-JSON和JSON-PHP出现了，偏于PHP序列化后的程序直接调用，PHP服务器端的对象、数组等能直接生成JSON格式，便于客户端的访问提取；　　

- **E.** 因为JSON格式能直接为服务器端代码使用，大大简化了服务器端和客户端的代码开发量，且完成任务不变，并且易于维护。



**缺点：**

- **A.** 没有XML格式这么推广的深入人心和喜用广泛，没有XML那么通用性；　　

- **B.** JSON格式目前在Web Service中推广还属于初级阶段。

---



## JSON 语法

### JSON 语法规则

JSON 语法是 JavaScript 对象表示语法的子集。

- 数据在名称/值对中
- 数据由逗号分隔
- 大括号保存对象
- 中括号保存数组

------

### JSON 名称/值对

JSON 数据的书写格式是：名称/值对。

名称/值对包括字段名称（在双引号中），后面写一个冒号，然后是值：

"name" : "菜鸟教程"

这很容易理解，等价于这条 JavaScript 语句：

name = "菜鸟教程"

------

### JSON 值

JSON 值可以是：

- 数字（整数或浮点数）
- 字符串（在双引号中）
- 逻辑值（true 或 false）
- 数组（在中括号中）
- 对象（在大括号中）
- null

------

### JSON 数字

JSON 数字可以是整型或者浮点型：

```json
{ "age":30 }
```



------

### JSON 对象

JSON 对象在大括号（{}）中书写：

对象可以包含多个名称/值对：

```json
{ "name":"菜鸟教程" , "url":"www.runoob.com" }
```

这一点也容易理解，与这条 JavaScript 语句等价：

```js
name = "菜鸟教程" url = "www.runoob.com"
```



------

### JSON 数组

JSON 数组在中括号中书写：

数组可包含多个对象：

```json
{ 
  "sites": [ 
    { "name":"菜鸟教程" , "url":"www.runoob.com" },  
    { "name":"google" , "url":"www.google.com" },  
    { "name":"微博" , "url":"www.weibo.com" } 
  ] 
}
```

在上面的例子中，对象 "sites" 是包含三个对象的数组。每个对象代表一条关于某个网站（name、url）的记录。

------

### JSON 布尔值

JSON 布尔值可以是 true 或者 false：

```json
{ "flag":true }
```



------

### JSON null

JSON 可以设置 null 值：

```json
{ "runoob":null }
```



------

### JSON 使用 JavaScript 语法

因为 JSON 使用 JavaScript 语法，所以无需额外的软件就能处理 JavaScript 中的 JSON。

通过 JavaScript，您可以创建一个对象数组，并像这样进行赋值：

### 实例

```js
var sites = [    
  { "name":"runoob" , "url":"www.runoob.com" },     
  { "name":"google" , "url":"www.google.com" },     
  { "name":"微博" , "url":"www.weibo.com" } 
];
```

可以像这样访问 JavaScript 对象数组中的第一项（索引从 0 开始）：

```js
sites[0].name;
```

返回的内容是：

```
runoob
```

可以像这样修改数据：

```js
sites[0].name="菜鸟教程";
```


[尝试一下 »](https://www.runoob.com/try/try.php?filename=tryjson_objectarray)

 

在下面的章节，您将学到如何把 JSON 文本转换为 JavaScript 对象。

------

### JSON 文件

- JSON 文件的文件类型是 ".json"
- JSON 文本的 MIME 类型是 "application/json"

---



## JSON.parse()

​	**JSON 通常用于与服务端交换数据。**

​	**在接收服务器数据时一般是字符串。**

​	**我们可以使用 JSON.parse() 方法将数据转换为 JavaScript 对象。**

### 语法

```js
JSON.parse(text[, reviver])
```

**参数说明：**

- **text:**必需， 一个有效的 JSON 字符串。
- **reviver:** 可选，一个转换结果的函数， 将为对象的每个成员调用此函数。

------

### JSON 解析实例

例如我们从服务器接收了以下数据：

```json
{ "name":"runoob", "alexa":10000, "site":"www.runoob.com" }
```

我们使用 JSON.parse() 方法处理以上数据，将其转换为 JavaScript 对象：

```js
var obj = JSON.parse('{ "name":"runoob", "alexa":10000, "site":"www.runoob.com" }');
```



> 解析前要确保你的数据是标准的 JSON 格式，否则会解析出错。
>
> 你可以使用我们的在线工具检测：https://c.runoob.com/front-end/53。

解析完成后，我们就可以在网页上使用 JSON 数据了：

#### 实例

```html
<p id="demo"></p>   
<script> 
  var obj = JSON.parse('{ "name":"runoob", "alexa":10000, "site":"www.runoob.com" }'); 		
  document.getElementById("demo").innerHTML = obj.name + "：" + obj.site; 
</script>
```

**输出结果：**

```
runoob:  www.runoob.com
```

[尝试一下 »](https://www.runoob.com/try/try.php?filename=tryjson_parse3)

------



### 从服务端接收 JSON 数据

#### 实例

```js
var xmlhttp = new XMLHttpRequest(); 
xmlhttp.onreadystatechange = function() {    
  if (this.readyState == 4 && this.status == 200) {        
    myObj = JSON.parse(this.responseText);        	
    document.getElementById("demo").innerHTML = myObj.name;    
  } 
}; 
xmlhttp.open("GET", "/try/ajax/json_demo.txt", true); 
xmlhttp.send();
```

[尝试一下 »](https://www.runoob.com/try/try.php?filename=tryjson_ajax)



##### xmlhttp

从服务端接收 JSON 数据, 我们可以使用 AJAX 从服务器请求 JSON 数据，并解析为 JavaScript 对象。

**xmlhttp: [AJAX - 向服务器发送请求请求](https://www.runoob.com/ajax/ajax-xmlhttprequest-send.html)**

​	**XMLHttpRequest 对象用于和服务器交换数据。**

**向服务器发送请求**

如需将请求发送到服务器，我们使用 XMLHttpRequest 对象的 open() 和 send() 方法：

```js
xmlhttp.open("GET","ajax_info.txt",true);
xmlhttp.send();
```

| 方法                         | 描述                                                         |
| :--------------------------- | :----------------------------------------------------------- |
| open(*method*,*url*,*async*) | 规定请求的类型、URL 以及是否异步处理请求。**method**：请求的类型；GET 或 POST; ***url***：文件在服务器上的位置; ***async***：true（异步）或 false（同步） |
| send(*string*)               | 将请求发送到服务器。 ***string***：仅用于 POST 请求          |



##### readyState :

​	[**定义和用法:**](https://www.runoob.com/jsref/dom-obj-all.html)

​		readyState 属性返回当前文档的状态（载入中……）。

​	**该属性返回以下值:**

- uninitialized - 还未开始载入
- loading - 载入中
- interactive - 已加载，文档与用户可以开始交互
- complete - 载入完成

**语法**

```js
document.readyState
```



##### status:

​	[Window status 属性](https://www.runoob.com/jsref/prop-win-status.html)

​	**定义和用法**

​		status 属性可设置或返回窗口状态栏中的文本。

​	**语法**

```JS
window.status
```



#### onreadystatechange 事件

https://www.runoob.com/ajax/ajax-xmlhttprequest-onreadystatechange.html

当请求被发送到服务器时，我们需要执行一些基于响应的任务。

每当 readyState 改变时，就会触发 onreadystatechange 事件。

readyState 属性存有 XMLHttpRequest 的状态信息。

下面是 XMLHttpRequest 对象的三个重要的属性：

| 属性               | 描述                                                         |
| :----------------- | :----------------------------------------------------------- |
| onreadystatechange | 存储函数（或函数名），每当 readyState 属性改变时，就会调用该函数。 |
| readyState         | 存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。0: 请求未初始化1: 服务器连接已建立2: 请求已接收3: 请求处理中4: 请求已完成，且响应已就绪 |
| status             | 200: "OK" 404: 未找到页面                                    |

在 onreadystatechange 事件中，我们规定当服务器响应已做好被处理的准备时所执行的任务。

当 readyState 等于 4 且状态为 200 时，表示响应已就绪：

---

> 服务器常用的状态码及其对应的含义如下：
>
> -  **200**：服务器响应正常。
> -  **304**：该资源在上次请求之后没有任何修改（这通常用于浏览器的缓存机制，使用GET请求时尤其需要注意）。
> -  **400**：无法找到请求的资源。
> -  **401**：访问资源的权限不够。
> -  **403**：没有权限访问资源。
> -  **404**：需要访问的资源不存在。
> -  **405**：需要访问的资源被禁止。
> -  **407**：访问的资源需要代理身份验证。
> -  **414**：请求的URL太长。
> -  **500**：服务器内部错误。
>
> 100——客户必须继续发出请求
>
> 101——客户要求服务器根据请求转换HTTP协议版本
>
> 200——交易成功
>
> 201——提示知道新文件的URL
>
> 202——接受和处理、但处理未完成
>
> 203——返回信息不确定或不完整
>
> 204——请求收到，但返回信息为空
>
> 205——服务器完成了请求，用户代理必须复位当前已经浏览过的文件
>
> 206——服务器已经完成了部分用户的GET请求
>
> 300——请求的资源可在多处得到
>
> 301——删除请求数据
>
> 302——在其他地址发现了请求数据
>
> 303——建议客户访问其他URL或访问方式
>
> 304——客户端已经执行了GET，但文件未变化
>
> 305——请求的资源必须从服务器指定的地址得到
>
> 306——前一版本HTTP中使用的代码，现行版本中不再使用
>
> 307——申明请求的资源临时性删除
>
> 400——错误请求，如语法错误
>
> 401——请求授权失败
>
> 402——保留有效ChargeTo头响应
>
> 403——请求不允许
>
> 404——没有发现文件、查询或URl
>
> 405——用户在Request-Line字段定义的方法不允许
>
> 406——根据用户发送的Accept拖，请求资源不可访问
>
> 407——类似401，用户必须首先在代理服务器上得到授权
>
> 408——客户端没有在用户指定的时间内完成请求
>
> 409——对当前资源状态，请求不能完成
>
> 410——服务器上不再有此资源且无进一步的参考地址
>
> 411——服务器拒绝用户定义的Content-Length属性请求
>
> 412——一个或多个请求头字段在当前请求中错误
>
> 413——请求的资源大于服务器允许的大小
>
> 414——请求的资源URL长于服务器允许的长度
>
> 415——请求资源不支持请求项目格式
>
> 416——请求中包含Range请求头字段，在当前请求资源范围内没有range指示值，请求也不包含If-Range请求头字段
>
> 417——服务器不满足请求Expect头字段指定的期望值，如果是代理服务器，可能是下一级服务器不能满足请求
>
> 500——服务器产生内部错误
>
> 501——服务器不支持请求的函数
>
> 502——服务器暂时不可用，有时是为了防止发生系统过载
>
> 503——服务器过载或暂停维修
>
> 504——关口过载，服务器使用另一个关口或服务来响应用户，等待时间设定值较长
>
> 505——服务器不支持或拒绝支请求头中指定的HTTP版本



---



------



### 从服务端接收数组的 JSON 数据

如果从服务端接收的是数组的 JSON 数据，则 JSON.parse 会将其转换为 JavaScript 数组：

#### 实例

```js
var xmlhttp = new XMLHttpRequest(); 
xmlhttp.onreadystatechange = function() {    
  if (this.readyState == 4 && this.status == 200) {        
    myArr = JSON.parse(this.responseText);        
    document.getElementById("demo").innerHTML = myArr[1];    
  } 
}; 
xmlhttp.open("GET", "/try/ajax/json_demo_array.txt", true); 
xmlhttp.send();
```

[尝试一下 »](https://www.runoob.com/try/try.php?filename=tryjson_ajax_array)

------



### 异常

#### 解析数据

​	JSON 不能存储 Date 对象。

​	如果你需要存储 Date 对象，需要将其转换为字符串。

​	之后再将字符串转换为 Date 对象。

#### 实例

```JS
var text = '{ "name":"Runoob", "initDate":"2013-12-14", "site":"www.runoob.com"}'; 
var obj = JSON.parse(text);
obj.initDate = new Date(obj.initDate);  

document.getElementById("demo").innerHTML = obj.name + "创建日期: " + obj.initDate;
```

[尝试一下 »](https://www.runoob.com/try/try.php?filename=tryjson_parse_date)



我们可以启用 JSON.parse 的第二个参数 reviver，一个转换结果的函数，对象的每个成员调用此函数。

#### 实例

```JS
var text = '{ "name":"Runoob", "initDate":"2013-12-14", "site":"www.runoob.com"}'; 
var obj = JSON.parse(text, function (key, value) {    
  if (key == "initDate") {        
    return new Date(value);    
  } else {        
      return value; 
  }});  
document.getElementById("demo").innerHTML = obj.name + "创建日期：" + obj.initDate;
```

[尝试一下 »](https://www.runoob.com/try/try.php?filename=tryjson_parse_reviver)

------



### 解析函数

​	JSON 不允许包含函数，但你可以将函数作为字符串存储，之后再将字符串转换为函数。

#### 实例

```JS
var text = '{ "name":"Runoob", "alexa":"function () {return 10000;}", "site":"www.runoob.com"}'; 
var obj = JSON.parse(text); 
obj.alexa = eval("(" + obj.alexa + ")"); 

document.getElementById("demo").innerHTML = obj.name + " Alexa 排名：" + obj.alexa();
```


[尝试一下 »](https://www.runoob.com/try/try.php?filename=tryjson_parse_function)

不建议在 JSON 中使用函数。

---



## JSON.stringify()

​	JSON 通常用于与服务端交换数据。

​	在向服务器发送数据时一般是字符串。

​	我们可以使用 JSON.stringify() 方法将 JavaScript 对象转换为字符串。

### 语法

```
JSON.stringify(value[, replacer[, space]])
```

**参数说明：**

- **value:**

  必需， 要转换的 JavaScript 值（通常为对象或数组）。

- **replacer:**

  可选。用于转换结果的函数或数组。

  如果 replacer 为函数，则 JSON.stringify 将调用该函数，并传入每个成员的键和值。使用返回值而不是原始值。如果此函数返回 undefined，则排除成员。根对象的键是一个空字符串：""。

  如果 replacer 是一个数组，则仅转换该数组中具有键值的成员。成员的转换顺序与键在数组中的顺序一样。当 value 参数也为数组时，将忽略 replacer 数组。

- **space:**

  可选，文本添加缩进、空格和换行符，如果 space 是一个数字，则返回值文本在每个级别缩进指定数目的空格，如果 space 大于 10，则文本缩进 10 个空格。space 也可以使用非数字，如：\t。

------



### JavaScript 对象转换

例如我们向服务器发送以下数据：

```JS
var obj = { "name":"runoob", "alexa":10000, "site":"www.runoob.com"};
```

我们使用 JSON.stringify() 方法处理以上数据，将其转换为字符串：

```JS
var myJSON = JSON.stringify(obj);
```

myJSON 为字符串。

我们可以将 myJSON 发送到服务器：

#### 实例

```JS
var obj = { "name":"runoob", "alexa":10000, "site":"www.runoob.com"}; 
var myJSON = JSON.stringify(obj); 
document.getElementById("demo").innerHTML = myJSON;
```


[尝试一下 »](https://www.runoob.com/try/try.php?filename=tryjson_stringify1)

------



### JavaScript 数组转换

我们也可以将 JavaScript 数组转换为 JSON 字符串：

#### 实例

```JS
var arr = [ "Google", "Runoob", "Taobao", "Facebook" ]; 
var myJSON = JSON.stringify(arr);
document.getElementById("demo").innerHTML = myJSON;
```

myJSON 为字符串。

我们可以将 myJSON 发送到服务器：

------



### 异常

#### 解析数据

JSON 不能存储 Date 对象。

JSON.stringify() 会将所有日期转换为字符串。

#### 实例

```js
var obj = { "name":"Runoob", "initDate":new Date(), "site":"www.runoob.com"}; 
var myJSON = JSON.stringify(obj); 
document.getElementById("demo").innerHTML = myJSON;
```


[尝试一下 »](https://www.runoob.com/try/try.php?filename=tryjson_stringify_date)

之后你可以再将字符串转换为 Date 对象。

------

### 解析函数

JSON 不允许包含函数，JSON.stringify() 会删除 JavaScript 对象的函数，包括 key 和 value。

#### 实例

```js
var obj = { "name":"Runoob", "alexa":function () {return 10000;}, "site":"www.runoob.com"}; 
var myJSON = JSON.stringify(obj);  

document.getElementById("demo").innerHTML = myJSON;
```


[尝试一下 »](https://www.runoob.com/try/try.php?filename=tryjson_stringify_function)

我们可以在执行 JSON.stringify() 函数前将函数转换为字符串来避免以上问题的发生：

#### 实例

```js
var obj = { "name":"Runoob", "alexa":function () {return 10000;}, "site":"www.runoob.com"}; obj.alexa = obj.alexa.toString(); var myJSON = JSON.stringify(obj);  document.getElementById("demo").innerHTML = myJSON;
```


[尝试一下 »](https://www.runoob.com/try/try.php?filename=tryjson_stringify_function_tostring)

不建议在 JSON 中使用函数。

---



## JSON 使用

### 把 JSON 文本转换为 JavaScript 对象

​	JSON 最常见的用法之一，是从 web 服务器上读取 JSON 数据（作为文件或作为 HttpRequest），将 JSON 数据转换为 JavaScript 对象，然后在网页中使用该数据。

为了更简单地为您讲解，我们使用字符串作为输入进行演示（而不是文件）。

------

### JSON 实例 - 来自字符串的对象

创建包含 JSON 语法的 JavaScript 字符串：

```js
var txt = '{ "sites" : [' + 
    '{ "name":"菜鸟教程" , "url":"www.runoob.com" },' + 
    '{ "name":"google" , "url":"www.google.com" },' + 
    '{ "name":"微博" , "url":"www.weibo.com" } ]}';
```

由于 JSON 语法是 JavaScript 语法的子集，**JavaScript 函数 eval() 可用于将 JSON 文本转换为 JavaScript 对象。**

**eval()** 函数使用的是 JavaScript 编译器，可解析 JSON 文本，然后生成 JavaScript 对象。必须把文本包围在括号中，这样才能避免语法错误：

var obj = eval ("(" + txt + ")");

在网页中使用 JavaScript 对象：

#### 实例

```js
var txt = '{ "sites" : [' + 
    '{ "name":"菜鸟教程" , "url":"www.runoob.com" },' + 
    '{ "name":"google" , "url":"www.google.com" },' + 
    '{ "name":"微博" , "url":"www.weibo.com" } ]}';  

var obj = eval ("(" + txt + ")");  

document.getElementById("name").innerHTML=obj.sites[0].name  document.getElementById("url").innerHTML=obj.sites[0].url
```


[尝试一下 »](https://www.runoob.com/try/try.php?filename=tryjson_eval)



### JSON 解析器

![lamp](https://www.runoob.com/images/lamp2.gif) **eval() 函数可编译并执行任何 JavaScript 代码。这隐藏了一个潜在的安全问题。**

使用 JSON 解析器将 JSON 转换为 JavaScript 对象是更安全的做法。JSON 解析器只能识别 JSON 文本，而不会编译脚本。

在浏览器中，这提供了原生的 JSON 支持，而且 JSON 解析器的速度更快。

---



## JSONP 教程

本章节我们将向大家介绍 JSONP 的知识。

Jsonp(JSON with Padding) 是 json 的一种"使用模式"，可以让网页从别的域名（网站）那获取资料，即跨域读取数据。

为什么我们从不同的域（网站）访问数据需要一个特殊的技术( JSONP )呢？这是因为同源策略。

同源策略，它是由 Netscape 提出的一个著名的安全策略，现在所有支持 JavaScript 的浏览器都会使用这个策略。



### JSONP 应用

1. **服务端 JSONP 格式数据**

   如客户想访问 : https://www.runoob.com/try/ajax/jsonp.php?jsoncallback=callbackFunction。

   假设客户期望返回数据：["customername1","customername2"]。

   真正返回到客户端的数据显示为: callbackFunction(["customername1","customername2"])。



服务端文件 jsonp.php 代码为：

```php
jsonp.php 文件代码
<?php
header('Content-type: application/json');
//获取回调函数名
$jsoncallback = htmlspecialchars($_REQUEST ['jsoncallback']);
//json数据
$json_data = '["customername1","customername2"]';
//输出jsonp格式的数据
echo $jsoncallback . "(" . $json_data . ")";
?>
```



2. **客户端实现 callbackFunction 函数**
```html
<script type="text/javascript">
function callbackFunction(result, methodName)
{
    var html = '<ul>';
    for(var i = 0; i < result.length; i++)
    {
        html += '<li>' + result[i] + '</li>';
    }
    html += '</ul>';
    document.getElementById('divCustomers').innerHTML = html;
}
</script>
```



**页面展示**

```html
<div id="divCustomers"></div>
```



**客户端页面完整代码**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>JSONP 实例</title>
</head>
<body>
<div id="divCustomers"></div>
<script type="text/javascript">
function callbackFunction(result, methodName)
{
    var html = '<ul>';
    for(var i = 0; i < result.length; i++)
    {
        html += '<li>' + result[i] + '</li>';
    }
    html += '</ul>';
    document.getElementById('divCustomers').innerHTML = html;
}
</script>
<script type="text/javascript" src="https://www.runoob.com/try/ajax/jsonp.php?jsoncallback=callbackFunction"></script>
</body>
</html>
```



**jQuery 使用 JSONP**

以上代码可以使用 jQuery 代码实例：

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>JSONP 实例</title>
    <script src="https://cdn.static.runoob.com/libs/jquery/1.8.3/jquery.js"></script>    
</head>
<body>
<div id="divCustomers"></div>
<script>
$.getJSON("https://www.runoob.com/try/ajax/jsonp.php?jsoncallback=?", function(data) {
    
    var html = '<ul>';
    for(var i = 0; i < data.length; i++)
    {
        html += '<li>' + data[i] + '</li>';
    }
    html += '</ul>';
    
    $('#divCustomers').html(html); 
});
</script>
</body>
</html>
```

