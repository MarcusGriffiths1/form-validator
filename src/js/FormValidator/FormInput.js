/*
* @constructor
*/
function FormInput(inputId, validationEvent) {
  this._inputId = inputId;
  this._validationEvent = validationEvent || 'blur';
  this._validators = [];
  this.isValid = true;
  this.invalidMessages = [];
}

FormInput.prototype.validate = function validate() {
  var _this = this;
  console.log(this._validators);
  this._getInputElement().onblur = function() {
    _this.invalidMessages = [];

    var i = 0;
    var length = _this._validators.length;
    for (i; i < length; i++) {
      if (!_this._validators[i].validate(_this._getInputElement().value)) {
        _this.invalidMessages.push(_this._validators[i].invalidMessage);
      }
    }

    console.log(_this.invalidMessages);
  };
};

FormInput.prototype.addValidator = function addValidator(validationType, pattern, invalidMessage) {
  var validator;

  if ( this._validatorExists(validationType) ) {
    console.error("Validator of type " + validationType + " already exists, only one type of validator can be set per input" );
  } else {
    validator = this._createValidator(validationType, pattern, invalidMessage);
    this._validators.push(validator);
  }

};

FormInput.prototype._validatorExists = function validatorExists(validationType) {
  var i = 0;
  var length = this._validators.length;

  for (i; i < length; i++) {
    if ( this._validators[i].type == validationType ) {
      return true;
    }
  }

  return false;
};

FormInput.prototype._createValidator = function createValidator(validationType, pattern, invalidMessage) {
  if ( validationType == 'maxlength' ) {
    return new MaxLengthValidator(pattern, invalidMessage);
  } else if ( validationType == 'minlength' ) {
    return new MinLengthValidator(pattern, invalidMessage);
  } else if ( validationType == 'regexp' ) {
    return new RegexValidator(pattern, invalidMessage);
  } else if ( validationType == 'required' ) {
    return new RequiredValidator(pattern, invalidMessage);
  } else {
    console.error("Can't find validation of type: " + validationType);
  }
};

FormInput.prototype.getInputId = function getInputId() {
  return this._inputId;
};

FormInput.prototype._getInputElement = function getInputElement() {
  return document.getElementById(this._inputId);
};
