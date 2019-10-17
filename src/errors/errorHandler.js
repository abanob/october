const defaultStatus = 500;

const errorHandler = (err, req, res, next) => {
  res.status(err.status || defaultStatus).json(err.message);

  next(err, req, res);
};

module.exports = errorHandler;
