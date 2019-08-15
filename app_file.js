
var express = require('express');
var app = express(); // 객체를 만든다.//  간단한 수정
const hostname = '127.0.0.1';
const port = 3000;
//app.set('views','./views_files');
//app.set('view engine','jade');
app.get('/topic/new',function(req,res){
    res.send('hi');
});
app.listen(port,hostname,function(){
    console.log('connected 3000 port');
});


// http 예제 
/*
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/plain'});
    res.end('hello csnam');
}).listen(port,hostname,function(){
    console.log(`Server running at http://${hostname}:${port}`);
});
*/




