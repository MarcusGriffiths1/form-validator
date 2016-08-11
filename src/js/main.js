var checkboxFunctionality = function() {

  var hiddenFormRequiredIds = ['add1', 'city', 'postcode'];

  // address form is only used when postal option is selected
  // depending on previous form submission assign the hidden form element and hide if neccessary
  var hiddenForm = (!document.getElementById('postal').checked) ? $('.js-prospectform__address').hide() : $('.js-prospectform__address');

  $('input[type=radio]').click(function() {

    addSelectedCheckboxClass($(this));
    // show the address form when postal option is selected
    toggleHiddenForm(this, 'postal', hiddenForm);

  });

  // clearly define the selected option by adding selected class to it
  function addSelectedCheckboxClass(selectedCheckbox) {
    selectedCheckbox.parent().siblings().removeClass('selected');
    selectedCheckbox.parent().addClass('selected');
  }

  function toggleHiddenForm(selectedCheckbox, selectedCheckboxValue, hiddenForm) {
    if (selectedCheckbox.value == selectedCheckboxValue) {
      hiddenForm.slideDown();
      makeRequired(hiddenFormRequiredIds, true);
    } else {
      hiddenForm.slideUp();
      makeRequired(hiddenFormRequiredIds, false);
    }
  }

  function makeRequired(formFieldIds, makeRequired) {
    var i = 0;
    var numberOfFields = formFieldIds.length;

    for (i; i < numberOfFields; i++) {
      document.getElementById(formFieldIds[i]).required = makeRequired;
    }
  }

};

var formValidation = function() {

  // var prospectform = new FormValidator('prospectform');
  //

  var prospectform = new FormValidator('prospectform');

  prospectform.addValidation('fname', 'required', 5, 'is a required field');
  prospectform.addValidation('fname', 'minlength', 5, 'cannot be less than 5 characters');
  prospectform.addValidation('fname', 'maxlength', 20, 'cannot be more than 20 characters');

  prospectform.addValidation('lname', 'minlength', 5, 'cannot be less than 5 characters');
  prospectform.addValidation('lname', 'maxlength', 20, 'cannot be more than 20 characters');

  prospectform.init();
};

$(function() {
  checkboxFunctionality();
  formValidation();
});
