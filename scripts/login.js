document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordField = document.querySelector('input[type="password"]');
    const toggleIcon = document.querySelector('#togglePassword i');
    
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        passwordField.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
});

document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault();
    validateInput();
});
function setError(element, message){
    const parent = element.parentElement;
    const errorDisplay = parent.querySelector('.error');
    errorDisplay.innerHTML = message;
    element.style.border = '1px solid red';
}
function setSuccess(element){
    const parent = element.parentElement;
    const errorDisplay = parent.querySelector('.error');
    errorDisplay.innerHTML = '';
    element.style.border = '1px solid green';
}
function validateInput(){
    const emailField = document.querySelector('input[placeholder="Email"]');
    const passwordField = document.querySelector('input[placeholder="Mật khẩu"]');
    const email = emailField.value.trim();
    const password = passwordField.value.trim();
    let isValid = true; 
    const emailValidate = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ 
    setSuccess(emailField);
    setSuccess(passwordField);
    if(email === ''){
        isValid = false;
        setError(emailField,'Email không được để trống!');
    }
    else if(!emailValidate.test(email)){
        isValid = false
        setError(emailField, 'Email không hợp lệ!');
    }
    if(password === ''){
            isValid = false;
            setError(passwordField,'Mật khẩu không được để trống!');
        }
        else if(password.length < 6){
            setError(passwordField, 'Mật khẩu không hợp lệ!');
            isValid = false;
    }
    if(isValid){
        setTimeout(function(){
            window.location.href = 'home.html'
        },1000)
    }
}