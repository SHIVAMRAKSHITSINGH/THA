// fs module to implement CRUD.
var fs = require("fs");

fs.mkdirSync("DAY5");

fs.writeFileSync("DAY5/hemllo.txt","TOXIN");

fs.appendFileSync("DAY5/hemllo.txt"," is OP ! !");

console.log(fs.readFileSync("DAY5/hemllo.txt","utf-8"));// to read the content..

fs.renameSync("DAY5/hemllo.txt","DAY5/hemllo.txt");

// fs.unlinkSync("DAY5/hemllo.txt");//To delete the file

// fs.rmdirSync('DAY5');//To delete the folder..