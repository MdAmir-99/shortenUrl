const express = require('express')
const {createURL, getURL} = require('../controller/urlController')
const router = express.Router()

router.post('/url/shorten', createURL)
router.get('/:urlCode', getURL)

//Validating the endpoint
router.all("/*", function (req, res) {
    return res
      .status(404)
      .send({ status: false, message: "Page Not Found" });
});


module.exports = router

