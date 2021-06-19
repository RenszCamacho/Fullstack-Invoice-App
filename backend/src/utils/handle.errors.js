function handleError(error, status = 500) {
  this.status(status);
  this.send(error);
}

module.exports = handleError;
