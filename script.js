document.addEventListener("DOMContentLoaded", () => {

    /* 1. Register Page: Form Validation */
    const form = document.querySelector(".register-form form");
    if (form) {
        const username = document.getElementById('username')
        const email = document.getElementById('email')
        const dob = document.getElementById('dob')
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirm-password');
        const agreement = document.getElementById('agree')
        
        function validateRegister(event){
            event.preventDefault();

            let valid = true;

            if (username.value.length < 8) {
                valid = false;
                alert('Username must be at least 8 characters!');
            } else if (!email.value.endsWith('@gmail.com')) {
                valid = false;
                alert('Email must end with @gmail.com!');
            } else if(!dob.value){
                valid = false;
                alert('Date of birth must be selected!');
            } else if (password.value.length < 8) {
                valid = false;
                alert('Password must be at least 8 characters.');
            } else if(!isAlphaNum(password.value)){
                valid = false;
                alert('Your password must be alphanumeric — use both letters and numbers.');
            } else if (password.value !== confirmPassword.value) {
                valid = false;
                alert('Passwords do not match.');
            } else if (!agreement.checked){
                valid = false;
                alert('Agreement must be checked');
            }

            if (valid) {
                alert('Form successfully register!');
                window.location.href = "index.html";
            }
        }

        function isAlphaNum(password){
            let isAlpha = false;
            let isNum = false;

            for(let i = 0; i < password.length; i++){
                if(isNaN(password[i])){
                    isAlpha = true
                } else {
                    isNum = true
                }
            }
            return isAlpha && isNum
        }
    
        form.addEventListener("submit", validateRegister)
    }

    /* 2. Mobile Navigation Scroll Fix */
    const navLinks = document.querySelectorAll("nav a[href^='#']");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
