const { Contact } = require('../../models');

const removeById = async (req, res) => {

  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
   return result
    ? res.status(200).json({ message: "contact deleted" })
    : res.status(404).json({ message: "Not Found" });
 
};

module.exports = removeById;