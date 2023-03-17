

const fs = require('fs').promises;
const uuid = require('uuid').v4;
const path = require('path');


const contactsPath = path.join(__dirname,"contacts.json");


/**
 * Get users list
 */

    const listContacts = async () => { 
    const contacts = await fs.readFile(contactsPath, { encoding: 'utf-8' });
      return JSON.parse(contacts);
};

/**
 * Get user by id.
 */

const getContactById = async (contactId) => {
   if (!contactId) {
    return;
  }
  const contacts = await listContacts();
  const findIndexId = contacts.findIndex((item) => item.id === contactId);
  return contacts[findIndexId];
};

/**
 * Delete user by id.
 */
const removeContact = async (contactId) => {
    if (!contactId) {
    return;
  }
  if (!contactId) {
    return;
  }
  const contacts = await listContacts();
  const findIndexId = contacts.findIndex((item) => item.id === contactId);
  if (findIndexId === -1) {
    return;
  }
  const removedContact = contacts[findIndexId];
  contacts.splice(findIndexId, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return removedContact;
};

/**
 * ADD user.
 */
   const addContact = async (body) => {
    const allContacts = await listContacts();
     const newContact = {
         id: uuid(),
       ...body
    
    };
  allContacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(allContacts));
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
