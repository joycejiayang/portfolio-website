var darkModeButton = document.getElementById("dark-mode-button");
var lightModeButton = document.getElementById("light-mode-button");

if(localStorage.getItem("currTheme") === "dark") {
    darkmode();
}

function darkmode() {
    const theme = "dark";
    document.body.classList.toggle(theme);
    localStorage.setItem("currTheme", theme);

    darkModeButton.style.display = "none";
    lightModeButton.style.display = "block";
}

function lightmode() {
    const theme = "dark";
    document.body.classList.toggle(theme);
    localStorage.setItem("currTheme", "default");

    lightModeButton.style.display = "none";
    darkModeButton.style.display = "block";
}