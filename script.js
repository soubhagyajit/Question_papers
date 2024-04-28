

setTimeout(function () {
    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");

    // Add event listener to the menu button
    menuBtn.addEventListener("click", function () {
        // Toggle the visibility of the navigation links
        navLinks.classList.toggle("hidden");
    });
}, 500);
