const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
const createNewError = require("http-errors");
//@desc Get all contacts
//@route GET /api/contacts
//@access private
const getAllContacts = asyncHandler(async (req, res) => {
  const contact = await Contact.find({ user_id: req.user.userId });
  console.log(contact);
  res.status(200).json({ contact });
});

//@desc Get one contacts
//@route GET /api/contacts:id
//@access private
const getOneContact = asyncHandler(async (req, res, next) => {
  const contact = await Contact.findOne({
    _id: req.params.id,
    user_id: req.user.userId,
  });
  if (!contact) {
    return next(createNewError.NotFound("Contact does not exist"));
  }
  res.status(200).json({ contact });
});

//@desc create contact
//@route POST /api/contacts
//@access private
const createContact = asyncHandler(async (req, res, next) => {
  console.log(req.user);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw createNewError.BadRequest("All fields are mandatory");
  }
  const existContact = await Contact.findOne({ name, email, phone });
  if (existContact) {
    return next(createNewError.BadRequest("Contact already exists"));
  }
  const contact = await Contact.create({
    user_id: req.user.userId,
    name,
    email,
    phone,
  });

  res.status(201).json({ contact });
});

//@desc Delete contacts
//@route DELETE /api/contacts:id
//@access private
const deleteContacts = asyncHandler(async (req, res, next) => {
  const existsContact = await Contact.findById({
    _id: req.params.id,
  });

  if (Contact.user_id !== req.params.userId) {
    return next(createNewError.Unauthorized("No permission"));
  }
  if (!existsContact) {
    return next(createNewError.NotFound("Contact does not exist"));
  }
  const contact = await Contact.findByIdAndDelete(req.params.id);
  res.status(200).json(contact);
});

//@desc Update contacts
//@route PATCH /api/contacts:id
//@access private
const updateContact = asyncHandler(async (req, res, next) => {
  const { name, email, phone } = req.body;
  const contactExist = await Contact.findOne({
    _id: req.params.id,
    user_id: req.user.userId,
  });
  if (!contactExist) {
    return next(createNewError.NotFound("Contact does not exist"));
  }
  const contact = await Contact.findByIdAndUpdate(
    req.params.id,
    {
      name,
      email,
      phone,
    },
    { new: true }
  );
  if (!contact) {
    return next(createNewError.InternalServerError());
  }
  res.status(203).json({ contact });
});

module.exports = {
  getAllContacts,
  getOneContact,
  createContact,
  deleteContacts,
  updateContact,
};
