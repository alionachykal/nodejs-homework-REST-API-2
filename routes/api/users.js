const express = require('express');
const { auth, upload, validation, ctrlWrapper } = require("../../middelwares");
const { auth: ctrl } = require("../../controllers");
const { users: controller } = require("../../controllers");

const { joiRegisterSchema,  joiLoginSchema, emailSchema} = require("../../models/user");
const e = require('cors');


const router = express.Router();

router.post("/register", validation(joiRegisterSchema), ctrlWrapper(ctrl.register));

router.get("/verify/:verificationToken", ctrlWrapper(controller.verifyEmail));

router.post("/verify", validation(emailSchema), ctrlWrapper(ctrl.resendVerifyEmail));

router.post("/login", validation(joiLoginSchema), ctrlWrapper(ctrl.login));

router.post("/logout", auth, ctrlWrapper(ctrl.logout));

router.get("/current", auth, ctrlWrapper(controller.getCurrent));

router.patch("/avatars", auth, upload.single("avatar"), ctrlWrapper(controller.updateAvatar));


module.exports = router; 