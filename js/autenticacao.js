document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("login-form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");

    function showError(element, message) {
        element.textContent = message;
        element.style.display = "block"; 
        element.style.opacity = "1"; 

        setTimeout(() => {
            element.style.opacity = "0";
            setTimeout(() => {
                element.style.display = "none";
            }, 1000);
        }, 4000);
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        let hasError = false;

        emailError.style.display = "none";
        passwordError.style.display = "none";

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            showError(emailError, "Email inválido. Use um formato válido (ex: usuario@email.com).");
            hasError = true;
        }

        if (passwordInput.value.length < 6) {
            showError(passwordError, "A senha deve ter pelo menos 6 caracteres.");
            hasError = true;
        }

        if (!hasError) {
            form.submit();
        }
    });
});