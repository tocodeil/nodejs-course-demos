module.exports = function() {
  const exports = {};

  const secretNumber = Math.floor(Math.random() * 10);

  exports.guess = function(number) {
    if (number === secretNumber) {
      return true;
    } else {
      return false;
    }
  }

  exports.reveal = function() {
    return secretNumber;
  }

  return exports;
}
