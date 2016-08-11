/*
* @constructor
*/
function MinLengthValidator(pattern, invalidMessage) {
  Validator.call(this, pattern, invalidMessage);
  this.type = 'minlength';
}

MinLengthValidator.prototype = Object.create(Validator.prototype);

MinLengthValidator.prototype.validate = function validate(value) {
  if ( value.length < this._pattern ) {
    return false;
  }

  return true;
};
