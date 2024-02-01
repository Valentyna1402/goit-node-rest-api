const { User } = require("../../models/index");
const { HttpError } = require("../../helpers/index");

const registerUser = async (req, res) => {
const newUser = await User.create(req.body);
console.log(newUser);
res.status(201).json({
    name: newUser.name,
    email: newUser.email
})
}

module.exports = {
    registerUser,
};
