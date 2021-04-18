var express = require('express');
var router = express.Router();

router.get('/myblog', function(request, response) {
	response.render("myblog");
});

module.exports = router;