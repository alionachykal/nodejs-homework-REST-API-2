const express = require('express');
const router = express.Router();

const {auth, ctrlWrapper} = require("../../middelwares");
const { users: ctrl } = require("../../controllers");



router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));

module.exports = router;
