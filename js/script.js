document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('usuario').value;
        const password = document.getElementById('contraseña').value;

        if (username === 'steven' && password === 'AM230134') {
   
            window.location.href = 'index.html'; 
        }
        if (username === 'michael' && password === 'contraseña') {
   
            window.location.href = 'index.html'; 
        } 
        if (username === 'adriel' && password === 'ML232940') {
         
            window.location.href = 'index.html'; 
        } 
        if (username === 'jesus' && password === 'SS233210') {
           
            window.location.href = 'index.html';
        } 
        if (username === 'xenia' && password === 'contraseña') {
           
            window.location.href = 'index.html'; 
        }  else {
           
            errorMessage.textContent = 'Invalid username or password.';
        }
    });
});
