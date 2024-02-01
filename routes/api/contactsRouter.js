const express = require("express");

const ctrl = require("../../controllers/index");
const { validateBody } = require("../../helpers/index");
const { contactSchemas } = require("../../models/index");

const contactsRouter = express.Router();

contactsRouter.get("/", ctrl.getAllContacts);

contactsRouter.get("/:id", ctrl.getContactById);

contactsRouter.delete("/:id", ctrl.deleteContact);

contactsRouter.post("/", validateBody(contactSchemas.createContactSchema), ctrl.createContact);

contactsRouter.put("/:id", validateBody(contactSchemas.updateContactSchema), ctrl.updateContact);

contactsRouter.patch("/:id/favorite", validateBody(contactSchemas.updateFavoriteSchema), ctrl.updateStatusContact);

module.exports = contactsRouter;
