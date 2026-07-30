(function () {
    const navbar = document.querySelector("#navbar");
    const hamburger = document.querySelector("#hamburger");

    hamburger.addEventListener("click", function () {
        navbar.classList.toggle("open");
    });
})();

const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Formulario enviado");
});
const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Formulario enviado");
});