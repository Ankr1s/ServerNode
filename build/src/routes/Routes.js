"use strict";
var express_1 = require("express");
var UserRoutes = require("./UserRoutes");
var TestRoutes = require("./TestRoutes");
var router = express_1.Router();
router.use('/users', UserRoutes);
router.use('/test', TestRoutes);
module.exports = router;
