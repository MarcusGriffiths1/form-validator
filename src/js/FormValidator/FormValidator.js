/*
* @constructor
*/
function FormValidator(formId) {
  this._formId = formId;
  this._formElement = document.getElementById(this._formId);
  this._formInputs = [];
}

FormValidator.prototype.init = function init() {
  var i = 0;
  var length = this._formInputs.length;
  for (i; i < length; i++) {
    this._formInputs[i].validate();
  }
};

FormValidator.prototype.addValidation = function addValidation(inputId, validationType, pattern, invalidMessage, validationEvent) {
  var input;

  if ( this._inputExists(inputId) ) {

    input = this._getInput(inputId);
    input.addValidator(validationType, pattern, invalidMessage);

  } else {

    input = new FormInput(inputId, validationEvent);
    input.addValidator(validationType, pattern, invalidMessage);
    this._formInputs.push(input);

  }
};

FormValidator.prototype._inputExists = function inputExists(inputId) {
  var i = 0;
  var length = this._formInputs.length;

  for (i; i < length; i++) {
    if ( this._formInputs[i].getInputId() == inputId ) {
      return true;
    }
  }

  return false;
};

FormValidator.prototype._getInput = function getInput(inputId) {
  var i = 0;
  var length = this._formInputs.length;

  for (i; i < length; i++) {
    if ( this._formInputs[i].getInputId() == inputId ) {
      return this._formInputs[i];
    }
  }
};
