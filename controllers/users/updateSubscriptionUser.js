const { User } = require("../../models");

const updateSubscriptionUser = async (req,res) => {
  const { _id } = req.user;
  const result = await User.findByIdAndUpdate(_id, req.body, { new: true }).select('email subscription');
  if (!result) {
    throw HttpError(404);
  }
  res.status(200).json(result);

}

module.exports = updateSubscriptionUser;