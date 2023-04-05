const { User } = require("../../models/user");
const { Conflict } = require("http-errors");
const gravatar = require("gravatar");


const register = async (req, res) => {
    const { email, password, subscription } = req.body;
    const user = await User.findOne({email});
    if (user) {
        throw new Conflict("Email in use")
            
        
    }


    const avatarURL = gravatar.url(email, {
        protocol: 'http',
        s: '100'
    });
    const newUser = new User({ email, password, subscription, avatarURL });
    newUser.setPassword(password);
     newUser.save();
    res.status(201).json({
        "user": {
            email,
            subscription: "starter",
            avatarURL
        }
    });
            
}




module.exports = register;