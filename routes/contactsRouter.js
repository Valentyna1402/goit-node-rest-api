const express = require("express");
const ctrl = require("../controllers/contactsControllers");

const validateBody = require("../helpers/validateBody");
const {
  createContactSchema,
  updateContactSchema,
  updateFavoriteSchema,
} = require("../models/contact");

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
