document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("studentCard").addEventListener("click", function () {
        window.location.href = "ES_main_page.html"; // Redirect to Student Login Page
    });

    document.getElementById("controllerCard").addEventListener("click", function () {
        window.location.href = "controller_main_page.html"; // Redirect to Controller Login Page
    });
});
