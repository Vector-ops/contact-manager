const asyncHandler = require("express-async-handler");
const { authSchema } = require("../helpers/validationSchema");
const createHttpError = require("http-errors");
const User = require("../models/userModel");
const { signAccessToken, verifyAccessToken } = require("../helpers/jwtHelper");
const { valid } = require("joi");

//@desc Register a user
//@route POST /api/user/register
//@access public
const userRegister = asyncHandler(async (req, res, next) => {
  const validation = await authSchema.validateAsync(req.body);
  const userExists = await User.findOne({ email: validation.email });
  if (userExists) throw createHttpError.BadRequest("User already exists");
  const user = await User.create(validation);
  if (user) {
    const accessToken = await signAccessToken(
      user.id,
      user.email,
      user.username
    );
    return res.status(201).json({ accessToken: accessToken });
  }
  return next(createHttpError.Unauthorized("User data not valid"));
});

//@desc User login
//@route POST /api/user/login
//@access public
const userLogin = asyncHandler(async (req, res) => {
  const validation = await authSchema.validateAsync(req.body);
  const user = await User.findOne({
    username: validation.username,
    email: validation.email,
  });
  if (!user) {
    throw createHttpError.Unauthorized("Invalid Credentials");
  }
  const isMatch = await user.isValidPassword(validation.password);
  console.log(isMatch);
  if (!isMatch) {
    throw createHttpError.Unauthorized("Invalid credentials");
  } else {
    const accessToken = await signAccessToken(
      user.id,
      user.email,
      user.username
    );
    return res.status(200).json({ accessToken: accessToken });
  }
});

//@desc View user profile
//@route GET /api/user/profile
//@access private
const userProfile = asyncHandler(async (req, res, next) => {
  const user = req.user;

  res.json({ user });
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
