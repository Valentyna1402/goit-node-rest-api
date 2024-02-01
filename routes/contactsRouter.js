const express = require("express");
const ctrl = require("../controllers/contacts/index");
const { validateBody } = require("../helpers/index");
const {
  createContactSchema,
  updateContactSchema,
  updateFavoriteSchema,
} = require("../models/index");

const contactsRouter = express.Router();

contactsRouter.get("/", ctrl.getAllContacts);

contactsRouter.get("/:id", ctrl.getContactById);

contactsRouter.delete("/:id", ctrl.deleteContact);

contactsRouter.post("/", validateBody(createContactSchema), ctrl.createContact);

contactsRouter.put(
  "/:id",
  validateBody(updateContactSchema),
  ctrl.updateContact
);

contactsRouter.patch(
  "/:id/favorite",
  validateBody(updateFavoriteSchema),
  ctrl.updateStatusContact
);

module.exports = contactsRouter;
