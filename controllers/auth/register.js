const { User } = require("../../models/user");
const { Conflict } = require("http-errors");
const gravatar = require("gravatar");
const {nanoid} =require("nanoid")
const { sendEmail } = require("../../helpers");

const { BASE_URL } = process.env;

const register = async (req, res) => {
    const { email, password, subscription } = req.body;
    const user = await User.findOne({email});
    if (user) {
        throw new Conflict("Email in use")
             
    };


    const avatarURL = gravatar.url(email, {
        protocol: 'http',
        s: '100'
    });

    const verificationToken = nanoid();

    const newUser = new User({ email, password, subscription, avatarURL, verificationToken });

    newUser.setPassword(password);
    await newUser.save();
   
    const verifyEmail = {
        to: email,
        subject: "Verify email",
        html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${verificationToken}">Click verify email</a>`
     
    }

    await sendEmail(verifyEmail);
    
    res.status(201).json({
        "user": {
            email,
            subscription: "starter",
            avatarURL,
            verificationToken
        }
    });
            
}




module.exports = register;