const signupButton = document.getElementById("signupBtn");
const signinButton = document.getElementById("signinBtn");
const signupForm = document.getElementById("signup");
const signinForm = document.getElementById("signin");

signupButton.addEventListener("click", function() {
    signupForm.style.display = "block";                                                                                //style.display property controls whether the form is visible or not
    signinForm.style.display = "none";
})
signinButton.addEventListener("click", function() {
    signupForm.style.display = "none";                                                         //once the signinBtn clicked the sign in form is displayed and sign in form is hidden
    signinForm.style.display = "block";
})