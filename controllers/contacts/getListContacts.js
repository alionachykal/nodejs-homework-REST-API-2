
const { Contact } = require('../../models');

const getListContacts = async (req, res) => {
    const { _id } = req.user;
    const { page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;
    const contacts = await Contact.find({owner: _id}, "",{skip, limit : Number(limit)}).populate("owner", "_id name email");
    return res.status(200).json(contacts);
};

module.exports = getListContacts;