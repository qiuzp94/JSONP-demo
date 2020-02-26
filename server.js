var http = require('http')

var fs = require('fs')
var url = require('url')
var port = process.env.PORT || 8888;
var server = http.createServer(function (require, response) {
    var temp = url.parse(require.url, true)
    var path = temp.pathname
    var query = temp.query
    var method = require.mothod


    //从这里开始看，上面不要看
    

    //代码结束，下面不要看
    console.log(method + '' + require.url)

})
server.listen(port)
console.log('监听' + port + '成功，请打开 http://localhost:' + port)