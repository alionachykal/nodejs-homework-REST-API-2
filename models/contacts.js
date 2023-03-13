

const fs = require('fs').promises;
const uuid = require('uuid').v4;
const path = require('path');


const contactsPath = path.join('models', 'contacts.json');

 

/**
 * Get users list
 */

    const listContacts = async () => { 
    const contacts = await fs.readFile(contactsPath ,"utf8");
    return JSON.parse(contacts);
    
};

/**
 * Get user by id.
 */

const getContactById = async (contactId) => {
      if (!contactId) {
    return;
  }
    const contacts = await listContacts()
    return contacts.filter(({ id }) => id === contactId)
   
};

/**
 * Delete user by id.
 */
const removeContact = async (contactId) => {
    if (!contactId) {
    return;
  }
  const contacts = await listContacts()
  const newContacts = contacts.filter(({ id }) => id !== contactId)
	await fs.writeFile(contactsPath, JSON.stringify(newContacts, null, 2))
  return newContacts;
};

/**
 * ADD user.
 */
   const addContact = async (body) => {
   const contacts = await listContacts()
    const newContact = {
      id: uuid(),
     ...body,
    };
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    return newContact;
    
};
  
   /**
 * Update user.
 */
const updateContact = async (contactId, body) => {
const contacts = await listContacts();
  const index = contacts.findIndex((contact) => contact.id === contactId);
  if (index === -1) {
    return;
  };
  const contact = contacts[index];
  Object.assign(contact, body);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return contact;
}





module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
 
}
