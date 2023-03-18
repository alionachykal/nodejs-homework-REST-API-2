
const { Contact } = require('../../models');

const addContact = async (req, res) => {
  let { name, email, phone, favorite } = req.body
  if (!favorite) {
		favorite = false
	}
  const result = await Contact.create(req.body);
 
 return res.status(201).json(result);
};


module.exports = addContact;