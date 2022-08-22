const express= require('express');
const app= express();
app.get('/',(req,res)=>{
    req.token=10+'10';
    // console.log(req.token)
    res.send('hello word')
})
app.listen(3000)
console.log('the server is ready');