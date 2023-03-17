const { NotFound } = require("http-errors");


const contactsOperations = require("../../models/contacts");

const removeById = async (req, res) => {

  const { contactId } = req.params;
  const result = await contactsOperations.removeContact(contactId);
   return result
    ? res.status(200).json({ message: "contact deleted" })
    : res.status(404).json({ message: "Not Found" });
 
};

module.exports = removeById;