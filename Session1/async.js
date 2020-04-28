// 2.Reading file asnychronously.

const fs=require("fs");
let content=fs.readFile('./async.txt','utf8',(err,content)=>{
    if(err)
    {
        console.log("Error Has Occured...",err);
    }
    else
    {
        console.log(content);
    }
});
console.log("<<This Console Log is at end>>");




