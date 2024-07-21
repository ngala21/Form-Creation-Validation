// Form Selection
  const form = document.getElementById('registration-form');

// Feedback Div Selection
let feedbackDiv = document.getElementById('form-feedback');  

// Ensures JavaScript runs after entire HTML is loaded
form.addEventListener ('submit', function(event) {
  event.preventDefault(); //Prevents form from auto-submitting..

  // Step 2
  // Input Retrieval and Trimming (RT)
  
  // Username RT
  const username = document.getElementById('username').value.trim();

   // Email RT
   const email = document.getElementById('email').value.trim();

   // Password RT
   const password = document.getElementById('password').value.trim();

   //  Validation Logic 
   // 1. Initialize Validation Variables
    // overall validation status
    let isValid = true;

    //  Array to store validation error messages
    const messages = [];

   // 2. Username Validation
    if(username.length < 3) {
      isValid = false;
      let usernameError = username.innerHTML = 'Username must be at least 3 characters long';
    } 
   // 3. Email Validation
    if(!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/) {
      isValid = false;
      let emailError = email.innerHTML = 'Please enter a valid email address';
     }

   // 4. Password Validation
   if (password.length < 8) {
    isValid = false;
    let passwordError = password.innerHTML = 'Password must  be at least 8 characters long';
   }

  //  Displaying logic
   feedbackDiv.style.display = 'block';

   if (isValid === true) {
    feedbackDiv.textContent = 'Registration Successful';
    feedbackDiv.style.color = '#28a745';
   }else {
    // feedbackDiv.innerHTML ='usernameError + emailError + password Error';
    feedbackDiv.style.color = '#dc3545';
   } 
});







