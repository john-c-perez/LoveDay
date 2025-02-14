// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Si no duerme 8 horas, se molesta", time: 18 },
  { text: "y casi siempre", time: 18.5 },
  { text: "se hecha otras dos", time: 19.5 },
  { text: "tarda más de lo que dice en arreglarse", time: 26},
  { text: "y no me quiero imaginar si tardo yo", time: 30 },
  { text: "Pa cualquier cosa tiene una respuesta", time: 36 },
  { text: "y aunque este mal siempre le doy razón", time: 40 },
  { text: "Más vale traerla todo el día contenta", time: 45 },
  { text: "a tener la culpa de su MAL HUMOR", time: 49 },
  { text: "Ella es así!!!", time: 51 },
  { text: "Tan descarada", time: 53 },
  { text: "Que no pide perdón", time: 56 },
  { text: "Sabe que arregla", time: 58 },
  { text: "todo a puros besos y a como disfruto", time: 60 },
  { text: "Que esa siempre sea su solución", time: 68 },
  { text: "Ella es así", time: 70 },
  { text: "Toda perfecta", time: 73 },
  { text: "Y hecha pa' mi", time: 75 },
  { text: "No sé qué hice bien", time: 76 },
  { text: "Para tenerla aquí", time: 79 },
  { text: "Pues siento que se aclara el cielo", time: 81 },
  { text: "Cada que la veo reír", time: 86 },
  { text: "Y más si es por mí", time: 90 },
  { text: "Creo que a veces ni ella se entiende", time: 111 },
  { text: "Y así quiere que la entienda yo", time: 115 },
  { text: "Tiene talento para enloquecerme", time: 119 },
  { text: "Y para hacerme mejor de lo que soy", time: 123 },
  { text: "Ella es así", time: 125 },
  { text: "Tan descarada", time: 127 },
  { text: "Que no pide perdón", time: 130 },
  { text: "Sabe que arregla", time: 132 },
  { text: "todo a puros besos y a como disfruto", time: 134 },
  { text: "Que esa siempre sea su solución", time: 142 },
  { text: "Ella es así", time: 144 },
  { text: "Toda perfecta", time: 147 },
  { text: "Y hecha pa' mi", time: 149 },
  { text: "No sé qué hice bien", time: 150 },
  { text: "Para tenerla aquí", time: 153 },
  { text: "Pues siento que se aclara el cielo", time: 155 },
  { text: "Cada que la veo reír", time: 160 },
  { text: "Y más si es por mí", time: 164 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);