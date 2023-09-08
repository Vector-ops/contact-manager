const Joi = require("@hapi/joi");

const authSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().required().min(8),
});

module.exports = { authSchema };
