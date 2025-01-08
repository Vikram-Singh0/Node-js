const fs=require('fs');


//using sync
fs.writeFileSync('./test.txt','This file was created by asynchronous write file')

//using async
fs.writeFile('./test2.txt','Hello ji from asyncronous write function',(err)=>{})

//read using synnc function
const read=fs.readFileSync('./test.txt',"utf-8")
console.log(read)

//read using async function
fs.readFile('./test2.txt','utf-8',(err,result)=>{
  if(err){
    cosnole.log("Error:",err)
  }
  else{
    console.log(result)
  }
})

// append using sync function
fs.appendFileSync('./test.txt',"  ||this is the appended text from sync function")

//append using async function


// fs.appendFile("./test2.txt","||this is the appended text from async function",(err)=>{
//   if(err){
//     console.log(err)
//   }


// },'utf-8')

//copying data
fs.cpSync("./test.txt","test2.txt")


//deleting files

// fs.unlinkSync("./random.txt")



//stats of an file
 console.log( fs.statSync('./test.txt'))