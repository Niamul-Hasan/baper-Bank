document.getElementById('login-buton').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    const passField = document.getElementById('user-pass');
    const userPass = passField.value;
    if (userEmail == 'sontan@abba.mail' && userPass == 'bolbona') {
        window.location.href = "banking.html";
    }
})