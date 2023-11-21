//PARALLAX
window.addEventListener("scroll", function () {
  let offset = window.scrollY;
  document.getElementById("home").style.backgroundPositionY =
    offset * -0.7 + "px";
  document.getElementById("about-me").style.backgroundPositionY =
    offset * 0.5 + "px";
  document.getElementById("contact").style.backgroundPositionY =offset * 0.5 + "px";
  document.getElementById("resume").style.backgroundPositionY =offset * (0.5) + "px";

});


const $form = document.getElementById("form");
const $btnEnviar = document.getElementById("btn-Enviar");
$btnEnviar.addEventListener("click", event=> enviarFormulario(event));

function enviarFormulario(event) {
event.preventDefault();
  let nombre = document.getElementById("nombre").value;
  let email = document.getElementById("email").value;
  let mensaje = document.getElementById("mensaje").value;
  if (nombre == ""||email==""||mensaje == "") {
    alert("¡Alerta!\nAlguno de los campos del formulario se encuentra vacío. Por favor, complete todos los campos antes de enviar el formulario.");
  } else {
    alert(
      "Formulario enviado:\nNombre: " +
        nombre +
        "\nCorreo Electrónico: " +
        email +
        "\nMensaje: " +
        mensaje
    );
    setTimeout(() => {
        $form.reset();
    }, 500);
    
     }
}
