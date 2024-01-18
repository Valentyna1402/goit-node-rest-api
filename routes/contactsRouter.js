const express = require("express");
const ctrl = require("../controllers/contactsControllers");

const validateBody = require("../helpers/validateBody");
const schemas = require("../schemas/contactsSchemas")

const contactsRouter = express.Router();

contactsRouter.get("/", ctrl.getAllContacts);

contactsRouter.get("/:id", ctrl.getContactById);

contactsRouter.delete("/:id", ctrl.deleteContact);

contactsRouter.post("/", validateBody(schemas.createContactSchema), ctrl.createContact);

contactsRouter.put("/:id", validateBody(schemas.updateContactSchema), ctrl.updateContact);

module.exports = contactsRouter;