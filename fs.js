//create and overwrite file
var fs= require('fs');
/*fs.writeFile('Damini.txt', "testing Node js packae",function(err){
    if(err)throw err;
    console.log("file created")
})
//create and update
fs.appendFile('testCode.txt' , "this is line Number 1 \n", function(err){
    if(err) throw err
    console.log("file appended");
})
//read writeFile
/*fs.readFile('db.json', 'utf-8',function(err ,data){
 if(err)throw err;
 console.log(data);
})
//rename file
fs.rename('testCode.txt','vicky.txt',function(err){
if(err)throw err;
console.log("file renamed")
})*/
//delete file
fs.unlink('vicky.txt',function(err){
    if(err)throw err;
    console.log("file deleted");
})
