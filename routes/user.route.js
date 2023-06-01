const express = require("express");
const {
  userRegister,
  userLogin,
  userProfile,
  userLogout,
} = require("../controllers/user");
const router = express.Router();

router.route("/register").post(userRegister);
router.route("/login").post(userLogin);
router.route("/profile").post(userProfile);
router.route("/logout").get(userLogout);

module.exports = router;
