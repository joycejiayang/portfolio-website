const colorModeButton = document.getElementById("color-mode-button");

const lightModeImg = document.createElement("img");
lightModeImg.src = "assets/cyan-ball.png";
lightModeImg.alt = "Click to switch to dark mode";

const darkModeImg = document.createElement("img");
darkModeImg.src = "assets/purple-ball.png";
darkModeImg.alt = "Click to switch to light mode";

function persistDarkMode() {
    if (localStorage.getItem("currTheme") === "dark") {
        darkmode();
    }
}

function setUpColorModeButton() {
    colorModeButton.addEventListener("click", function() {
        if (document.body.classList.contains("dark")) {
            lightmode();
        } else {
            darkmode();
        }
    });
}

function lightmode() {
    document.body.classList.toggle("dark");
    let currButtonImg = colorModeButton.children[0];
    colorModeButton.replaceChild(lightModeImg, currButtonImg);
    localStorage.setItem("currTheme", "default");
}

function darkmode() {
    document.body.classList.toggle("dark");
    let currButtonImg = colorModeButton.children[0];
    colorModeButton.replaceChild(darkModeImg, currButtonImg);
    localStorage.setItem("currTheme", "dark");
}

persistDarkMode();
setUpColorModeButton();