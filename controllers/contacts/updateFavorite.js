
const { Contact } = require('../../models');


const updateFavorite = async (req, res) => {
    const { contactId } = req.params;
    const { favorite } = req.body;
    if (!favorite && favorite !== false) {
			res.status(400).json({ message: 'missing field favorite' })
		}
    const result = await Contact.findByIdAndUpdate(contactId, {favorite},{new:true});
    if (!result) {
        return res.status(404).json({ message: "Not found" });
    }
     return res.status(200).json(result);
 
};
module.exports = updateFavorite ;

