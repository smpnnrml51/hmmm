const http=require('http')
const server=http.createServer((req,res)=>{
    let urlParams = req.url.split('/');
    let alias = urlParams[1];
    console.log(urlParams);
    switch (alias) {
        case '':
            res.end('Welcome to our homepage');
            break;
        case 'about':
            res.end('Here is our about page');
            break;
        case 'service':
            res.end('Here is our Services Page');
            break;
        default:
            res.end(`
                <h1>oops</h1>
                <p>this page - ${alias} does not exist</p>
                <a href="/">back home</a>
            `);
            // res.end(alias);
            break;
    }

})

server.listen(5000)