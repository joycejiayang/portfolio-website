const colorModeButton = document.getElementById("color-mode-button");

function setUpColorModeButton() {
    colorModeButton.addEventListener("click", function() {
        if (document.body.classList.contains("dark")) {
            lightmode();
        } else {
            darkmode();
        }
        document.body.classList.toggle("dark");
    });
    
}

function lightmode() {
    let currButtonImg = colorModeButton.children[0];
    let newButtonImg = document.createElement("img");
    newButtonImg.src = "assets/cyan-ball.png";
    newButtonImg.alt = "Click to switch to dark mode";
    colorModeButton.replaceChild(newButtonImg, currButtonImg);
    localStorage.setItem("currTheme", "default");
}

function darkmode() {
    let currButtonImg = colorModeButton.children[0];
    let newButtonImg = document.createElement("img");
    newButtonImg.src = "assets/purple-ball.png";
    newButtonImg.alt = "Click to switch to light mode";
    colorModeButton.replaceChild(newButtonImg, currButtonImg);
    localStorage.setItem("currTheme", "dark");
}

setUpColorModeButton();