

const contactsOperations = require("../../models/contacts");

const updateById = async (req, res) => {
    const { contactId } = req.params;
    const value = req.value;
    const result = await contactsOperations.updateContact(contactId, value);
    return result
    ? res.status(200).json(result)
    : res.status(404).json({ message: "Not Found" });
 
};
module.exports = updateById;