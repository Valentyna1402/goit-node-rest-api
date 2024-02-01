const getAllContacts = require("./getAllContacts");
const getContactById = require("./getContactById");
const createContact = require("./createContact");
const deleteContact = require("./deleteContact");
const updateContact = require("./updateContact");
const updateStatusContact = require("./updateStatusContact");
const { ctrlWrapper } = require("../../helpers/index");

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  getContactById: ctrlWrapper(getContactById),
  createContact: ctrlWrapper(createContact),
  deleteContact: ctrlWrapper(deleteContact),
  updateContact: ctrlWrapper(updateContact),
  updateStatusContact: ctrlWrapper(updateStatusContact),
};
