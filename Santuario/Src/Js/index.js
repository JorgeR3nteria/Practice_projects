// Año de creación de la web
const anioCreacion = 2.025; 
const anioActual = new Date().getFullYear();

// Genera el texto con el rango de años
const texto = (anioActual === anioCreacion) 
    ? `© ${anioCreacion} - Mi Portafolio`
    : `© ${anioCreacion} - ${anioActual}  Rentechnology - Todos los derechos reservados.`;

// Insertar en el HTML
document.getElementById("copyright").textContent = texto;
