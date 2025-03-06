const signupButton = document.getElementById("signupBtn");
const signinButton = document.getElementById("signinBtn");
const signupForm = document.getElementById("signup");
const signinForm = document.getElementById("signin");

signupButton.addEventListener("click", function() {
    signupForm.style.display = "block";
    signinForm.style.display = "none";
})
signinButton.addEventListener("click", function() {
    signupForm.style.display = "none";
    signinForm.style.display = "block";
})