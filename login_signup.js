

// Redirect to index.html when Sign In button is clicked
document.getElementById("signIn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    window.location.href = "index.html";  // Redirect to index.html
});

// Redirect to index.html when Sign Up button is clicked
document.getElementById("signUp").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    window.location.href = "index.html";  // Redirect to index.html
});
