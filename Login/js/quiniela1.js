// Definición de los equipos disponibles
const equipos = [
  "Manchester City",
  "Liverpool",
  "Chelsea",
  "Totten juan",
  "Arsenal",
  "Manchester United",
  "West Ham United",
  "Leicester City",
  "Aston Villa",
  "Everton",
  "Newcastle United",
  "Wolverhampton Wanderers",
  "Brighton & Hove Albion",
  "Brentford",
  "Crystal Palace",
  "Leeds United",
  "Nottingham Forest",
  "Bournemouth",
  "Fulham",
  "Southampton",
];
  // Definición de los posibles resultados
  const resultadosPosibles = ["1", "X", "2"];
  
  // Variable para rastrear si se ha generado la quiniela
  let quinielaGenerada = false;
  
  // Función para generar una quiniela aleatoria
  function generarQuiniela() {
    const equiposDisponibles = equipos.slice();
    const quiniela = [];
  
    for (let i = 1; i <= 15; i++) {
      const localIndex = Math.floor(Math.random() * equiposDisponibles.length);
      const local = equiposDisponibles[localIndex];
      equiposDisponibles.splice(localIndex, 1);
  
      const visitanteIndex = Math.floor(Math.random() * equiposDisponibles.length);
      const visitante = equiposDisponibles[visitanteIndex];
      equiposDisponibles.splice(visitanteIndex, 1);
  
      const resultado = resultadosPosibles[Math.floor(Math.random() * resultadosPosibles.length)];
  
      quiniela.push({ local: local, visitante: visitante, resultado: resultado });
    }
  
    quinielaGenerada = true;
  
    return quiniela;
  }
  
  // Función para mostrar la quiniela en la página
  function mostrarQuiniela() {
    const resultadosDiv = document.getElementById("resultados");
    const quiniela = generarQuiniela();
  
    resultadosDiv.innerHTML = "";
  
    const divContenedor = document.createElement("div");
  
    // Crear la cabecera de la quiniela
    const divCabeceraPartidos = document.createElement("div");
    divCabeceraPartidos.classList.add("Cabecera");
  
    // Crear elementos span para la cabecera
    const spanCabeceraPartidos = document.createElement("span");
    spanCabeceraPartidos.classList.add("Cabecera-texto");
    spanCabeceraPartidos.textContent = "Partidos     ";
  
    const spanCabeceraSeparador = document.createElement("span");
    spanCabeceraSeparador.classList.add("Cabecera-separador");
    spanCabeceraSeparador.textContent = " - ";
  
    const spanCabeceraResultados = document.createElement("span");
    spanCabeceraResultados.classList.add("Cabecera-texto");
    spanCabeceraResultados.textContent = "Resultados";
  
    // Agregar los elementos span a la cabecera
    divCabeceraPartidos.appendChild(spanCabeceraPartidos);
    divCabeceraPartidos.appendChild(spanCabeceraSeparador);
    divCabeceraPartidos.appendChild(spanCabeceraResultados);
  
    // Agregar la cabecera al contenedor
    divContenedor.appendChild(divCabeceraPartidos);
  
    // Iterar a través de los partidos de la quiniela
    quiniela.forEach((partido, index) => {
      const divPartido = document.createElement("div");
      divPartido.classList.add("Partido");
  
      const spanPartido = document.createElement("Span");
      spanPartido.textContent = `${index + 1}. ${partido.local} vs ${partido.visitante}`;
      divPartido.appendChild(spanPartido);
  
      // Agregar el pleno al 15 si corresponde
      if (index === 14) {
        const divPleno = document.createElement("div");
        divPleno.classList.add("Pleno");
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
    const generarButton = document.getElementById("generarButton");
    generarButton.textContent = "Generar de nuevo";
  }
  
  // Obtener el botón y agregar un evento de clic
  const generarButton = document.getElementById("generarButton");
  generarButton.addEventListener("click", function () {
    if (quinielaGenerada) {
      mostrarQuiniela();
    } else {
      generarQuiniela();
      mostrarQuiniela();
    }
  });


// Función para mostrar la quiniela en formato de tabla
function mostrarQuiniela() {
  const resultadosDiv = document.getElementById("resultados");
  const quiniela = generarQuiniela();

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
  quiniela.forEach((partido, index) => {
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
  const generarButton = document.getElementById("generarButton");
  generarButton.textContent = "Generar de nuevo";
}
