document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.querySelector('.create-btn');
    const errorLabel = document.querySelector('.error-label');
  
    function validateEmail(email) {
      if (email.indexOf('@') == -1 || email.indexOf('.com') == -1) return false;
      return true;
    }
  
    function validatePhone(phoneNum) {
      for (let i = 0; i < phoneNum.length ; i++) {
        if (phoneNum.charAt(i) < '0' || phoneNum.charAt(i) > '9') return false;
      }
      return true;
    }
  
    function validatePassword(pw) {
      if (pw.length < 8) return false;
      return true;
    }
  
    submitBtn.addEventListener('click', (event) => {
  
      var firstName = document.querySelector('#first-name').value;
      var lastName = document.querySelector('#last-name').value;
      var email = document.querySelector('#email').value;
      var phone = document.querySelector('#number').value;
      var gender = document.querySelector('input[name="gender"]:checked');
      var password = document.querySelector('#password').value;
      var agree = document.querySelector('#agree')
  
      if (firstName  === ''|| lastName  === ''|| email  === ''|| phone  === ''|| gender  === ''|| password === '') {
        errorLabel.innerHTML = 'Please fill all fields!';
      } 
      else if (!validateEmail(email)) {
        errorLabel.innerHTML = 'The email you provided is not in the correct format!';
      } 
      else if (!validatePhone(phone)) {
        errorLabel.innerHTML = 'The phone number you provided is not in the correct format!';
      } 
      else if (!validatePassword(password)) {
        errorLabel.innerHTML = 'Password must be at least 8 characters!';
      }
      else if (!agree.checked) errorLabel.innerHTML = "Please check the agree to terms & conditions box"
      else {
        errorLabel.style.color = 'green';
        errorLabel.innerHTML = 'Account succesfully created!';
      }
    });
  });