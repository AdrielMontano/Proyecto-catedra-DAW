/* Definición de los equipos disponibles de la Liga de El Salvador*/
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
  "Audaz",
  "Topiltzín",
  "Independiente FC",
  "Turín FESA",
  "Platense",

  "CD Sonsonate",
  "CD Dragón",
  "AD Chalatenango",
  "CD Vista Hermosa",
  "CD Marte Soyapango",
  "CD UES",
];

// Definición de los posibles resultados hah
const resultadosPosibles2 = ["1", "X", "2"];

// Variable para rastrear si se ha generado la quiniela
let quinielaGeneradaElSalvador = false;

// Función para generar una quiniela aleatoria de la Liga de El Salvador
function generarQuinielaElSalvador() {
  const equiposDisponibles = equiposElSalvador.slice();
  const quinielaElSalvador = [];

  // Generar 11 partidos
  for (let i = 1; i <= 11; i++) {
    let local, visitante, resultado;

    // Si quedan al menos dos equipos disponibles, seleccionar equipos aleatoriamente
    if (equiposDisponibles.length >= 2) {
      const localIndex = Math.floor(Math.random() * equiposDisponibles.length);
      local = equiposDisponibles[localIndex];
      equiposDisponibles.splice(localIndex, 1);

      const visitanteIndex = Math.floor(Math.random() * equiposDisponibles.length);
      visitante = equiposDisponibles[visitanteIndex];
      equiposDisponibles.splice(visitanteIndex, 1);

      resultado = resultadosPosibles2[Math.floor(Math.random() * resultadosPosibles2.length)];
    } else {
      // Si no quedan suficientes equipos, rellenar con equipos aleatorios
      local = equiposElSalvador[Math.floor(Math.random() * equiposElSalvador.length)];
      visitante = equiposElSalvador[Math.floor(Math.random() * equiposElSalvador.length)];
      resultado = resultadosPosibles2[Math.floor(Math.random() * resultadosPosibles2.length)];
    }

    quinielaElSalvador.push({ local: local, visitante: visitante, resultado: resultado });
  }

  quinielaGeneradaElSalvador = true;

  return quinielaElSalvador;
}

// Función para mostrar la quiniela de la Liga de El Salvador en la página
function mostrarQuinielaElSalvador() {
  const resultadosDiv = document.getElementById("resultados2");
  const quinielaElSalvador = generarQuinielaElSalvador();

  resultadosDiv.innerHTML = "";

  const divContenedor = document.createElement("div");

  // Crear la cabecera de la quiniela
  const divCabeceraPartidos = document.createElement("div");
  divCabeceraPartidos.classList.add("cabecera");

  // Crear elementos span para la cabecera
  const spanCabeceraPartidos = document.createElement("span");
  spanCabeceraPartidos.classList.add("cabecera-texto");
  spanCabeceraPartidos.textContent = "Partidos     ";

  const spanCabeceraSeparador = document.createElement("span");
  spanCabeceraSeparador.classList.add("cabecera-separador");
  spanCabeceraSeparador.textContent = " - ";

  const spanCabeceraResultados = document.createElement("span");
  spanCabeceraResultados.classList.add("cabecera-texto");
  spanCabeceraResultados.textContent = "Resultados";

  // Agregar los elementos span a la cabecera
  divCabeceraPartidos.appendChild(spanCabeceraPartidos);
  divCabeceraPartidos.appendChild(spanCabeceraSeparador);
  divCabeceraPartidos.appendChild(spanCabeceraResultados);

  // Agregar la cabecera al contenedor
  divContenedor.appendChild(divCabeceraPartidos);

  // Iterar a través de los partidos de la quiniela de la Liga de El Salvador
  quinielaElSalvador.forEach((partido, index) => {
    const divPartido = document.createElement("div");
    divPartido.classList.add("partido");

    const spanPartido = document.createElement("span");
    spanPartido.textContent = `${index + 1}. ${partido.local} vs ${partido.visitante}`;
    divPartido.appendChild(spanPartido);

    // Agregar el pleno al 15 si corresponde
    if (index === 14) {
      const divPleno = document.createElement("div");
      divPleno.classList.add("pleno");
      divPleno.textContent = "Pleno al 15";
      divContenedor.appendChild(divPleno);
    }

    // Agregar una línea separadora entre los partidos
    if (index < 14) {
      divContenedor.appendChild(document.createElement("hr"));
    }

    // Crear el contenedor para el resultado
    const divResultado = document.createElement("div");
    divResultado.classList.add("resultado-contenedor");

    // Crear el elemento span para mostrar el resultado
    const spanResultado = document.createElement("span");
    spanResultado.classList.add("resultado");
    spanResultado.textContent = partido.resultado;

    // Agregar el resultado al contenedor
    divResultado.appendChild(spanResultado);

    // Agregar el separador entre el partido y el resultado
    divPartido.appendChild(document.createTextNode("     -     "));
    divPartido.appendChild(divResultado);
    divContenedor.appendChild(divPartido);
  });

  // Agregar el contenedor de la quiniela al elemento resultadosDiv
  resultadosDiv.appendChild(divContenedor);

  // Actualizar el texto del botón
  const generarButton = document.getElementById("generarButton2");
  generarButton.textContent = "Generar de nuevo";
}

// Obtener el botón y agregar un evento de clic para la quiniela de la Liga de El Salvador
const generarButton2 = document.getElementById("generarButton2");
generarButton2.addEventListener("click", function () {
  if (quinielaGeneradaElSalvador) {
    mostrarQuinielaElSalvador();
  } else {
    generarQuinielaElSalvador();
    mostrarQuinielaElSalvador();
  }
});

// Función para mostrar la quiniela de la Liga de El Salvador en formato de tabla
function mostrarQuinielaElSalvador() {
  const resultadosDiv = document.getElementById("resultados2");
  const quinielaElSalvador = generarQuinielaElSalvador();

  resultadosDiv.innerHTML = "";

  // Crear la tabla para la quiniela
  const tabla = document.createElement("table");
  tabla.classList.add("tabla-quiniela");

  // Crear la cabecera de la tabla
  const cabecera = document.createElement("thead");
  const cabeceraRow = document.createElement("tr");
  const cabeceraPartidos = document.createElement("th");
  cabeceraPartidos.textContent = "Partidos";
  const cabeceraResultados = document.createElement("th");
  cabeceraResultados.textContent = "Resultados";
  cabeceraRow.appendChild(cabeceraPartidos);
  cabeceraRow.appendChild(cabeceraResultados);
  cabecera.appendChild(cabeceraRow);
  tabla.appendChild(cabecera);

  // Agregar los partidos y resultados a la tabla
  const cuerpo = document.createElement("tbody");
  quinielaElSalvador.forEach((partido, index) => {
    const fila = document.createElement("tr");
    const columnaPartido = document.createElement("td");
    columnaPartido.textContent = `${index + 1}. ${partido.local} vs ${partido.visitante}`;
    const columnaResultado = document.createElement("td");
    columnaResultado.textContent = partido.resultado;
    fila.appendChild(columnaPartido);
    fila.appendChild(columnaResultado);
    cuerpo.appendChild(fila);
  });
  tabla.appendChild(cuerpo);

  // Agregar la tabla al div de resultados
  resultadosDiv.appendChild(tabla);

  // Actualizar el texto del botón
  const generarButton = document.getElementById("generarButton2");
  generarButton.textContent = "Generar de nuevo";
}
