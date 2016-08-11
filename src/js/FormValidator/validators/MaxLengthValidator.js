/*
* @constructor
*/
function MaxLengthValidator(pattern, invalidMessage) {
  Validator.call(this, pattern, invalidMessage);
  this.type = 'maxlength';
}

MaxLengthValidator.prototype = Object.create(Validator.prototype);

MaxLengthValidator.prototype.validate = function validate(value) {
  if ( value.length > this._pattern ) {
    return false;
  }

  return true;
};
