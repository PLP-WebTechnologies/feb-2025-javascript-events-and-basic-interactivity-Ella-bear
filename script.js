document.addEventListener('DOMContentLoaded', () => {
    const changeTextButton = document.getElementById('changeTextButton');
    const colorChangeBox = document.getElementById('colorChange');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const tabButtons = document.querySelectorAll('.tab-button');

    // Event Handling
    changeTextButton.addEventListener('click', () => {
        changeTextButton.textContent = "You Clicked Me!";
        colorChangeBox.style.backgroundColor = colorChangeBox.style.backgroundColor === 'lightblue' ? 'lightgreen' : 'lightblue';
    });

    changeTextButton.addEventListener('dblclick', () => {
        alert("Double Clicked!");
    });

    changeTextButton.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        alert("Long Press Detected!");
    });



    // Form Validation
    emailInput.addEventListener('input', () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        emailError.textContent = emailPattern.test(emailInput.value) ? '' : 'Invalid email format';
    });

    passwordInput.addEventListener('input', () => {
        passwordError.textContent = passwordInput.value.length >= 8 ? '' : 'Password must be at least 8 characters';
    });

    document.getElementById('myForm').addEventListener('submit', (e) => {
        if (emailError.textContent || passwordError.textContent) {
            e.preventDefault(); // Prevent form submission if there are errors
            alert("Please fix the errors before submitting.");
        }
    });
});