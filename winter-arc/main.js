const fs = require("fs");
// function readFromAWriteToB(filePath, encoding) {
//   fs.readFile(filePath, encoding,(err, data) =>{
//     if(err){
//       console.log(errr)
//     }else{
//       fs.writeFile(filePath, data.toUpperCase(), (err) =>{
//         if(err){
//           console.log(err)
//         }
//       })
//     }
//   })
// }

// readFromAWriteToB("a.txt", "utf-8",(err, data) =>{
//   if(err){
//     console.log(err)
//   }else{
//     console.log("done")
//   }
// });

// function readTimer(n,m, path, cb) {
//   fs.readFile(path, "utf8", (err, data) =>{
//     if(err){
//       cb("")
//     }else{
//       setTimeout(() =>{
//       fs.writeFile(inputFile, data.toUpperCase(), (err)=>{
//         if(err){
//           console.log(err)
//         }else{
//           setImmediate(() =>{
//             cb(null, "")
//           },m)
//         }
//       })
//     },n)
//     }
//   });
//   fs.write(f)
// }

function createCode(filePath, cb){
  fs.readFile(filePath, "utf-8", (err, data) =>{
    const parsedData = JSON.parse(data);
    const arrLength = parsedData.length;

    let counter = 0;

    parsedData.forEach(({file, contents}) =>{
      fs.writeFile(file, contents, () =>{
        counter++;
        if(counter == arrLength){
          cb();
        }
      })
    })
  })
}

createCode("a.txt", (err, data)=>{
  console.log("Done")
});

// readTimer(1000, 2000, "a.txt", (err)=>{
//   if(err){
//     console.log(err)
//   }else{
//     console.log(done);
//   }
// })

