// Get references to the forms and popup
var step1Form = document.getElementById('step1');
var step2Form = document.getElementById('step2');
var popup = document.querySelector('.popup');
var inner = document.getElementById('inner')

// Add event listener to Step 1 form submit
step1Form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
// Validate Step 1 form fields
  var name = step1Form.elements.name.value.trim();
  var user = step1Form.elements.user.value.trim();
  var work = step1Form.elements.work.value.trim();
  var mail = step1Form.elements.mail.value.trim();
  var age = step1Form.elements.age.value.trim();
  var gender = step1Form.elements.gender.value;

  if (name === '' || user === '' || work === '' || mail === '' || age === '' || gender === '') {
    alert('Please fill in all the required fields.');
    return;
  }

// Hide Step 1 form
  step1Form.style.display = 'none';
  
// Show Step 2 form
  step2Form.style.display = 'flex';
});

// Add event listener to Step 2 form submit
step2Form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
// Get selected genres
var genres = [];
var checkboxes = step2Form.elements.genre;
const languageSelect = document.getElementById('Language');
const radioButtons = document.getElementsByName("option");
    let isChecked = false;
for (var i = 0; i < checkboxes.length; i++) {
  if (checkboxes[i].checked) {
    genres.push(checkboxes[i].value);
  }
}
if (genres.length === 0) {
  alert('Please select at least one genre.');
  return;
}
if (languageSelect.value === '') {
  alert('Please select a language');
  return;
}
for (const radioButton of radioButtons) {
  if (radioButton.checked) {
      isChecked = true;
      break;
  }
}
  if (!isChecked) {
      alert("Please select one option (E-book, Hard-Copy, or Both).");
      return false; // Prevent form submission
  }

// Hide Step 2 form
  step2Form.style.display = 'none';
  inner.style.display = 'none';

// Show popup with personalized message
  var name = document.getElementById('fullname').value.trim();
  var userNameElement = document.getElementById('message');
  userNameElement.textContent = '' + name + ', Your CHAPTER account was created succesfully. click the close button to go to the main page. ';
  popup.style.display = 'flex';
});

// Add event listener to close button in popup
var closeButton = popup.querySelector('.close_popup button');
closeButton.addEventListener('click', function() {

// Close the popup and redirect to main page
  popup.style.display = 'none';
  window.location.href = '../html/Home.html';
});