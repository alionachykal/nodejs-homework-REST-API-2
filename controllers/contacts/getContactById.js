
// const createError = require("http-errors");

const contactsOperations = require("../../models/contacts");

const getContactById = async (req, res) => {
  
    const { contactId } = req.params;
    const result = await contactsOperations.getContactById( contactId);
   return result
    ? res.status(200).json(result)
    : res.status(404).json({ message: "Not Found" });
};


module.exports = getContactById;