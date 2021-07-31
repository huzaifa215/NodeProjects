const express=require('express');
const router = express.Router();
const path=require('path');
// get == send data to the web page

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"../template/index.html"));
});

module.exports=router;
