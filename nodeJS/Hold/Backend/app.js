const express = require("express");
const app = express();
const path = require('path')
const fs = require('fs')

app.use(express.json());
app.use(express.urlencoded({ extends: true }))
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");


app.get('/', (req, res) => {
    fs.readdir(`files`, (err, files) => {        
        res.render("index", { files: files })
    })
})


app.get('/file/:fileName', (req, res) => {
    fs.readFile(`./files/${req.params.fileName}`, "utf-8", function(err, fileData) {
        res.render("detail", {fileName: req.params.fileName, fileData: fileData} );
    })
})

app.get('/edit/:fileName', (req, res) => {
    res.render('edit', {fileName: req.params.fileName})
})


app.post('/edit', (req, res) => {
    fs.rename(`./files/${req.body.previous}`, `./files/${req.body.new}`, function (err) {
        res.redirect('/')
    })    
})



app.post('/create', (req, res) => {
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.detail, (err) => {
        res.redirect('/')
    })
})


app.listen(3000)