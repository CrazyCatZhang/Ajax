//1.引入express
const express = require('express');

//2.创建应用对象
const app = express();

//3.创建路由规则
app.get('/server', (req, res) => {
    //设置响应头 设置允许跨域
    res.setHeader("Access-Control-Allow-Origin", "*");
    //设置响应体
    res.send("Hello Ajax");
});

app.all('/server', (req, res) => {
    //设置响应头 设置允许跨域
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Headers', '*');
    //设置响应体
    res.send("Hello Ajax Post");
});

app.all('/json-server', (req, res) => {
    //设置响应头 设置允许跨域
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Headers', '*');

    const data = {
        name: 'CatZhang'
    }
    let str = JSON.stringify(data);
    //设置响应体
    res.send(str);
});

app.get('/timeout', (req, res) => {
    //设置响应头 设置允许跨域
    res.setHeader("Access-Control-Allow-Origin", "*");
    //设置响应体
    setTimeout(() => {
        res.send("Time Out");
    }, 3000);
});

app.all('/jquery-server', (req, res) => {
    //设置响应头 设置允许跨域
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Headers', '*');
    //设置响应体
    // res.send("Hello jQuery Ajax");
    let data = {
        name: 'CatZhang'
    };
    res.send(JSON.stringify(data));
});

app.all('/axios-server', (req, res) => {
    //设置响应头 设置允许跨域
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Headers', '*');
    //设置响应体
    // res.send("Hello jQuery Ajax");
    let data = {
        name: 'CatZhang'
    };
    res.send(JSON.stringify(data));
});

app.all('/check-username', (req, res) => {
    const data = {
        exists: 1,
        msg: '用户名已经存在'
    };
    let str = JSON.stringify(data);
    res.end(`handle(${str})`);
});

app.all('/jquery-jsonp-server', (req, res) => {
    const data = {
        name: 'CatZhang',
        sex: 'Man'
    };
    let str = JSON.stringify(data);
    let cb = req.query.callback;
    res.end(`${cb}(${str})`);
});

//4.监听端口启动服务
app.listen(8000, () => {
    console.log("服务已经启动，8000端口监听中.....");
});