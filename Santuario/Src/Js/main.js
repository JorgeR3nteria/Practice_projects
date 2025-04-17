// Variables
const anioCreacion = 2025; 
const anioActual = new Date().getFullYear();

const texto = (anioActual === anioCreacion) 
    ? `© ${anioCreacion} - Mi Portafolio`
    : `© ${anioCreacion} - ${anioActual}  Rentechnology - Todos los derechos reservados.`;

document.getElementById("copyright").textContent = texto;