const themeToggleButton = document.getElementById("theme-toggle");
const bodyElement = document.body;
const sunIcon = themeToggleButton.querySelector(".fa-sun");
const moonIcon = themeToggleButton.querySelector(".fa-moon");

themeToggleButton.addEventListener("click", function () {
    bodyElement.classList.toggle("dark-mode"); // Växla klassen

    // Växla ikoner
    if (bodyElement.classList.contains("dark-mode")) {
        moonIcon.style.display = "inline-block";
        sunIcon.style.display = "none";
    } else {
        moonIcon.style.display = "none";
        sunIcon.style.display = "inline-block";
    }
});