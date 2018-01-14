function showmenu() {
    var x = document.getElementById("nav-list");
    if (x.classList.contains ("nav-list--active")) {
        x.classList.remove("nav-list--active");
    } else {
         x.classList.add("nav-list--active");
    }
}
