const path=require('path')
console.log(path.sep);

const filePath= path.join('/folder/','subfolder','text.txt')
console.log(filePath);      //gives the normalized value

const base=path.basename(filePath);
console.log(base);

const absolute=path.resolve(__dirname,'folder','subfolder','text');
console.log(absolute);