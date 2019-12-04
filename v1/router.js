const express = require("express");
const router = express.Router();

const push = require("./push");

const users = [];

router.post("/user", ({body: {name, token}}, res) => {
    try {
        users.push({name, token});
        res.json({success: true})
    } catch(ex) {
        console.exception(ex);
        res.json({success: false, error: ex.toString()})
    }
});

router.post("/test", (req, res) => {
    push(users.map(user => user.token));
    res.json({success: "maybe"});
});

module.exports = router;

// Notifications working. Just need to get this thing finished!