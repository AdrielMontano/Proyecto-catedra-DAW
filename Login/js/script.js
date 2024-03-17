document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('usuario').value;
        const password = document.getElementById('contraseña').value;

        // Aquí podrías realizar una solicitud AJAX para enviar las credenciales al servidor y validarlas.
        // Este es solo un ejemplo básico de validación en el lado del cliente.

        if (username === 'usuario' && password === 'contraseña') {
            // Login exitoso
            window.location.href = 'index.html'; // Redirigir a la página del dashboard
        } else {
            // Login fallido
            errorMessage.textContent = 'Invalid username or password.';
        }
    });
});
