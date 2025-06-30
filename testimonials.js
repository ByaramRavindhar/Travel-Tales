document.addEventListener('DOMContentLoaded', function () {
    const reviewsContainer = document.getElementById('reviewsContainer');
    const leftArrow = document.getElementById('leftArrow');
    const rightArrow = document.getElementById('rightArrow');
    const reviewElements = document.querySelectorAll('.review');
    const reviewWidth = reviewElements[0].offsetWidth + 15; // Including margin-right
    const containerWidth = reviewsContainer.offsetWidth;
    let scrollPosition = 0;

    rightArrow.addEventListener('click', function () {
        if (scrollPosition + containerWidth < reviewWidth * reviewElements.length) {
            scrollPosition += reviewWidth;
            reviewsContainer.scrollLeft += reviewWidth;
        } else {
            scrollPosition = 0;
            reviewsContainer.scrollLeft = 0; // Reset to the beginning
        }
    });

    leftArrow.addEventListener('click', function () {
        if (scrollPosition > 0) {
            scrollPosition -= reviewWidth;
            reviewsContainer.scrollLeft -= reviewWidth;
        } else {
            scrollPosition = reviewWidth * (reviewElements.length - Math.floor(containerWidth / reviewWidth));
            reviewsContainer.scrollLeft = scrollPosition; // Jump to the last set of visible reviews
        }
    });
});
var loginPopup = document.getElementById("loginPopup");
var registerPopup = document.getElementById("registerPopup");

// Get buttons
var loginBtn = document.getElementById("loginBtn");
var registerBtn = document.getElementById("registerBtn");

// Get close buttons
var closeLogin = document.getElementById("closeLogin");
var closeRegister = document.getElementById("closeRegister");

// Open Login Popup
loginBtn.onclick = function() {
    loginPopup.style.display = "block";
}

// Open Register Popup
registerBtn.onclick = function() {
    registerPopup.style.display = "block";
}

// Close Login Popup
closeLogin.onclick = function() {
    loginPopup.style.display = "none";
}

// Close Register Popup
closeRegister.onclick = function() {
    registerPopup.style.display = "none";
}

// Transition from Login to Register
var goToRegister = document.getElementById("goToRegister");
goToRegister.onclick = function() {
    loginPopup.style.display = "none";
    registerPopup.style.display = "block";
}

// Close popups if user clicks outside of them
window.onclick = function(event) {
    if (event.target == loginPopup) {
        loginPopup.style.display = "none";
    }
    if (event.target == registerPopup) {
        registerPopup.style.display = "none";
    }
}

document.getElementById("goToLogin").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default link action
    document.getElementById("registerPopup").style.display = "none"; // Hide register form
    document.getElementById("loginPopup").style.display = "block"; // Show login form
});

// Close the Login form
document.getElementById("closeLogin").addEventListener("click", function() {
    document.getElementById("loginPopup").style.display = "none";
});
