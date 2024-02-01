const { createContactSchema } = require("./contact");
const { updateContactSchema } = require("./contact");
const { updateFavoriteSchema } = require("./contact");
const { Contact } = require("./contact");

module.exports = {
  createContactSchema,
  updateContactSchema,
  updateFavoriteSchema,
  Contact,
};
