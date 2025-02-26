document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector("ul");
    const navToggle = document.createElement("button");
    
    navToggle.textContent = "☰";
    navToggle.classList.add("nav-toggle");
    document.querySelector("nav").prepend(navToggle);

    navToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });

    const signInBtn = document.querySelector(".sign-in");
    const signUpBtn = document.querySelector(".sign-up");

    signInBtn.addEventListener("click", function () {
        alert("Sign In form coming soon!");
    });

    signUpBtn.addEventListener("click", function () {
        alert("Sign Up form coming soon!");
    });

    const darkModeToggle = document.createElement("button");
    darkModeToggle.textContent = "🌙";
    darkModeToggle.classList.add("dark-mode-toggle");
    document.querySelector("nav").appendChild(darkModeToggle);

    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
});