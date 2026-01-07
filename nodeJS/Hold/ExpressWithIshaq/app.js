// const http = require("http");
// const fs = require("fs");
// const path = require("path");
// const { isUtf8 } = require("buffer");

// const filePath = path.join(process.cwd(), "data.txt");
// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.write("Hello World");
//         res.end();
//     } else if (req.url === '/form') {
//         res.setHeader("Content-Type", "Text/html");
//         res.write("<form action='/submit' method='POST'> <input name='data1' /> <input name='data2' /> <button>Submit</button> </form>");
//         res.end();
//     } else if (req.url === '/submit') {
//         let data = "";
//         req.on("data", chunk => data += chunk);
//         req.on("end", () => {
//             fs.readFile(filePath, 'utf8' , (_ ,fileData) => {
//                 const newData = fileData + '\n' + data
//                 fs.writeFile(filePath, newData, () => {
//                 res.write("Data Recived");
//                 res.end();
//             });
//             })
            
//         })

//     } else {
//         res.write("404 pg not found");
//         res.end();
//     }
// });

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path")
const app = express();

const form = require("./routes/form");
const todo = require("./routes/todo");
const auth = require("./routes/auth");


app.use(bodyParser.urlencoded({extended:false}));


//for react
// app.use(bodyParser.json()); 

app.use(express.static(path.join(process.cwd(), "public")))

app.set("view engine", "ejs");
app.set("views", "views");


app.use((req, res, next) => {
    req.name = "Ahsan";
    next();
});

app.use("/form",form);
app.use("/todo",todo);
app.use("/auth",auth);




app.listen(3000);
