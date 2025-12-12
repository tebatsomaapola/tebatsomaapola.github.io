
// Toggle dropdown menu
function toggleMenu() {
    document.getElementById("dropdown").classList.toggle("show");
}

document.getElementById("menuButton").addEventListener("click", toggleMenu);

// Close menu when clicking outside
window.addEventListener("click", function(e) {
    if (!e.target.matches('.menu-toggle')) {
        const menu = document.getElementById("dropdown");
        if (menu.classList.contains('show')) {
            menu.classList.remove('show');
        }
    }
});
