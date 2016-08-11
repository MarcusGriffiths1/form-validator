/*
* @constructor
*/
function Validator(pattern, invalidMessage) {
  this._pattern = pattern;
  this.invalidMessage = invalidMessage;
}

Validator.prototype.validate = function validate(inputValue) {
  console.error('Please override this abstract function');
};
