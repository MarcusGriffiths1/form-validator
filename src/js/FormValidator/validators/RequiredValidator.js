/*
* @constructor
*/
function RequiredValidator(pattern, invalidMessage) {
  Validator.call(this, pattern, invalidMessage);
  this.type = 'required';
}

RequiredValidator.prototype = Object.create(Validator.prototype);

RequiredValidator.prototype.validate = function validate(value) {
  if ( value.trim().length === 0 ) {
    return false;
  }

  return true;
};
