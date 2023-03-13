
const Joi = require('joi');

const contactsSchema = Joi.object({
  name: Joi.string().min(3).max(12).required(),
   email: Joi.string().email().required(),
  phone: Joi.string().min(8).max(12).required(),
})

module.exports = contactsSchema;
