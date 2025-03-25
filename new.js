document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("studentCard").addEventListener("click", function () {
        window.location.href = "student/login.html"; // Redirect to Student Login Page
    });

    document.getElementById("controllerCard").addEventListener("click", function () {
        window.location.href = "controller/login.html"; // Redirect to Controller Login Page
    });
});
