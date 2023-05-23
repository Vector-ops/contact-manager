const asyncHandler = require("express-async-handler");
//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getAllContacts = asyncHandler((req, res) => {
  res.status(200).json({
    contact: "all contacts",
  });
});

//@desc Get one contacts
//@route GET /api/contacts:id
//@access public
const getOneContact = asyncHandler((req, res) => {
  res.status(200).json({
    contact: "one contact",
  });
});

//@desc create contact
//@route POST /api/contacts
//@access public
const createContact = asyncHandler((req, res) => {
  res.status(201).json({
    contact: "created",
  });
});

//@desc Delete contacts
//@route DELETE /api/contacts:id
//@access public
const deleteContacts = asyncHandler((req, res) => {
  res.status(200).json({
    contact: "deleted",
  });
});

//@desc Update contacts
//@route PATCH /api/contacts:id
//@access public
const updateContact = asyncHandler((req, res) => {
  res.status(203).json({
    contact: "updated",
  });
});

module.exports = {
  getAllContacts,
  getOneContact,
  createContact,
  deleteContacts,
  updateContact,
};
