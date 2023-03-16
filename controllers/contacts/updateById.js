



const contactsOperations = require("../../models/contacts");

const updateById = async (req, res) => {
    const { contactId } = req.params;
    const result = await contactsOperations.updateContact(contactId, req.body);
    if (!result) {
        return res.status(404).json({ message: "Not found" });
    }
     return res.status(200).json(result);
 
};
module.exports = updateById;

