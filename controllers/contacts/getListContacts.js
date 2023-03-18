

const { Contact } = require('../../models');

const getListContacts = async (req, res) => {
    const contacts = await Contact.find({});
    return res.status(200).json(contacts);
};

module.exports = getListContacts;