const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
const createNewError = require("http-errors");
//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getAllContacts = asyncHandler(async (req, res) => {
  const contact = await Contact.find();
  res.status(200).json({ contact });
});

//@desc Get one contacts
//@route GET /api/contacts:id
//@access public
const getOneContact = asyncHandler(async (req, res, next) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    return next(createNewError.NotFound("Contact does not exist"));
  }
  res.status(200).json({ contact });
});

//@desc create contact
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async (req, res, next) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw createNewError.BadRequest("All fields are mandatory");
  }
  const existContact = await Contact.findOne({ name, email, phone });
  if (existContact) {
    return next(createNewError.BadRequest("Contact already exists"));
  }
  const contact = await Contact.create({ name, email, phone });

  res.status(201).json({ contact });
});

//@desc Delete contacts
//@route DELETE /api/contacts:id
//@access public
const deleteContacts = asyncHandler(async (req, res, next) => {
  const existsContact = await Contact.findById(req.params.id);
  if (!existsContact) {
    return next(createNewError.NotFound("Contact does not exist"));
  }
  const contact = await Contact.findOneAndDelete(req.params.id);
  res.status(200).json(contact);
});

//@desc Update contacts
//@route PATCH /api/contacts:id
//@access public
const updateContact = asyncHandler(async (req, res, next) => {
  const { name, email, phone } = req.body;
  const contactExist = await Contact.findById(req.params.id);
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
