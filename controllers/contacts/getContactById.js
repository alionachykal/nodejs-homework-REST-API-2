
const { Contact } = require('../../models');

const getContactById = async (req, res) => {
  
    const { contactId } = req.params;
    const result = await Contact.findById(contactId ); 
   return result
    ? res.status(200).json(result)
    : res.status(404).json({ message: "Not Found" });
};


module.exports = getContactById;