const getAllContacts = require("./contacts/getAllContacts");
const getContactById = require("./contacts/getContactById");
const createContact = require("./contacts/createContact");
const deleteContact = require("./contacts/deleteContact");
const updateContact = require("./contacts/updateContact");
const updateStatusContact = require("./contacts/updateStatusContact");
const ctrlWrapper = require("../helpers/ctrlWrapper");

const {registerUser} = require('./users/auth');

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  getContactById: ctrlWrapper(getContactById),
  createContact: ctrlWrapper(createContact),
  deleteContact: ctrlWrapper(deleteContact),
  updateContact: ctrlWrapper(updateContact),
  updateStatusContact: ctrlWrapper(updateStatusContact),
  registerUser: ctrlWrapper(registerUser),
};
