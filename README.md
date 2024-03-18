### Generación de Quinielas Aleatorias

Este proyecto consiste en una aplicación web para generar quinielas aleatorias de eventos
 deportivos. La aplicación está desarrollada utilizando HTML, CSS y JavaScript, y proporciona dos
 tipos de quinielas: una para la Premier League y otra para la Liga de El Salvador.

**Lógica del Proyecto**
Definición de Equipos Disponibles: Se define un arreglo que contiene los nombres de los 
equipos que participan en la liga correspondiente.

Definición de Resultados Posibles: Se define un arreglo que contiene los posibles resultados de
 los partidos: victoria local (1), empate (X) y victoria visitante (2).

Generación de Quiniela: Se utiliza un bucle para generar 15 partidos aleatorios. En cada iteración 
del bucle, se selecciona un equipo local y un equipo visitante aleatoriamente del arreglo de
 equipos disponibles. Luego, se elige aleatoriamente uno de los posibles resultados para ese
 partido. Este proceso se repite hasta generar 15 partidos únicos.

Visualización de la Quiniela: Una vez generada la quiniela, se muestra al usuario en la interfaz de 
usuario, donde puede ver los partidos y los resultados obtenidos.

**Generación de Quinielas para la Liga de El Salvador**

El proceso de generación de quinielas para la Liga de El Salvador es similar al descrito
 anteriormente, pero utiliza un arreglo diferente que contiene los nombres de los equipos de esa liga.

 **Cómo Utilizar**
 
Clona el repositorio en tu máquina local:

git clone https://github.com/tu-usuario/tu-repositorio.git

**Créditos**

El actual proyecto es desarrollado por:
