document.getElementById("registerForm").addEventListener("submit", function(e) {

    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let user = {
        name: name,
        email: email,
        password: password
    };

    // Get existing users
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Push new user
    users.push(user);

    // Store back to localStorage
    localStorage.setItem("users", JSON.stringify(users));

    // AJAX POST Method
    let xhr = new XMLHttpRequest();

    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(JSON.stringify(user));

    alert("Registration Successful");

    // Redirect to new page
    window.location.href = "users.html";

});