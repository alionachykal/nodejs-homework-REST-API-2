const { Contact } = require('../../models');

const addContact = async (req, res) => {
  const {_id} =req.user
  let { name, email, phone, favorite } = req.body
  if (!favorite) {
		favorite = false
	}
  const result = await Contact.create({...req.body, owner: _id });
 
 return res.status(201).json(result);
};


module.exports = addContact;