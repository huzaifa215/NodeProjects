const express=require('express');    // import the module
const app =express();   // create an obj 
const path= require('path');
const port=process.env.PORT | 3000; // set the port to access 


//create a midleware to access the static folder
app.use(express.static(path.join(__dirname,"static")));
// to acces it mildware or the blogs class
app.use('/',require(path.join(__dirname,'routes/blog.js')));


app.listen(port,()=>{
    console.log(`https://localhost:${port}`);
});


