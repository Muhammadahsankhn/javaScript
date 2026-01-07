// const cookieParser = require("cookie-parser");
// const express = require("express");
// const app = express();

// app.use(cookieParser())

// app.get('/', (req, res) => {
//     res.cookie("name", "Ahsan");
//     res.send("done")
// })


// app.get('/read', (req, res) => {
//     console.log(req.cookies);
//     res.send("read page")
// })

// app.listen(3000);




//          BCRYPT 
// app.get('/', (req, res) => {
//     bcrypt.genSalt(10, function (err, salt) {
//         bcrypt.hash("pololololoo", salt, function (err, hash) {
//             console.log(hash);

//         });
//     });
// })

// app.get('/', (req, res) => {
//     bcrypt.compare("pololololoo", "$2b$10$X2tzA9RkjryoVVkUvPTSUuYSGKUvurekbwRJ7/yN9uoBd.5yrgxXO", function (err, result) {
//         console.log(result);

//     })
// })






// JWT

// app.use(cookieParser())
// app.get('/', (req,res) => {
//     let token = jwt.sign({email: "ahsan@gmail.com"}, "secret")
//     res.cookie("token", token)
//     res.send("done")

// })


// app.get('/read', (req, res) => {
//     let data = jwt.verify(req.cookies.token, "secret");
//     console.log(data);

// })



const express = require("express");
const app = express();
const path = require('path')
const userModel = require('./models/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")))


app.get('/', (req, res) => {
    res.render("index")
})

app.post('/create', (req, res) => {
    let { username, email, password, age } = req.body;

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            let createUser = await userModel.create({
                username,
                email,
                password: hash,
                age
            });
            let token = jwt.sign({ email }, "shhhhhhhhh");
            res.cookie("token", token)
            res.send(createUser)

        })

    })


});


app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', async (req, res) => {
    let user = await userModel.findOne({ email: req.body.email })
    if (!user) return res.send("Something went wrong");

    bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (result) {
            let token = jwt.sign({ email: user.email }, "shhhhhhhhh");
            res.cookie("token", token)
            res.send("Welcome you are login");

        } else return res.send("You can't login");

    })

})

app.get('/logout', (req, res) => {
    res.cookie("token", "");
    res.redirect('/')
})

app.listen(3000);