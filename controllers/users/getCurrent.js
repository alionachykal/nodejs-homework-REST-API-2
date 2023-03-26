const { User } = require("../../models");



const getCurrent = async (req, res) => {
    const { email, password } = req.user;
    res.json({
        status: "success",
        code: 200,
        data: {
            user: {
                email,
                password

            }
        }
    })  
    
}

module.exports = getCurrent;