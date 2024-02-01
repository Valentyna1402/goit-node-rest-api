const { Contact } = require("../../models/index");

const getAllContacts = async (_, res) => {
  const result = await Contact.find();
  res.status(200).json(result);
};

module.exports = getAllContacts;
