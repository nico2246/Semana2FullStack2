document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formLogin');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtener valores
    const nombre = document.getElementById('nombreCompleto').value.trim();
    const usuario = document.getElementById('usuario').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const clave = document.getElementById('clave').value;
    const clave2 = document.getElementById('clave2').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const direccion = document.getElementById('direccion').value;

    // Elementos de error
    const errorNombre = document.getElementById('errorNombre');
    const errorUsuario = document.getElementById('errorUsuario');
    const errorCorreo = document.getElementById('errorCorreo');
    const errorClave = document.getElementById('errorClave');
    const errorClave2 = document.getElementById('errorClave2');
    const errorFecha = document.getElementById('errorFecha');
    const errorDireccion = document.getElementById('errorDireccion');

    // Limpiar errores anteriores
    [errorNombre, errorUsuario, errorCorreo, errorClave, errorClave2, errorFecha, errorDireccion].forEach(e => e.textContent = '');

    let valido = true;

    // Validaciones
    if (nombre === '') {
      errorNombre.textContent = 'El nombre completo es obligatorio.';
      valido = false;
    }

    if (usuario === '') {
      errorUsuario.textContent = 'El nombre de usuario es obligatorio.';
      valido = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
      errorCorreo.textContent = 'El correo no tiene un formato válido.';
      valido = false;
    }

    if (clave.length < 6 || clave.length > 18) {
      errorClave.textContent = 'La contraseña debe tener entre 6 y 18 caracteres.';
      valido = false;
    }

    const mayuscula = /[A-Z]/;
    const numero = /[0-9]/;
    if (!mayuscula.test(clave) || !numero.test(clave)) {
      errorClave.textContent = 'La contraseña debe contener al menos una mayúscula y un número.';
      valido = false;
    }

    if (clave !== clave2) {
      errorClave2.textContent = 'Las contraseñas no coinciden.';
      valido = false;
    }

    if (!fechaNacimiento) {
      errorFecha.textContent = 'Debes ingresar tu fecha de nacimiento.';
      valido = false;
    } else {
      const hoy = new Date();
      const fechaNac = new Date(fechaNacimiento);
      const edad = hoy.getFullYear() - fechaNac.getFullYear();
      const mes = hoy.getMonth() - fechaNac.getMonth();
      if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
        edad--;
      }

      if (edad < 13) {
        errorFecha.textContent = 'Debes tener al menos 13 años para registrarte.';
        valido = false;
      }
    }

    if (direccion === '') {
      errorDireccion.textContent = 'La dirección es obligatoria.';
      valido = false;
    }

    // Enviar si todo es válido
    if (valido) {
      alert('Formulario enviado correctamente.');
      form.submit(); 
    }
  });
});
