const express = require("express");
const router = express.Router();
const {
  getAllContacts,
  getOneContact,
  createContact,
  deleteContacts,
  updateContact,
} = require("../controllers/contact");
const { verifyAccessToken } = require("../helpers/jwtHelper");

router.use(verifyAccessToken);

router.route("/").get(getAllContacts).post(createContact);

router
  .route("/:id")
  .get(getOneContact)
  .delete(deleteContacts)
  .patch(updateContact);

module.exports = router;
