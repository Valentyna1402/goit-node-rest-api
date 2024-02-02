const express = require("express");

const { validateBody, authenticate } = require("../../middlewares");
const { userSchemas } = require('../../models');
const ctrl = require("../../controllers");

const authRouter = express.Router();

authRouter.post('/register', validateBody(userSchemas.registerSchema), ctrl.registerUser);
authRouter.post('/login', validateBody(userSchemas.loginSchema), ctrl.loginUser);
authRouter.get('/current', authenticate, ctrl.getCurrentUser)

module.exports = authRouter;
