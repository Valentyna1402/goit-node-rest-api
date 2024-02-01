const express = require("express");

const { validateBody } = require("../../helpers/index");
const {userSchemas} = require('../../models/index')
const { User } = require("../../models/index");
const ctrl = require("../../controllers/index");

const authRouter = express.Router();

authRouter.post('/register', validateBody(userSchemas.registerSchema), ctrl.registerUser);
authRouter.post('/login', validateBody(userSchemas.loginSchema), ctrl.loginUser)

module.exports = authRouter;
