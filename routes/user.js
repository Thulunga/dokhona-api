const router = require('express').Router();



router.get('/usertest', (req, res) => {
    res.send(`<h1>user test is successfull</h1>`);
})


router.post('/register', (req, res) => {
    const name = req.body.name;
    res.status(200).send(name);
})

module.exports = router;