const signinTab = document.getElementById("signin-tab");
const signupTab = document.getElementById("signup-tab");

signinTab.addEventListener("click", () => {
    signinTab.classList.add("active");
    signupTab.classList.remove("active");
});

signupTab.addEventListener("click", () => {
    signupTab.classList.add("active");
    signinTab.classList.remove("active");
});
