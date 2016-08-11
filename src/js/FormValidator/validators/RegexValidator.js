/*
* @constructor
*/
function RegexValidator(pattern, invalidMessage) {
  Validator.call(this, pattern, invalidMessage);
  this.type = 'regex';
}

RegexValidator.prototype = Object.create(Validator.prototype);

RegexValidator.prototype.validate = function validate() {

};
