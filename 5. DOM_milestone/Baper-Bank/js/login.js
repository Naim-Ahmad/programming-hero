const email = 'rafiqulislam@gmail.com';
const password = 'mamun201103';
document
  .getElementById('btn-submit')
  .addEventListener('click', function (event) {
    event.preventDefault();
    const inputEmail = document.getElementById('email').value.trim();
    const inputPassword = document.getElementById('password').value.trim();
    if (inputEmail == '') {
      alert('Please Enter Your Email!');
    } else if (inputPassword == '') {
      alert('Please Enter Your password!');
    }
    if (email === inputEmail && password === inputPassword) {
      location.href = 'bank.html';
    } else {
      console.log('invalid');
    }
  });
