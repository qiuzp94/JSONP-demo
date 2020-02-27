# JSONP-demo
## 预览方法
### 第一步 克隆本项目到本地
    > git@github.com:qiuzp94/JSONP-demo.git
### 第二步 进入本地项目地址
### 第三步 指定客户端与服务端的端口
    > PORT=8001 node server.js
    > PORT=8002 node server.js
### 第四步 浏览器打开
    
## 知识点
### addEventListener
EventTarget.addEventListener()方法将指定的监听器注册到 EventTarget 上，当该对象触发指定的事件时，指定的回调函数就会被执行。 事件目标可以是一个文档上的元素 Element,Document和Window或者任何其他支持事件的对象 (比如 XMLHttpRequest)。

https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListeners

## 什么是JSONP
请求方：浏览器的前端程序员
响应方：服务器的后端程序员

请求方创建script,src指向响应方，同时传一个查询参数？callbackName=yyy
响应方根据查询参数callBackName,构造形如
1 yyy.call(undefined,'你要的数据')
2 yyy('你要的数据)
这样的响应
浏览器接受到响应，就会执行yyy.call(undefined,'你要的数据')
那么请求方就知道了他要的数据
这就是JSONP

## JSONP 为什么不支持 POST
因为JSONP是通过动态创建script实现
我们动态创建script时，只能用GET，没办法用POST