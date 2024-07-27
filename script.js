// Ensures JavaScript runs after entire HTML is loaded
document.addEventListener ("DOMContentLoaded", () =>  {
  
  // Form Selection
  const form = document.getElementById('registration-form');

  // Feedback Selection
  const feedbackDiv = document.getElementById('form-feedback'); 

  // Adding Event Listener to form
  form.addEventListener('submit', function(event) {
    //Prevents form from auto-submitting..
    event.preventDefault();

  // Step 2
  // Input Retrieval and Trimming (RT)
  
  // Username RT
  const username = document.getElementById('username').value.trim();

   // Email RT
   const email = document.getElementById('email').value.trim();

   // Password RT
   const password = document.getElementById('password').value.trim();

   //  Validation Logic 

    //  Initialize Validation Variables
    // verall validation status
    let isValid = true;

    //  Array to store validation error messages
    let messages = [];

   // 1. Username Validation
    if (username.length < 3) {
      isValid = false;
      messages.push('Username must be at least 3 characters long');
    }

   // 2. Email Validation
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email.value)) {
      isValid = false;
      messages.push('Please enter a valid email address');
     } 

   // 3. Password Validation
   if (password.length < 8) {
    isValid = false;
    messages.push('Password must be at least 8 characters long.');
   }


  //  Displaying logic
   feedbackDiv.style.display = 'block';
  
  //  Displaying Feedback
    if (isValid === true) {
      feedbackDiv.textContent = "Registration Successful";
      feedbackDiv.style.color = '#28a745';
     } else (isValid === false) {
      feedbackDiv.innerHTML = messages.join('<br>'); 
      feedbackDiv.style.color = '#dc3545';
     } 
});
});







