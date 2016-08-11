var assert = chai.assert;

describe('Validators', function() {

  describe('MaxLengthValidator', function() {

    var message = 'Maximum length exceeded';
    var validator = new MaxLengthValidator(10, message);

    it('should have a populated invalidMessage field', function() {

      assert.isAbove(validator.invalidMessage.length, 0);

    });

    it('should validate false if length of value exceeds 10', function() {

      var valid = validator.validate('supercalifragilisticexpialidocious');

      assert.equal(valid, false);

    });

    it('should validate true if length of value does not exceed 10', function() {

      var valid = validator.validate('Shorty');

      assert.equal(valid, true);

    });

  });

  describe('MinLengthValidator', function() {

    var message = 'Minimum length not met';
    var validator = new MinLengthValidator(5, message);

    it('should have a populated invalidMessage field', function() {

      assert.isAbove(validator.invalidMessage.length, 0);

    });

    it('should validate false if length of value is under 5', function() {

      var valid = validator.validate('Puny');

      assert.equal(valid, false);

    });

    it('should validate true if length of value is 5 or over', function() {

      var valid = validator.validate('Testy');

      assert.equal(valid, true);

    });

  });

})
