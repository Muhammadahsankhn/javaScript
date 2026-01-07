const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
    res.render("form", {name : "Ahsan"})
});

router.post("/submit", (req, res) => {
    res.send(req.body.data)
})

module.exports = router;