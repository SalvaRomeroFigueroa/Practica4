function Interaccion() {
  window.location.href = "interaccion.html";
}
function Inicio() {
  window.location.href = "index.html";
}
var formulario = document.getElementById("formulario");

var resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    var nombre = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var edad = document.getElementById("edad").value;
    var pelicula = document.getElementById("movie").value;

    var contenidoResultado =
        "Nombre: " + nombre + "<br>" +
        "Email: " + email + "<br>" +
        "Edad: " + edad + "<br>" +
        "Pelicula: " + pelicula;

    resultado= contenidoResultado;

    formulario.reset();
});