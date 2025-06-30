Array.from(document.getElementsByTagName('input')).forEach((e,i)=> {
    e.addEventListener('keyup',(el)=>{
        if(e.value.length > 0) {
            document.getElementsByClassName('bi-caret-down-fill')[i].style.transform="rotate(180deg)";
        } else {
            document.getElementsByClassName('bi-caret-down-fill')[i].style.transform="rotate(0deg)";
        }
    })
})
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

window.onload = function() {
    // Check if the user has already logged in or registered in the current session
    if (sessionStorage.getItem('welcomeMessage')) {
        // Display the welcome message if stored in session
        document.getElementById('welcomeMessage').innerHTML = sessionStorage.getItem('welcomeMessage');
    }

    // Event listener for the login button
    document.getElementById('loginBtn').addEventListener('click', function() {
        if (sessionStorage.getItem('welcomeMessage')) {
            // If the user is already logged in, display a pop-up message
            alert('You are already logged in.');
        } else {
            document.getElementById('loginPopup').style.display = 'block';
        }
    });

    // Event listener for the register button
    document.getElementById('registerBtn').addEventListener('click', function() {
        document.getElementById('registerPopup').style.display = 'block';
    });

    // Close login popup when clicking on close button
    document.getElementById('closeLogin').addEventListener('click', function() {
        document.getElementById('loginPopup').style.display = 'none';
    });

    // Close register popup when clicking on close button
    document.getElementById('closeRegister').addEventListener('click', function() {
        document.getElementById('registerPopup').style.display = 'none';
    });

    // Handle login form submission
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Capture the email input from the login form
        const username = document.getElementById('loginUsername').value;

        // Create the welcome message
        const welcomeMessage = `<h2>Hello ${username}, welcome Back!</h2>`;

        // Store the welcome message in sessionStorage
        sessionStorage.setItem('welcomeMessage', welcomeMessage);

        // Display the welcome message
        document.getElementById('welcomeMessage').innerHTML = welcomeMessage;

        // Close the login popup
        document.getElementById('loginPopup').style.display = 'none';
    });

    // Handle register form submission
    document.getElementById('RegisterForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Capture the username input from the register form
        const username = document.getElementById('registerusername').value;

        // Create the welcome message for registration
        const welcomeMessage = `<h2>Welcome to Experizite, ${username}!</h2>`;

        // Store the welcome message in sessionStorage
        sessionStorage.setItem('welcomeMessage', welcomeMessage);

        // Display the welcome message
        document.getElementById('welcomeMessage').innerHTML = welcomeMessage;

        // Close the register popup
        document.getElementById('registerPopup').style.display = 'none';
    });

    // Redirect from login to register form
    document.getElementById('goToRegister').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('loginPopup').style.display = 'none';
        document.getElementById('registerPopup').style.display = 'block';
    });

    // Redirect from register to login form
    document.getElementById('goToLogin').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('registerPopup').style.display = 'none';
        document.getElementById('loginPopup').style.display = 'block';
    });
};