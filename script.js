function darkmode() {
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = "css/darkmode.css";
    link.id = "dark-mode-css";
    document.getElementsByTagName("head")[0].appendChild(link);

    var darkModeButton = document.getElementById("dark-mode-button");
    darkModeButton.style.display = "none";
    var lightModeButton = document.getElementById("light-mode-button");
    lightModeButton.style.display = "block";
}

function lightmode() {
    var linkToRemove = document.getElementById("dark-mode-css");
    const body = document.getElementsByTagName("body");
    linkToRemove.parentNode.removeChild(linkToRemove);

    var lightModeButton = document.getElementById("light-mode-button");
    lightModeButton.style.display = "none";
    var darkModeButton = document.getElementById("dark-mode-button");
    darkModeButton.style.display = "block";
}