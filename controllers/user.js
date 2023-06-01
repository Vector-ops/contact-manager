const asyncHandler = require("express-async-handler");
const { authSchema } = require("../helpers/validationSchema");
const createHttpError = require("http-errors");
//@desc Register a user
//@route POST /api/user/register
//@access public
const userRegister = asyncHandler(async (req, res) => {
  const validation = await authSchema.validateAsync(req.body);
  res.json({ msg: "register" });
});

//@desc User login
//@route POST /api/user/login
//@access public
const userLogin = asyncHandler(async (req, res) => {
  res.json({ msg: "login" });
});

//@desc View user profile
//@route POST /api/user/profile
//@access private
const userProfile = asyncHandler(async (req, res) => {
  res.json({ msg: "profile" });
});

//@desc User logout
//@route GET /api/user/logout
//@access public
const userLogout = asyncHandler(async (req, res) => {
  res.json({ msg: "logout" });
});

module.exports = {
  userRegister,
  userLogin,
  userProfile,
  userLogout,
};
