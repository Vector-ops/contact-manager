const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
  const status = res.status ? res.status : 500;
  switch (status) {
    case constants.VALIDATON_ERROR:
      res.json({
        title: "Validation Error",
        message: err.message,
        stacktrace: err.stack,
      });
      break;
    case constants.NOT_FOUND:
      res.json({
        title: "Not Found",
        message: err.message,
        stacktrace: err.stack,
      });
      break;
    case constants.UNAUTHORIZED:
      res.json({
        title: "Unauthorized",
        message: err.message,
        stacktrace: err.stack,
      });
      break;
    case constants.FORBIDDEN:
      res.json({
        title: "Forbidden",
        message: err.message,
        stacktrace: err.stack,
      });
      break;
    case constants.SERVER_ERROR:
      res.json({
        title: "Server Error",
        message: err.message,
        stacktrace: err.stack,
      });
      break;
    default:
      console.log("No error");
      break;
  }
};

module.exports = errorHandler;
