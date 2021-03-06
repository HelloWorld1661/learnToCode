# Node.js优缺点

Node.js采用了Google Chrome浏览器的V8引擎，性能很好，同时还提供了很多系统级的API，如文件操作、网络编程等。浏览器端的Javascript代码在运行时会受到各种安全性的限制，对客户系统的操作有限。相比之下，Node.js则是一个全面的后台运行时，为Javascript提供了其他语言能够实现的许多功能。nodeJs下载:  http://nodejs.org/#download服务端JavaScript

JavaScript最早是运行在浏览器中，然而浏览器只是提供了一个上下文，它定义了使用JavaScript可以做什么，但并没有“说”太多关于JavaScript语言本身可以做什么。事实上，JavaScript是一门“完整”的语言： 它可以使用在不同的上下文中，其能力与其他同类语言相比有过之而无不及。

Node.js事实上就是另外一种上下文，它允许在后端（脱离浏览器环境）运行JavaScript代码。

要实现在后台运行JavaScript代码，代码需要先被解释然后正确的执行。Node.js原理，它使用了Google的V8虚拟机（Google的Chrome浏览器使用的JavaScript执行环境），来解释和执行JavaScript代码。

除此之外，伴随着Node.js的还有许多有用的模块，它们可以简化很多重复的劳作，比如向终端输出字符串。

因此，Node.js事实上既是一个运行时环境，同时又是一个库。



### NodeJs优缺点，适用场合



Node.js采用事件驱动、异步编程，为网络服务而设计

nodeJs取舍特点：
     可靠性低
     高性能
     单线程
     异步事件驱动
    非阻塞式IO
    轻量高效

数据密集型分布式部署环境下的实时应用系统的完美解决方案。





### NodeJs性能测试

 

Node.js在设计上也是比较大胆，它以单进程、单线程模式运行（很吃惊，对吧？这和Javascript的运行方式一致），事件驱动机制是Node.js通过内部单线程高效率地维护事件循环队列来实现的，没有多线程的资源占用和上下文切换，这意味着面对大规模的http请求，Node.js凭借事件驱动搞定一切，习惯了传统语言的网络服务开发人员可能对多线程并发和协作非常熟悉，但是面对Node.js，我们需要接受和理解它的特点。由此我们是否可以推测出这样的设计会导致负载的压力集中在CPU（事件循环处理？）而不是内存（还记得Java虚拟机抛出OutOfMemory异常的日子吗？），眼见为实，不如来看看淘宝共享数据平台团队对Node.js的[性能测试](http://www.tbdata.org/archives/1285)：

- 物理机配置：RHEL 5.2、CPU 2.2GHz、内存4G
- Node.js应用场景：MemCache代理，每次取100字节数据
- 连接池大小：50
- 并发用户数：100
- 测试结果（socket模式）：内存（30M）、QPS（16700）、CPU（95%）
- 

#### 测试结论服务启动与空载资源占用


程序启动20秒后,系统资源占用达到稳定状态, 内存消耗13m, 堆尺寸8m
由堆使用变化可知v8每隔7~8秒会进行一次gc操作



#### 100并发100秒socket长连接压力


压力启动后内存占用迅速提高至30m, v8堆也基本维持在22m的水平, 使用率在20%到50%之间波动
此时v8的gc操作频率降低到约20秒一次.
qps曲线比较平稳,在16700左右波动,幅度在400左右,v8的gc操作对性能没有明显影响
压力过程中cpu占用基本维持在95%左右,处于满载状态.
另, 测试结束后20秒左右, 所占用资源被释放,内存与v8堆均回复至空载水平.



#### 250并发100秒http长连接压力


与socket相比, http消耗的系统资源约多出30%,且8v的gc操作也要更频繁
qps值为4392, gc操作对qps的影响也不明显
压力过程中cpu占用基本维持在95%左右,处于满载状态.
与socket时类似, 测试结束后20秒左右, 所占用资源被释放,内存与v8堆均回复至空载水平.

一些结论

性能:单cpu, socket 17000 qps, http 4400 qps, 内存消耗30~40m, cpu基本满载
用作中间层服务时,性能瓶颈基本应位于cpu运算性能.
v8引擎gc操作带来的性能影响已经可以基本忽略.
系统的健壮性不错,测试过程中qps与负载曲线基本都处于水平状态.且成功率均为100%
快速开发, 代理服务与压力工具总计开发时间3~4小时左右, 且最终性能与编译型语言差距不大,但开发时间节省很多
开发模式上与传统服务器端动态语言区别较大,不熟悉的开发人员需要一些上手时间.

另,由于时间因素,仅进行了单进程模式下的性能,使用web-worker模型的多进程模式下的性能没有进行测试
不过由单进程性能可以基本推断,在普通8核服务器下应能做到10万以上的socket, qps, 3万以上的http qps

总体来说, 非阻塞模式的io处理给nodejs带来在相对低系统资源耗用下的高性能与出众的负载能力, 非常适合用作依赖其它io资源的中间层服务.

从上面的结果，我们可以看到在这样的测试场景下，qps能够达到16700次，内存仅占用30M（其中V8堆占用22M），CPU则达到95%，可能成为瓶颈。此外，还有不少实践者对Node.js做了性能分析，总的来说，它的性能让人信服，也是受欢迎的重要原因。既然Node.js采用单进程、单线程模式，那么在如今多核硬件流行的环境中，单核性能出色的Node.js如何利用多核CPU呢？创始人Ryan Dahl建议，运行多个Node.js进程，利用某些通信机制来协调各项任务。目前，已经有不少第三方的Node.js多进程支持模块发布，专栏后面的文章会详细讲述Node.js在多核CPU下的编程。

Node.js的另一个特点是它支持的编程语言是Javascript。关于动态语言和静态语言的优缺点比较在这里不再展开讨论。只说三点：

1. Javascript作为前端工程师的主力语言，在技术社区中有相当的号召力。而且，随着Web技术的不断发展，特别是前端的重要性增加，不少前端工程师开始试水”后台应用“，在许多采用Node.js的企业中，工程师都表示因为习惯了Javascript，所以选择Node.js。

2. Javascript的匿名函数和闭包特性非常适合事件驱动、异步编程，从helloworld例子中我们可以看到回调函数采用了匿名函数的形式来实现，很方便。闭包的作用则更大，看下面的代码示例：var hostRequest = http.request(requestOptions,function(response) { var responseHTML =''; response.on('data', function (chunk) { responseHTML = responseHTML + chunk; }); response.on('end',function(){ console.log(responseHTML); // do something useful });});

   在上面的代码中，我们需要在end事件中处理responseHTML变量，由于Javascript的闭包特性，我们可以在两个回调函数之外定义responseHTML变量，然后在data事件对应的回调函数中不断修改其值，并最终在end事件中访问处理。

3. Javascript在动态语言中性能较好，有开发人员对Javacript、Python、Ruby等动态语言做了性能分析，发现Javascript的性能要好于其他语言，再加上V8引擎也是同类的佼佼者，所以Node.js的性能也受益其中。