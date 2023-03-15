 
const contactsOperations = require("../../models/contacts");


const addContact = async (req, res) => {
    const value = req.value;
    const result = await contactsOperations.addContact(value);
    return res.status(201).json(result);
    
}

module.exports = addContact;