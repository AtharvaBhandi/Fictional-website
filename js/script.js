// Get the form and input elements
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const contactInput = document.getElementById('contact');

// Add an event listener to the form for submission
form.addEventListener('submit', (event) => {
  // Prevent the form from submitting
  event.preventDefault();
  
  // Get the values of the inputs
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const contact = contactInput.value.trim();

  // Define a regular expression to validate the email address
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Define a regular expression to validate the contact number
  const contactRegex = /^[0-9]{10}$/;

  // Define a variable to track if there are any validation errors
  let hasError = false;

  // Validate the name field
  if (name === '') {
    // Display an error message and set the hasError flag
    nameInput.nextElementSibling.textContent = 'Please enter your name.';
    hasError = true;
  } else {
    // Clear any existing error message
    nameInput.nextElementSibling.textContent = '';
  }

  // Validate the email field
  if (email === '') {
    // Display an error message and set the hasError flag
    emailInput.nextElementSibling.textContent = 'Please enter your email address.';
    hasError = true;
  } else if (!emailRegex.test(email)) {
    // Display an error message and set the hasError flag
    emailInput.nextElementSibling.textContent = 'Please enter a valid email address.';
    hasError = true;
  } else {
    // Clear any existing error message
    emailInput.nextElementSibling.textContent = '';
  }

  // Validate the contact field
  if (contact === '') {
    // Display an error message and set the hasError flag
    contactInput.nextElementSibling.textContent = 'Please enter your contact number.';
    hasError = true;
  } else if (!contactRegex.test(contact)) {
    // Display an error message and set the hasError flag
    contactInput.nextElementSibling.textContent = 'Please enter a valid 10-digit contact number.';
    hasError = true;
  } else {
    // Clear any existing error message
    contactInput.nextElementSibling.textContent = '';
  }

  // If there are no errors, submit the form
  if (!hasError) {
    form.submit();
  }
});
