var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.env.PORT || 8888;

var server = http.createServer(function (request, response) {
    var temp = url.parse(request.url, true)
    var path = temp.pathname
    var query = temp.query
    var method = request.method



    //从这里开始看，上面不要看

    if (path === '/') {
        var string = fs.readFileSync('./index.html', 'utf8')
        var amount = fs.readFileSync('./db', 'utf8')
        string = string.replace('&&&amount&&&', amount)
        response.setHeader('Content-Type', 'text/html;charset-utf-8')
        response.end(string)
    } else if (path === '/style.css') {
        var string = fs.readFileSync('./style.css')
        response.setHeader('Content-Type', 'text/css')
        response.end(string)
    } else if (path === '/main.js') {
        var string = fs.readFileSync('./main.js')
        response.setHeader('Content-Type', 'applicatian/javascript')
        response.end(string)
    } else if (path === '/pay') {
        var amount = fs.readFileSync('./db', 'utf-8')
        var newAmount = amount - 1
        fs.writeFileSync('./db', newAmount)
        response.end(
            `${query.callback}.call(undefined,'success')`
        )
    } else {
        response.statusCode = 404
        response.setHeader('Content-Type', 'text/html;charset-utf-8')
        response.end('找不到相应的路径，请您自行设置index.html')
    }



    //代码结束，下面不要看
    console.log(method + '' + request.url)

})
server.listen(port)
console.log('监听' + port + '成功，请打开 http://localhost:' + port)