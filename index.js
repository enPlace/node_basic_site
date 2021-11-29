const http = require("http");
const fs = require("fs");
const url = require("url");
http.createServer(function(req,res){

    const path = url.parse(req.url,true);
    const filename = path.pathname !== '/'?`.${path.pathname}`:'./index.html';
    
    console.log(filename)
    fs.readFile(filename,function(error,data){
        if(error){
            // handles errors with file path
            fs.readFile('./404.html',(error,data)=>{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write(data);
                res.end();
            })
        }else{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            res.end();
        }
        
    })

}).listen(8000);
