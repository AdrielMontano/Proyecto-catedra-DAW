// Función para limpiar el LocalStorage al cargar la página
function limpiarLocalStorageAlCargar() {
  localStorage.clear();
}

// Llamar a la función al cargar la página
limpiarLocalStorageAlCargar();

// Obtener el botón de generar
const generarButton = document.getElementById("generarButton");

generarButton.addEventListener("click", function () {
  // Ocultar las apuestas mostradas, si las hay
  ocultarApuestas();

  // Mostrar la tabla de generación de quinielas
  document.getElementById("tablaQuiniela").style.display = "block";

  // Generar la quiniela
  generarQuiniela();
});

const equipos = [
  "Manchester City",
  "Liverpool",
  "Chelsea",
  "Tottenham",
  "Arsenal",
  "Manchester United",
  "West Ham United",
  "Leicester City",
  "Aston Villa",
  "Newcastle United",
];


function generarQuiniela() {
  const quinielaBody = document.getElementById("quinielaBody");
  quinielaBody.innerHTML = "";

  equipos.forEach((equipo, index) => {
    const newRow = document.createElement("tr");

    // Crear celda para el escudo y nombre del equipo local
    const localCell = document.createElement("td");

    const localContent = document.createElement("div");
    const localImg = document.createElement("img");
    localImg.src = `../img/${equipo.toLowerCase().replace(/\s/g, '')}.png`;
    localImg.alt = `Escudo ${equipo}`;
    localImg.style.height = "30px";
    localImg.style.width = "30px"; // Hacer la imagen cuadrada

    localContent.appendChild(localImg);
    localContent.appendChild(document.createTextNode(equipo)); // Agregar el nombre del equipo
    localCell.appendChild(localContent);
    newRow.appendChild(localCell);

    // Crear celda para el resultado
    const resultadoCell = document.createElement("td");
    const resultadoInput = document.createElement("input");
    resultadoInput.type = "text";
    resultadoInput.classList.add("resultadoInput");
    resultadoCell.appendChild(resultadoInput);
    resultadoInput.addEventListener("input", function(event) {
      const valor = event.target.value.toUpperCase(); // Convertir el valor ingresado a mayúsculas
      if (valor !== "1" && valor !== "X" && valor !== "2") {
        event.target.value = ""; // Limpiar el campo si el valor no es válido
      }
    });


    newRow.appendChild(resultadoCell);

    // Crear celda para el escudo y nombre del equipo visitante
    const visitanteCell = document.createElement("td");
    visitanteCell.style.paddingRight = "15px"; // Agregar padding a la derecha
    const visitanteContent = document.createElement("div");
    const visitanteImg = document.createElement("img");
    visitanteImg.src = `../img/${equipos[index + 1].toLowerCase().replace(/\s/g, '')}.png`;
    visitanteImg.alt = `Escudo ${equipos[index + 1]}`;
    visitanteImg.style.height = "30px";
    visitanteImg.style.width = "30px"; // Hacer la imagen cuadrada
    visitanteContent.appendChild(visitanteImg);
    visitanteContent.appendChild(document.createTextNode(equipos[index + 1])); // Agregar el nombre del equipo visitante
    visitanteCell.appendChild(visitanteContent);
    newRow.appendChild(visitanteCell);

    quinielaBody.appendChild(newRow);
  });
}


// Función para manejar el evento de apostar
function apostar() {
  // Incrementar el contador de apuestas
  let apuestaNumber = parseInt(localStorage.getItem("apuestaNumber") || "0") + 1;

  // Obtener todos los campos de resultado
  const resultadoInputs = document.querySelectorAll(".resultadoInput");

  // Array para almacenar los datos de la quiniela
  const quinielaData = [];

  // Iterar sobre cada campo de resultado
  resultadoInputs.forEach(input => {
    const resultado = input.value;
    const local = input.parentNode.parentNode.children[0].textContent; // Corregir el índice para obtener el nombre del equipo local
    const visitante = input.parentNode.parentNode.children[2].textContent; // Corregir el índice para obtener el nombre del equipo visitante

    // Agregar los datos a la quinielaData
    quinielaData.push({ local, visitante, resultado });
  });

  // Guardar la quinielaData en el localStorage con un identificador único
  localStorage.setItem(`apuesta${apuestaNumber}`, JSON.stringify(quinielaData));

  // Guardar el número de la apuesta actual en el localStorage
  localStorage.setItem("apuestaNumber", apuestaNumber.toString());

  // Mostrar un mensaje de éxito
  alert(`¡Quiniela apuesta número ${apuestaNumber} para Premier guardada exitosamente!`);

  // Limpiar los campos de resultado
  resultadoInputs.forEach(input => {
    input.value = "";
  });

  // Mostrar el array en la consola
  console.log(quinielaData);
}

// Obtener el botón de apostar
const apostarButton = document.getElementById("apostarButton");

// Agregar un evento de clic al botón de apostar
apostarButton.addEventListener("click", apostar);




// Función para mostrar las apuestas guardadas en la página
function mostrarApuestas() {
  // Ocultar la tabla de generación de quinielas
  document.getElementById("tablaQuiniela").style.display = "none";

  // Mostrar las apuestas guardadas
  const apuestasContainer = document.getElementById("apuestasContainer");
  apuestasContainer.innerHTML = "";

  // Obtener el número total de apuestas
  const apuestaNumber = parseInt(localStorage.getItem("apuestaNumber") || "0");

  // Iterar sobre cada apuesta guardada
  for (let i = 1; i <= apuestaNumber; i++) {
    // Obtener los datos de la apuesta desde el localStorage
    const apuestaData = JSON.parse(localStorage.getItem(`apuesta${i}`)) || [];

    // Crear una tabla para mostrar los datos de la apuesta
    const table = document.createElement("table");
    table.classList.add("table", "table-bordered", "table-striped", "mt-3");

    // Crear el encabezado de la tabla
    const thead = document.createElement("thead");
    thead.innerHTML = `
      <tr>
        <th scope="col">Equipo Local</th>
        <th scope="col">Resultado</th>
        <th scope="col">Equipo Visitante</th>
      </tr>
    `;
    table.appendChild(thead);

    // Crear el cuerpo de la tabla
    const tbody = document.createElement("tbody");
    apuestaData.forEach(item => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>
          <img src="../img/${item.local.toLowerCase().replace(/\s/g, '')}.png" alt="${item.local} escudo" style="height: 30px; width: 30px;">
          ${item.local}
        </td>
        <td>${item.resultado}</td>
        <td>
          <img src="../img/${item.visitante.toLowerCase().replace(/\s/g, '')}.png" alt="${item.visitante} escudo" style="height: 30px; width: 30px;">
          ${item.visitante}
        </td>
      `;
      tbody.appendChild(row);
    });
    table.appendChild(tbody);

    // Agregar la tabla al contenedor de apuestas
    apuestasContainer.appendChild(table);
  }
}



// Obtener el botón para mostrar las apuestas
const mostrarApuestasButton = document.getElementById("mostrarApuestasButton");

// Agregar un evento de clic al botón para mostrar las apuestas
mostrarApuestasButton.addEventListener("click", mostrarApuestas);

// Función para ocultar las apuestas mostradas
function ocultarApuestas() {
  const tablaQuiniela = document.getElementById("tablaQuiniela");
  if (tablaQuiniela.style.display === "none") {
    tablaQuiniela.style.display = "block";
  }
}
// Obtener el botón de cerrar quinielas
const cerrarButton2 = document.getElementById("cerrarButton2");
cerrarButton2.addEventListener("click", function () {
  document.getElementById("tablaQuiniela").style.display = "none";
  document.getElementById("apuestasContainer").innerHTML = "";
  document.getElementById("tablaQuiniela2").style.display = "none";
  document.getElementById("apuestasContainer2").innerHTML = "";

});
