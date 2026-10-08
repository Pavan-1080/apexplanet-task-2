// Switch to Login
function showLogin() {

    document.getElementById("loginForm").classList.remove("d-none");

    document.getElementById("registerForm").classList.add("d-none");

}


// Switch to Registration
function showRegister() {

    document.getElementById("registerForm").classList.remove("d-none");

    document.getElementById("loginForm").classList.add("d-none");

}


// Show / Hide Password
function togglePassword(inputId, button) {

    const input = document.getElementById(inputId);
    const icon = button.querySelector("i");

    if (input.type === "password") {

        input.type = "text";

        icon.classList.remove("bi-eye");
        icon.classList.add("bi-eye-slash");

    } else {

        input.type = "password";

        icon.classList.remove("bi-eye-slash");
        icon.classList.add("bi-eye");

    }

}


// LOGIN VALIDATION
document.getElementById("loginFormElement").addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    if (!email || !password) {

        alert("Please fill in all fields.");

        return;

    }

    if (!email.includes("@")) {

        alert("Please enter a valid email address.");

        return;

    }

    alert("Login validation successful!");

});


// REGISTRATION VALIDATION
document.getElementById("registerFormElement").addEventListener("submit", function(event) {

    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("registerEmail").value.trim();

    const password = document.getElementById("registerPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const terms = document.getElementById("terms").checked;


    if (username.length < 3) {

        alert("Username must contain at least 3 characters.");

        return;

    }


    if (!email.includes("@")) {

        alert("Please enter a valid email address.");

        return;

    }


    if (password.length < 6) {

        alert("Password must contain at least 6 characters.");

        return;

    }


    if (password !== confirmPassword) {

        alert("Passwords do not match.");

        return;

    }


    if (!terms) {

        alert("Please accept the Terms & Conditions.");

        return;

    }


    alert("Registration successful!");

});


// AJAX USERNAME CHECK
document.getElementById("username").addEventListener("keyup", function() {

    const username = this.value.trim();

    const status = document.getElementById("usernameStatus");

    if (username.length < 3) {

        status.textContent = "";

        return;

    }


    fetch("check.php?username=" + encodeURIComponent(username))

        .then(response => response.text())

        .then(data => {

            status.textContent = data;

        })

        .catch(() => {

            // GitHub Pages fallback
            status.textContent = "Username availability check ready.";

        });

});


// AJAX EMAIL CHECK
document.getElementById("registerEmail").addEventListener("change", function() {

    const email = this.value.trim();

    const status = document.getElementById("emailStatus");

    if (!email.includes("@")) {

        status.textContent = "Enter a valid email.";

        status.style.color = "#f87171";

        return;

    }


    fetch("check.php?email=" + encodeURIComponent(email))

        .then(response => response.text())

        .then(data => {

            status.textContent = data;
            status.style.color = "#a78bfa";

        })

        .catch(() => {

            status.textContent = "Email availability check ready.";
            status.style.color = "#a78bfa";

        });

});