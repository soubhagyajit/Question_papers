
setTimeout(function () {
    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");
 
        console.log("Trigered");
        const authModal = document.getElementById("auth-modal");
        const authForm = document.getElementById("auth-form");
        const passwordInput = document.getElementById("password");

        const ENV_PASSWORD_HASH = "478669c7fa549970e36eac591cdca62e";
        function loadCryptoJS(callback) {
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js';
            script.onload = callback;
            document.head.appendChild(script);
        }
        loadCryptoJS();
        // Check authentication status
        function checkAuth() {
            const storedPasswordHash = localStorage.getItem("authPasswordHash");
            if (storedPasswordHash !== ENV_PASSWORD_HASH) {
                authModal.style.display = "flex";
            }
        }
        // Handle form submission
        authForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const enteredPassword = passwordInput.value;
            const enteredPasswordHash = CryptoJS.MD5(enteredPassword).toString();

            if (enteredPasswordHash === ENV_PASSWORD_HASH) {
                localStorage.setItem("authPasswordHash", enteredPasswordHash);
                authModal.style.display = "none";
            } else {
                alert("Incorrect password!");
            }
        });

        checkAuth();
  
    // Add event listener to the menu button
    menuBtn.addEventListener("click", function () {
        // Toggle the visibility of the navigation links
        navLinks.classList.toggle("hidden");
    });
}, 500);
