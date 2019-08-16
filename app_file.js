
var express = require('express');
var bodyParser = require('body-parser');  // // post 가능하게 해줌
var app = express(); // 객체를 만든다.//  간단한 수정
var fs = require('fs'); // file system 사용 
const hostname = '127.0.0.1';
const port = 3000;
app.locals.pretty = true;
app.use(bodyParser.urlencoded({ extended: false })) 
app.set('views','./views_files');
app.set('view engine','jade');

app.get('/topic/new', function(req, res){
  fs.readdir('data', function(err, files){
    if(err){
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
    res.render('new', {topics:files});
  });
});



// 중복성 제거 
app.get(['/topic','/topic/:id'],function(req,res){ 
    fs.readdir('data',function(err,files){
        if(err){
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
        var id = req.params.id;
        if(id){
            // id값이 있을때 
            fs.readFile('data/'+ id,'utf-8',function(err,data){
                if (err){
                    console.log(err);
                    res.status(500).send("Read Error");
                }
                res.render('view',{topics:files,title:id,description:data});
            });
        }
        else{
            // id가 없을때 
            res.render('view',{topics:files,title:'Welcome',description:'hello java script...'}); 
        }
    })
 });

// app.get('/topic/:id',function(req,res){    // id를 읽어와서 처리
//     var id = req.params.id;
//     fs.readdir('data',function(err,files){
//         if(err){
//             console.log(err);
//             res.status(500).send('Internal Server Error');
//         }
//         fs.readFile('data/'+ id,'utf-8',function(err,data){
//             if (err){
//                 console.log(err);
//                 res.status(500).send("Read Error");
//             }
//             res.render('view',{topics:files,title:id,description:data});
//         });
//     });
    
// })
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




