const contacts = require("../services/contactsServices");
const HttpError = require("../helpers/HttpError");
const ctrlWrapper = require("../helpers/ctrlWrapper");

const getAllContacts = async (_, res) => {
  const result = await contacts.listContacts();
  res.status(200).json(result);
};

const getContactById = async (req, res) => {
  const { id } = req.params;
  const result = await contacts.getContactById(id);
  if (!result) {
    throw HttpError(404);
  }
  res.status(200).json(result);
};

const deleteContact = async (req, res) => {
  const { id } = req.params;
  const result = await contacts.removeContact(id);
  if (!result) {
    throw HttpError(404);
  }
  res.status(200).json(result);
};

const createContact = async (req, res) => {
  const result = await contacts.addContact(req.body);
  if (!result) {
    throw HttpError(404);
  }
  res.status(201).json(result);
};

const updateContact = async (req, res) => {
  const { id } = req.params;
  const result = await contacts.updateContactById(id, req.body);
  if (!result) {
    throw HttpError(404);
  }
  if (!req.body || Object.keys(req.body).length === 0) {
    throw HttpError(400, "Body must have at least one field");
  }
  res.status(200).json(result);
};

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  getContactById: ctrlWrapper(getContactById),
  deleteContact: ctrlWrapper(deleteContact),
  createContact: ctrlWrapper(createContact),
  updateContact: ctrlWrapper(updateContact),
};
