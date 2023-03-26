
const { User } = require("../../models/user");
const { Conflict } = require("http-errors");
// const bcrypt = require("bcryptjs");

const register = async (req, res) => {
    const { email, password, subscription } = req.body;
    const user = await User.findOne({email});
    if (user) {
        return res.status(409).json({
            status: 'Conflict',
            code: 409,
            message: 'Email is already in use',
            
        })
    }
    const newUser = new User({ email, password, subscription });
    newUser.setPassword(password);
        newUser.save();
    res.status(201).json({
        status: 'success',
        code: 201,
        message: 'Registration successful',
        data: {
            email,
            password
        },
            
    
		})
}

module.exports = register;