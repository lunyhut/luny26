
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    validateInput();
});
function validateInput(){
    const emailField = document.querySelector('input[placeholder="Email"]');
    const passwordField = document.querySelector('input[placeholder="Mật khẩu"]');
    const rePasswordField = document.querySelector('input[placeholder="Nhập lại mật khẩu"]');
    const success = document.querySelector('.success');
    const email = emailField.value.trim();
    const password = passwordField.value.trim();
    const rePassword = rePasswordField.value.trim()
    let isValid = true
    const emailValidate = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ 
    setSuccess(emailField);
    setSuccess(passwordField);
    setSuccess(rePasswordField)
    if(email === ''){
        setError(emailField,"Vui lòng nhập email!");
        isValid = false;
    }
    else if (!emailValidate.test(email)){
        setError(emailField,"Email không hợp lệ!");
        isValid = false;
    }
    if(password === ''){
        setError(passwordField,"Vui lòng nhập mật khẩu!");
        isValid = false;
    }
    else if (password.length < 6){
        setError(passwordField,"Mật khẩu phải chứa ít nhất 6 kí tự!");
        isValid = false;
    }
    if(rePassword === ''){
        setError(rePasswordField,"Vui lòng nhập lại mật khẩu!");
        isValid = false;
    }
    else if (rePassword !== password){
        setError(rePasswordField,"Mật khẩu nhập lại không khớp!");
        isValid = false;
    }
    if(isValid){
        success.innerHTML = 'Tạo tài khoản thành công!';
        setTimeout(function(){
            window.location.href = 'login.html'
        },3000)
    }
}
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
document.getElementById('toggleRePassword').addEventListener('click', function() {
    const passwordField = document.querySelector('input[type="password"]');
    const toggleIcon = document.querySelector('#toggleRePassword i');
    
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
