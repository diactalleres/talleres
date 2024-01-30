// registerHandler.js
document.addEventListener('DOMContentLoaded', function () {
    var formulario = document.getElementById('registroForm');
    var botonRegistro = document.querySelector('.registrarTaller');

    formulario.addEventListener('submit', function (event) {
        event.preventDefault();
        var taller = formulario.getAttribute('data-taller');
        var nombre = document.getElementById('name').value;
        var correo = document.getElementById('email').value;
        var csvData = nombre + ',' + correo + ',' + taller + '\n';

        var enlaceDescarga = document.createElement('a');
        enlaceDescarga.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvData);
        enlaceDescarga.target = '_blank';
        enlaceDescarga.download = 'datos_usuario.csv';

        document.body.appendChild(enlaceDescarga);
        enlaceDescarga.click();
        document.body.removeChild(enlaceDescarga);
    });
});
