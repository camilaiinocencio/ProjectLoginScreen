//password-toggle.js

document.addEventListener('DOMContentLoaded', function () {
    const passwordField = document.querySelector('input[name="pass"]');
    const passwordToggle = document.querySelector('.password-toggle');

    passwordToggle.addEventListener('click', function () {
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);
        // Alterne o ícone do olho
        if (type === 'password') {
            passwordToggle.setAttribute('src', './icons/eye-fill.svg');
        } else {
            passwordToggle.setAttribute('src', './icons/eye-slash-fill.svg');
        }
    });
});
