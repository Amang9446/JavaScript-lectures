// // const object = {
// //     name: "Aman",
// //     age: 26,
// // };
// // // console.log(object.name);
// // const objecttojson = JSON.stringify(object);
// // console.log(objecttojson);
// // const jsontoobject = JSON.parse(objecttojson);
// // console.log('====================================');
// // console.log(jsontoobject);
// // console.log('====================================');

const fs = require('fs');
const ApiURL = "https://dummyjson.com/carts";

async function getData() {
  try {
    const data = await fetch(ApiURL);
    const actualdata = await data.json();
    const objectdata = JSON.stringify(actualdata);
    // const coverttojson = JSON.parse(objectdata)
    fs.appendFile('aman.js',"hello Aman" , function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
    // console.log(actualdata);
    // console.log('====================================');
    // console.log(coverttojson.carts[0]);
    // console.log('====================================');
  } catch (err) {
    console.log(err);
  }
}
getData();


// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
//   fs.readFile('hello.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);

