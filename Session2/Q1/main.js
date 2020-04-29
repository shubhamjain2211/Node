const http=require('http');
const url=require('url');
const users=require('./user_info');

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type': 'text/html'});
    let parseUrl=url.parse(req.url);
    let path=parseUrl.pathname;
    if (path==='/')
    {
        res.end("Please pass data in query and search for user.");
    }
    else if(path==='/users')
    {
        const queryParam=url.parse(req.url,true).query
        const user=users.search_user(queryParam.Username);
        res.end(JSON.stringify(user));
    }
})
server.listen(3000,()=>{
    console.log(`Server listening on port`, 3000);
});
