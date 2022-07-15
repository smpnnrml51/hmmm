//aynchronous fs module

const {readFile,writeFile}= require('fs')
console.log('start');
readFile('./folder/first.txt','utf-8',(err, result)=>{
    if(err)
    {
        console.log(err);
        return
    }
    const first=result;
    readFile('./folder/second.txt','utf-8',(err,result)=>{
        if(err)
        {
            console.log(err);
            return
        }
        const second=result;
        writeFile('./folder/result2.txt',
        `here is the result: ${first}, ${second}`
        ,(err,result)=>{
            if(err)
            {
                console.log(err);
                return;
            }
            console.log('done task');
        })
    })
        
})
console.log('starting next one');