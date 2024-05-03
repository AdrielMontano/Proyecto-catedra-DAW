
    alert('Primero ingrese 5 usuarios y sus contraseñas');

    const clear=document.getElementById('btnclear');
    clear.addEventListener("click" ,()=>{
    localStorage.clear();
    })

    const titulo= document.getElementById('titulo');
    const btn=document.getElementsByClassName('btn');
    const login = document.getElementById('lg');
    const entrar=document.getElementById('lg');
    login.addEventListener("click", () => {
        const nombre = document.getElementById('nombre').value;
        const password = document.getElementById('psw').value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(nombre)) {
        alert("Ingrese un correo electrónico válido.");
        return;
    }

        let nombres = JSON.parse(localStorage.getItem("nombres")) || [];
        let contraseñas = JSON.parse(localStorage.getItem("contraseñas")) || [];

        // Verificar si ya se han ingresado cinco usuarios
        if(nombres.length == 4){
            titulo.textContent='Bienvenido';
        btn.textContent='Ingresar';
        }
        if (nombres.length >= 5) {
        titulo.textContent='Bienvenido';
        btn.textContent='Ingresar';
            const index = nombres.indexOf(nombre);
            if (index !== -1 && contraseñas[index] === password) {
                // Si el usuario existe y la contraseña es correcta, crear las variables de usuario activo y token
                const usuarioActivo = {
                    nombre: nombre,
                    password: password
                };
               

  
  

                window.location.href = `html/home.html`;
            } else {
        
                alert("Usuario no encontrado o contraseña incorrecta. Intente de nuevo.");
            }
        } else {
            // Si aún no se han ingresado cinco usuarios, agregar el nuevo nombre y contraseña al array correspondiente
            nombres.push(nombre);
            contraseñas.push(password);

            // Almacenar los nombres y contraseñas actualizados en el localStorage, convirtiéndolos a cadena JSON
            localStorage.setItem("nombres", JSON.stringify(nombres));
            localStorage.setItem("contraseñas", JSON.stringify(contraseñas));

        
            document.getElementById('nombre').value = "";
            document.getElementById('psw').value = "";

            if (nombres.length === 5) {
                alert("Se han ingresado los cinco usuarios. Ahora puedes iniciar sesión.");
            }
            console.log(nombres);
            console.log(password);
        }
        if(nombre.value==nombres){
            alert('usuarioActivo');
        }
    });

    




