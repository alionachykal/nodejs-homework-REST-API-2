const express = require('express')

const {auth, validation, ctrlWrapper } = require("../../middelwares");

const { joiSchema , favoriteJoiSchema } = require("../../models/contacts");
const { contacts: ctrl } = require("../../controllers");


const router = express.Router()

router.get('/', auth , ctrlWrapper( ctrl.getListContacts)); 

router.get('/:contactId', ctrlWrapper(ctrl.getContactById));

router.post('/', auth , validation(joiSchema), ctrlWrapper(ctrl.addContact));

router.delete('/:contactId', ctrlWrapper(ctrl.removeById));

router.put('/:contactId', validation(joiSchema), ctrlWrapper(ctrl.updateById));

router.patch('/:contactId/favorite', validation(favoriteJoiSchema), ctrlWrapper(ctrl.updateFavorite));

module.exports = router;
