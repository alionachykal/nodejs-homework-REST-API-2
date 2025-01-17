const { Schema, model } = require("mongoose");
const Joi = require("joi");
const bcrypt = require('bcryptjs');

const userSchema = Schema({
    
    password: {
        type: String,
        required: [true, 'Set password for user'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
      
    },
    subscription: {
        type: String,
        enum: ["starter", "pro", "business"],
        default: "starter"
    },
    token: {
        type: String,
        default: null
    },
     avatarURL: {
        type: String,
        required: true
    }
}, {versionKey: false, timestamps: true});


userSchema.methods.setPassword = function(password) {
    this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
};


userSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.password);
    
}

const joiRegisterSchema = Joi.object({
    email: Joi.string().required().messages({ "any.required": `missing required email field` }),
    password: Joi.string().required().messages({ "any.required": `missing required password field` }),
    
});


const joiLoginSchema = Joi.object({
    email: Joi.string().required().messages({ "any.required": `missing required email field` }),
	password: Joi.string().required().messages({ "any.required": `missing required password field` }),
    
})


const User = model("user", userSchema);

module.exports = {
    User,
    joiRegisterSchema,
    joiLoginSchema
};