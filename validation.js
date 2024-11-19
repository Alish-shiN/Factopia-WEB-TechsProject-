document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true;

    // Validate First Name
    const firstName = document.getElementById('firstName').value;
    if (firstName === '') {
        document.getElementById('firstNameError').innerText = 'Введите имя';
        isValid = false;
    } else {
        document.getElementById('firstNameError').innerText = '';
    }

    // Validate Last Name
    const lastName = document.getElementById('lastName').value;
    if (lastName === '') {
        document.getElementById('lastNameError').innerText = 'Введите фамилию';
        isValid = false;
    } else {
        document.getElementById('lastNameError').innerText = '';
    }

    // Validate Email
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = 'Введите корректный email';
        isValid = false;
    } else {
        document.getElementById('emailError').innerText = '';
    }

    // Validate Password
    const password = document.getElementById('password').value;
    if (password.length < 8) {
        document.getElementById('passwordError').innerText = 'Пароль должен содержать не менее 8 символов';
        isValid = false;
    } else {
        document.getElementById('passwordError').innerText = '';
    }

    // Validate Confirm Password
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (confirmPassword !== password) {
        document.getElementById('confirmPasswordError').innerText = 'Пароли не совпадают';
        isValid = false;
    } else {
        document.getElementById('confirmPasswordError').innerText = '';
    }

    // If valid, submit the form (you can replace this with your own logic)
    if (isValid) {
        alert('Форма успешно отправлена!');
        // Here you can handle the form submission (e.g., AJAX, redirect, etc.)
    }
});
