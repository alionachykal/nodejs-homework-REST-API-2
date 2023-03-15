
const contactsOperations = require("../../models/contacts");

const getListContacts = async (req, res) => {
 const contacts = await contactsOperations.listContacts();
 return res.status(200).json(contacts);
};

module.exports = getListContacts;