var darkModeButton = document.getElementById("dark-mode-button");
var lightModeButton = document.getElementById("light-mode-button");

function darkmode() {
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = "css/darkmode.css";
    link.id = "dark-mode-css";
    document.getElementsByTagName("head")[0].appendChild(link);

    darkModeButton.style.display = "none";
    lightModeButton.style.display = "block";
}

function lightmode() {
    var linkToRemove = document.getElementById("dark-mode-css");
    const body = document.getElementsByTagName("body");
    linkToRemove.parentNode.removeChild(linkToRemove);

    lightModeButton.style.display = "none";
    darkModeButton.style.display = "block";
}