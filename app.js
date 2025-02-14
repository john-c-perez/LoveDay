const no = document.getElementById("no-btn");
const si = document.getElementById("si-btn");
const gifContainer = document.getElementById("gif-container");
const koalaContainer = document.querySelector(".koala-container");
const gif=document.querySelector("img");
//lista de gifs
const Gifs = [
    "images/gif1.gif",
    "images/giphy (21).gif",
    "images/giphy (20).gif",
    "images/giphy.gif",
    "images/giphy (22).gif",
    "images/giphy (23).gif",
    "images/giphy (1).gif",
    "images/giphy (3).gif",
    "images/giphy (2).gif",
    "images/giphy (6).gif",
    "images/giphy (5).gif",
    "images/giphy (4).gif",
    "images/giphy (11).gif",
    "images/giphy (15).gif",
    "images/giphy (14).gif",
    "images/giphy (17).gif",
    "images/giphy (18).gif",
    "images/giphy (7).gif",
    "images/giphy (8).gif",
    "images/giphy (9).gif"
];
let gifIndex=0;
let gifLoop;

// Función para mostrar un GIF nuevo cada vez que el botón "No" se mueva
function mostrarNuevoGif() {
    // Ocultar el koala
    koalaContainer.style.display = "none";

    // Mostrar el contenedor de GIFs y cambiar el GIF
    gifContainer.style.visibility = "visible";
    if (gifIndex===17){
        gifContainer.innerHTML = `<img src="${Gifs[gifIndex]}" class="gif-koala">`;
        gifContainer.style.top="42%";
        gifContainer.style.width = "150px"; 
        gifContainer.style.height = "150px"; 
    }else if (gifIndex===18){
        gifContainer.innerHTML = `<img src="${Gifs[gifIndex]}" class="gif-koala">`;
        gifContainer.style.top="28%";
        gifContainer.style.width = "200px"; 
        gifContainer.style.height = "200px"; 
        gifContainer.style.left = "43%"
    }else if(gifIndex===19){
        gifContainer.innerHTML = `<img src="${Gifs[gifIndex]}" class="gif-koala">`;
        gifContainer.style.top="45%";
        gifContainer.style.width = "250px"; 
        gifContainer.style.height = "250px"; 
        gifContainer.style.left = "44%"
    }else{
        gifContainer.style.top="4%";
        gifContainer.style.width = "300px"; 
        gifContainer.style.height = "300px";
        gifContainer.style.left = "50%"
        gifContainer.innerHTML = `<img src="${Gifs[gifIndex]}" class="gif-koala">`;
    }

    // Avanzar en la lista de GIFs de manera cíclica
    gifIndex = (gifIndex + 1) % Gifs.length;
}
// Restaurar el koala cuando el cursor se aleja del botón "No"
function restaurarKoala() {
    gifContainer.style.display = "none"; // Ocultar GIFs
    koalaContainer.style.display = "block"; // Mostrar el koala de nuevo
}
//funcion movel el boton no
function moverBtn(event){
    const rect = no.getBoundingClientRect();
    const distanciaX = Math.abs(event.clientX - (rect.left + rect.width / 2));
    const distanciaY = Math.abs(event.clientY - (rect.top + rect.height / 2));
    
    if (distanciaX < 50 && distanciaY < 50) {
        let nuevaX = Math.random() * (window.innerWidth - rect.width);
        let nuevaY = Math.random() * (window.innerHeight - rect.height);
        no.style.position = "absolute";
        no.style.left = `${nuevaX}px`;
        no.style.top = `${nuevaY}px`
        console.log(`Nuevo Posición -> X: ${nuevaX}, Y: ${nuevaY}`);
        //mostrar nuevo gif
        mostrarNuevoGif();
    }
}

document.addEventListener("mousemove", (event) => {
    const koalaSVG = document.querySelector("svg");
    const ojoIzq = koalaSVG.getElementById("g66");
    const ojoDer = koalaSVG.getElementById("g62");

    if (!ojoIzq || !ojoDer) return;

    // Obtener la posición del mouse
    const { clientX: mouseX, clientY: mouseY } = event;
    
    // Definir el centro de la pantalla para calcular desplazamiento
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    // Calcular cuánto deben moverse los ojos (aumentamos el factor)
    let offsetX = (mouseX - centerX) * 1; // Factor aumentado
    let offsetY = (centerY - mouseY) * 1;

    // Limitar el movimiento máximo dentro del ojo negro
    const maxOffset = 250; // Ajusta este valor si quieres más o menos movimiento
    offsetX = Math.max(-maxOffset, Math.min(maxOffset, offsetX));
    offsetY = Math.max(-maxOffset, Math.min(maxOffset, offsetY));

    // Ajustar el ojo izquierdo para que se mueva menos
    const offsetXIzq = offsetX * 1.1; // Se mueve un 30% menos
    const offsetYIzq = offsetY * 1.1;

    // Aplicar transformaciones
    ojoIzq.setAttribute("transform", `translate(${offsetXIzq - 50}, ${offsetYIzq - 210 })`);
    ojoDer.setAttribute("transform", `translate(${offsetX +100 }, ${offsetY - 100})`);
});
  

document.addEventListener("mousemove", moverBtn);
si.addEventListener("click", function () {
    koalaContainer.style.display = "none";
    // Limpiar el contenedor antes de agregar los GIFs
    gifContainer.innerHTML = `
        <img src="images/giphy (10).gif" class="gif-koala">
        <img src="images/giphy (19).gif" class="gif-koala">
    `;
    
    // Ajustar tamaño y visibilidad del contenedor
    gifContainer.style.visibility = "visible";
    gifContainer.style.display = "flex";
    gifContainer.style.justifyContent = "center";
    gifContainer.style.alignItems = "center";
    gifContainer.style.width = "100vw";  // Ocupa todo el ancho de la pantalla
    gifContainer.style.height = "100vh"; // Ocupa toda la altura de la pantalla
    // Ajustar tamaño de las imágenes
    document.querySelectorAll(".gif-koala").forEach(gif => {
        gif.style.width = "60%"; // Cada GIF ocupará el 40% del ancho
        gif.style.height = "auto";
    });
    // Esperar 5 segundos antes de redirigir
    setTimeout(() => {
        window.location.href = "/flores-amarillas-tres-main/indexpg2.html";
    }, 3000);
});

