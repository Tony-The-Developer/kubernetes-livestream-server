const router = require('express').Router();

router.post('/', (req, res) => {
    res.send('HelloWorld')
});
module.exports = router;
