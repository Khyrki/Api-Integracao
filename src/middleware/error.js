const errorMiddleware = (err, _req, res, _next) => {
  const internalError = 500;
  res.status(err.code ? err.code : internalError).json({ message: err.message });
};

module.exports = errorMiddleware;
