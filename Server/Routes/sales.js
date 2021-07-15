var express = require("express");
var router = express.Router();

router.post("/", (request, response) => {
    //send success message (data has been validated in Sales.vue before sending it)
    response.send(`The sale done by ${request.body.employeeName} has been saved`)
});

module.exports = router