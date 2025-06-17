document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.link');
    const contentItems = document.querySelectorAll('.content-item');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor click behavior

            // Hide all content items
            contentItems.forEach(item => item.style.display = 'none');

            // Show the clicked content
            const contentId = link.getAttribute('data-content');
            document.getElementById(contentId).style.display = 'block';
        });
    });
});
document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.content-item').forEach(item => {
            item.style.display = 'none';
            item.classList.remove('active');
        });
        const contentId = this.getAttribute('data-content');
        const activeContent = document.getElementById(contentId);
        activeContent.style.display = 'flex';
        activeContent.classList.add('active');
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
