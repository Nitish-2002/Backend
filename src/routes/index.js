const {Express, Router}= require('express');
const route= Router();
route.post('/login',(req,res)=>{
    const {username,password}=req.body;

    console.log(username);
    console.log(password);
})
route.post('/signup',(req,res)=>{
    const {name,email,password}=req.body;

})
module.exports=route