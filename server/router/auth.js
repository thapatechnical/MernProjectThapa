const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`Hello world from the server rotuer js`);
});

router.post('/register', (req, res) => {
    console.log(req.body);
    res.json({ message: req.body });
    // res.send("mera register page");
});

module.exports = router;