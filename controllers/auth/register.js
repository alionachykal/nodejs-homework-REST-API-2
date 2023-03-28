
const { User } = require("../../models/user");
const { Conflict } = require("http-errors");
// const bcrypt = require("bcryptjs");

const register = async (req, res) => {
    const { email, password, subscription } = req.body;
    const user = await User.findOne({email});
    if (user) {
        throw new Conflict("Email in use")
            
        
    }
    const newUser = new User({ email, password, subscription });
    newUser.setPassword(password);
     newUser.save();
    res.status(201).json({
        "user": {
            email,
            subscription: "starter"
        }
    });
            
}

module.exports = register;