const http= require('http');
const server= http.createServer((req,res)=>{
    const url= req.url;
    if(url === '/'){
        res.write("<h1>tets</h1>");
        return res.end();
    }
    res.write("<h1>Test 2</h1>")
    res.end();
})
server.listen(3000);