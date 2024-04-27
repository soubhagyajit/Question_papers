
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");
    console.log("JavaScript loaded");

    // Add event listener to the menu button
    menuBtn.addEventListener("click", function () {
        console.log("Menu button clicked"); // Log a message to the console
        // Toggle the visibility of the navigation links
        navLinks.classList.toggle("hidden");
    });


});
