// dependencies



function errorHandler(error, req, res, next) {
    if (res.headersSent) {
      next();
    } else {
      res.status(500).send(error.message);
    // next(error);
    }
  }

module.exports = {
    errorHandler, 
}