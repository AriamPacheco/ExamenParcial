
const $usuario = $("#usuario");
const $password = $("#password");

const credenciales = {
    usuario: "UCH2024",
    pass: "123456"
};

$("#login").on("click", function(){
    const valueUsuario = $usuario.val();
    const valuePassword = $password.val();
    if (valueUsuario === credenciales.usuario && valuePassword === credenciales.pass) {
        sessionStorage.setItem("sesionActiva", true);
        location.href = "dashboard_usuario.html";
    } else {
        if (valueUsuario !== credenciales.usuario) {
            Swal.fire({
                title: "ERROR",
                text: "Usuario no encontrado",
                icon: "error"
            });
        } else {
            Swal.fire({
                title: "ERROR",
                text: "Contraseña incorrecta",
                icon: "error"
            });
        }
    }
});

$(document).ready(function(){
    const sesionActiva = sessionStorage.getItem("sesionActiva");
    if (sesionActiva = true) {
        window.location.href = "dashboard_usuario.html";
    }});
