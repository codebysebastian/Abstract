const dropdownMenu = document.getElementById("dropdown-menu");
const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");

menuOpen.addEventListener("click", function () {
    menuOpen.style.display = "none"
    menuClose.style.display = "block";
    dropdownMenu.style.display = "flex";
});

menuClose.addEventListener("click", function () {
    menuClose.style.display = "none";
    menuOpen.style.display = "block";
    dropdownMenu.style.display = "none";
});



