const errorHandler = (err, req, res, next) => {
  const status = res.status ? res.status : 500;
  res.json({});
};

module.exports = errorHandler;
