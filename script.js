function toggleMenu() {
    var menu = document.getElementById("navMenu");
    menu.style.display = (menu.style.display === "none" || menu.style.display === "") ? "flex" : "none";
}

function closeMenu() {
    document.getElementById("navMenu").style.display = "none";
}