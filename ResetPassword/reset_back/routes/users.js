var express = require('express');
var router = express.Router();
var userModule = require("../Modules/user");

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/reset', userModule.resetPassword);
router.post('/newpassword', userModule.updatePassword);
module.exports = router;
