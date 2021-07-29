const fs=require('fs');
const http=require('http');

const port=process.env.PORT || 4000;

const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    console.log(req.url.port);
    if(req.url == '/'){
        res.statusCode=200;
        res.end("<h1>Hello Huzaifa</h1>");
    }
    else if(req.url == '/about'){
        res.statusCode=200;
        res.end("<h1>About Huzaifa</h1>");
    }
    else if(req.url == '/helo'){
        res.statusCode=200;
        const data=fs.readFileSync('index.html');
        res.end(data.toString());
    }
    else{
        res.statusCode=404;
        res.end('<h1>Page Not Found</h1>');
    }
});

console.log(server.listen(port,()=>{
    console.log(`srver is listening on ${port}`);
}));