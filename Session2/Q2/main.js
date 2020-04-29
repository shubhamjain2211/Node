const http=require('http');
const url=require('url');
const students=require('./student');

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type': 'text/html'});
    let parseUrl=url.parse(req.url);
    let path=parseUrl.pathname;
    if(path==='/students')
    {
        res.end(JSON.stringify(students));
    }
    else if(path==='/students/branch')
    {
        const queryParam=url.parse(req.url,true).query;
        const student=students.filterStudents(queryParam.branch);
        res.end(JSON.stringify(student));
    }
});
server.listen(4000,()=>{
    console.log(`Server listening on port`, 4000);
});