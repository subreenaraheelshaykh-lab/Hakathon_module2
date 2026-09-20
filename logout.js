// Logout button
const logoutBtn = document.querySelector("#logout-btn");

logoutBtn.addEventListener("click", function (event) {

    event.preventDefault();

    // Logout ke baad login page par
    window.location.href = "login.html";

});