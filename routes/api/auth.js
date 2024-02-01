const express = require("express");
const { validateBody } = require("../../helpers/index");
const {userSchemas} = require('../../models/index')
const { User } = require("../../models/index");
const {registerUser} = require('../../controllers/index');


const authRouter = express.Router();

authRouter.post('/register', validateBody(userSchemas.registerSchema), registerUser)

module.exports = authRouter;
