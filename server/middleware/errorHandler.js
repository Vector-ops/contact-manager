const errorHandler = (err, req, res, next) => {
  const status = err.status ? err.status : 500;
  res.status(status);
  res.json({
    error: {
      status: status,
      message: err.message,
    },
  });
};

module.exports = errorHandler;
