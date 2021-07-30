const express=require('express');
const path=require('path');
const app =express();
const port=3000;

app.get('/',(req,res)=>{
    req.statusCode=200;
    res.send("<h1>HElo World</h1>");
});

app.get('/about',(req,res)=>{
   // req.statusCode=200;
    res.sendFile(path.join(__dirname,'index.html'));
});


app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
});
 