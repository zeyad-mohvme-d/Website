function create() {
    const username = document.getElementById('name').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        // Save the username and password to localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        alert("Registration successful! Welcome " + username);
        window.location.href = '/index.html'
    } else {
        alert("Please fill in both fields.");
    }
}