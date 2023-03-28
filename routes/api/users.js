const express = require('express');
const { auth, validation, ctrlWrapper } = require("../../middelwares");
const { auth: ctrl } = require("../../controllers");
const { users: controller } = require("../../controllers");

const { joiRegisterSchema,  joiLoginSchema } = require("../../models/user");


const router = express.Router();

router.post("/register", validation(joiRegisterSchema), ctrlWrapper(ctrl.register));

router.post("/login", validation(joiLoginSchema), ctrlWrapper(ctrl.login));

router.post("/logout", auth, ctrlWrapper(ctrl.logout));

router.get("/current", auth, ctrlWrapper(controller.getCurrent));


module.exports = router; 