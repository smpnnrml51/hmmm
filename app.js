const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url=== '/'){
        res.end('welcome to our homepage');
    } 
    else if(req.url==='/about') {
        res.end('here is our about page');
    }
    else{
        res.end(`
        <h1>oops</h1>
        <p>this page does not exist</p>
        <a href="/">back home</a>
    `);
    }
})

server.listen(5000)