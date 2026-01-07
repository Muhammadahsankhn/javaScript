const express = require("express");
const createUser = require("../controller/auth")
const router = express.Router();

router.post('/login', (req, res) => {

});

router.post("/signup", async (req, res) => {
    try {
        const resp = await createUser(req.body.email, req.body.password)
        res.status(200).send(resp)
    }catch(err){
        res.send(err)
    }
});


module.exports = router;
