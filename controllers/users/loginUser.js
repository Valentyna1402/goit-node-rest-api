const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { User } = require("../../models/index");
const { HttpError } = require("../../helpers/index");
const { SECRET_KEY } = process.env;

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  
  if (!user) {
    throw HttpError(401, "Email or password is invalid");
  };
  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw HttpError(401, "Email or password is invalid");
  };

  const payload = {
    id: user._id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "23h" });
  res.status(200).json({ token });
};

module.exports = loginUser;