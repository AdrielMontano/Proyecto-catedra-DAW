// Función para limpiar el LocalStorage al cargar la página
function limpiarLocalStorageAlCargar() {
  localStorage.clear();
}

// Llamar a la función al cargar la página
limpiarLocalStorageAlCargar();

// Obtener el botón de generar para la Liga de El Salvador
const generarButton2 = document.getElementById("generarButton2");

generarButton2.addEventListener("click", function () {
  // Ocultar las apuestas mostradas, si las hay
  ocultarApuestas2();

  // Mostrar la tabla de generación de quinielas para la Liga de El Salvador
  document.getElementById("tablaQuiniela2").style.display = "block";

  // Generar la quiniela para la Liga de El Salvador
  generarQuinielaElSalvador();
});

const equiposElSalvador = [
  "Alianza FC",
  "FAS",
  "Águila",
  "Santa Tecla FC",
  "Isidro Metapán",
  "Luis Ángel Firpo",
  "Once Deportivo",
  "Municipal Limeño",
  "Chalatenango",
  "Jocoro FC",
  "Atlético Marte",
  "El Vencedor",
];

// Función para generar la quiniela para la Liga de El Salvador
// Función para generar la quiniela para la Liga de El Salvador
function generarQuinielaElSalvador() {
  const quinielaBody2 = document.getElementById("quinielaBody2");
  quinielaBody2.innerHTML = "";

  equiposElSalvador.forEach((equipo, index) => {
    if (index < equiposElSalvador.length - 1) {
      const newRow = document.createElement("tr");

      // Crear celda para la imagen y nombre del equipo local
      const localCell = document.createElement("td");
      const localImg = document.createElement("img");
      localImg.src = `../img/${equipo.toLowerCase().replace(/\s/g, '')}.png`;
      localImg.alt = `Escudo ${equipo}`;
      localImg.style.height = "30px";
      localImg.style.width = "30px"; // Hacer la imagen cuadrada
      localCell.appendChild(localImg);
      localCell.appendChild(document.createTextNode(equipo)); // Agregar el nombre del equipo
      newRow.appendChild(localCell);

      // Crear celda para el resultado
      const resultadoCell = document.createElement("td");
      const resultadoInput = document.createElement("input");
      resultadoInput.type = "text";
      resultadoInput.classList.add("resultadoInput2");
      resultadoCell.appendChild(resultadoInput);
      newRow.appendChild(resultadoCell);

      // Crear celda para la imagen y nombre del equipo visitante
      const visitanteCell = document.createElement("td");
      const visitanteImg = document.createElement("img");
      visitanteImg.src = `../img/${equiposElSalvador[index + 1].toLowerCase().replace(/\s/g, '')}.png`;
      visitanteImg.alt = `Escudo ${equiposElSalvador[index + 1]}`;
      visitanteImg.style.height = "30px";
      visitanteImg.style.width = "30px"; // Hacer la imagen cuadrada
      visitanteCell.appendChild(visitanteImg);
      visitanteCell.appendChild(document.createTextNode(equiposElSalvador[index + 1])); // Agregar el nombre del equipo
      newRow.appendChild(visitanteCell);

      quinielaBody2.appendChild(newRow);
    }
  });
}



// Función para manejar el evento de apostar para la Liga de El Salvador
function apostar2() {
  let apuestaNumber = parseInt(localStorage.getItem("apuestaNumber2") || "0") + 1;
  const resultadoInputs = document.querySelectorAll(".resultadoInput2");
  const quinielaData = [];

  resultadoInputs.forEach(input => {
    const resultado = input.value;
    const localImgAlt = input.parentNode.parentNode.children[0].querySelector('img').alt.replace('Escudo ', ''); // Obtener el nombre del equipo local
    const visitanteImgAlt = input.parentNode.parentNode.children[2].querySelector('img').alt.replace('Escudo ', ''); // Obtener el nombre del equipo visitante

    quinielaData.push({ local: localImgAlt, visitante: visitanteImgAlt, resultado });
  });

  localStorage.setItem(`apuesta${apuestaNumber}_2`, JSON.stringify(quinielaData));
  localStorage.setItem("apuestaNumber2", apuestaNumber.toString());

  alert(`¡Quiniela apuesta número ${apuestaNumber} para la Liga de El Salvador guardada exitosamente!`);

  resultadoInputs.forEach(input => {
    input.value = "";
  });

  console.log(quinielaData);
}


const apostarButton2 = document.getElementById("apostarButton2");
apostarButton2.addEventListener("click", apostar2);

function mostrarApuestas2() {
  document.getElementById("tablaQuiniela2").style.display = "none";
  const apuestasContainer = document.getElementById("apuestasContainer2");
  apuestasContainer.innerHTML = "";
  const apuestaNumber = parseInt(localStorage.getItem("apuestaNumber2") || "0");

  for (let i = 1; i <= apuestaNumber; i++) {
    const apuestaData = JSON.parse(localStorage.getItem(`apuesta${i}_2`)) || [];
    const table = document.createElement("table");
    table.classList.add("table", "table-bordered", "table-striped", "mt-3");

    const thead = document.createElement("thead");
    thead.innerHTML = `
      <tr>
        <th scope="col">Equipo Local</th>
        <th scope="col">Resultado</th>
        <th scope="col">Equipo Visitante</th>
      </tr>
    `;
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    apuestaData.forEach(item => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>
          <img src="../img/${item.local.toLowerCase().replace(/\s/g, '')}.png" alt="${item.local}" style="height: 30px; width: 30px;">
          ${item.local}
        </td>
        <td>${item.resultado}</td>
        <td>
          <img src="../img/${item.visitante.toLowerCase().replace(/\s/g, '')}.png" alt="${item.visitante}" style="height: 30px; width: 30px;">
          ${item.visitante}
        </td>
      `;
      tbody.appendChild(row);
    });
    table.appendChild(tbody);

    apuestasContainer.appendChild(table);
  }
}

const mostrarApuestasButton2 = document.getElementById("mostrarApuestasButton2");
mostrarApuestasButton2.addEventListener("click", mostrarApuestas2);


function ocultarApuestas2() {
  const tablaQuiniela2 = document.getElementById("tablaQuiniela2");
  if (tablaQuiniela2.style.display === "none") {
    tablaQuiniela2.style.display = "block";
  }
}

const cerrarButton = document.getElementById("cerrarButton");
cerrarButton.addEventListener("click", function () {
  document.getElementById("tablaQuiniela").style.display = "none";
  document.getElementById("apuestasContainer").innerHTML = "";
  document.getElementById("tablaQuiniela2").style.display = "none";
  document.getElementById("apuestas")
});
