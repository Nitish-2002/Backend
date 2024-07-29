// const express= require('express')
// const app= express();
// app.use((req,res,next)=>{
//     console.log("Welcome to express");
    
//     next();
// })
// app.use((req,res,next)=>{
//     console.log("Welome to node");
//     res.send('<h1>Hi How are you</h1>')
// })
// app.listen(3000);
const http= require('http');
const server=http.createServer((req,res)=>{
    console.log(req.url);
    res.setHeader("Content-Type","text/html");
    res.write("<h1>Test</h1>")
    res.end();
})
server.listen(80);
