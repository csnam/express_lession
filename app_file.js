
var express = require('express');
var bodyParser = require('body-parser');  // // post 가능하게 해줌
var app = express(); // 객체를 만든다.//  간단한 수정
var fs = require('fs'); // file system 사용 
const hostname = '127.0.0.1';
const port = 3000;
app.locals.pretty = true;
app.set('views','./views_files');
app.set('view engine','jade');

app.use(bodyParser.urlencoded({ extended: false })) 
app.get('/topic/new',function(req,res){
    res.render('new');
});


app.post('/topic',function(req,res){
    var title = req.body.title;
    var description = req.body.description;
    fs.writeFile('data/'+ title+'.txt',description,function(err){
        if (err){
            console.log(err);
            res.status(500).send('Internal Server Error');// send  다음에는 실행되지 않는다.
        }
        res.send('Success ~~');
    });
    //res.send('hi post :' + req.body.title + req.body.description);
})
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




