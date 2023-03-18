

// const fs = require('fs').promises;
// const uuid = require('uuid').v4;
// const path = require('path');


const Joi = require('joi');

const { Schema, model } = require("mongoose");

const contactSchema = Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },{versionKey: false, timestamps:true}
);



const joiSchema= Joi.object({
  name: Joi.string()
    .required()
    .messages({ "any.required": `missing required name field` }),
  email: Joi.string()
    .required()
    .messages({ "any.required": `missing required email field` }),
  phone: Joi.string()
    .required()
    .messages({ "any.required": `missing required phone field` }),
  favorite: Joi.boolean(),
});


const favoriteJoiSchema = Joi.object({
  favorite: Joi.boolean()
   .required()
   .messages({ "any.required": `missing field favorite` }),
  
})

const Contact = model("contact", contactSchema);
module.exports = {
  Contact,
  joiSchema,
  favoriteJoiSchema
};

