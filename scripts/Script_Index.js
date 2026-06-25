const btnBuscar = document.getElementById('btnBuscar');
const searchWrapper = document.getElementById('searchWrapper');
const inputBusqueda = document.getElementById('inputBusqueda');
const formBuscador = document.getElementById('buscarModsitos45Style');

btnBuscar.addEventListener('click', (event) => {
    if(!searchWrapper.classList.contains('activo')) {
        event.preventDefault(); // Evita que el formulario se envíe
        searchWrapper.classList.add('activo');
        inputBusqueda.focus();
    } else {
        if(inputBusqueda.value.trim() === '') {
            event.preventDefault();
            searchWrapper.classList.remove('activo');
        } else { // <--- FALTABA CERRAR LA LLAVE ANTES DE ESTE ELSE
            formBuscador.submit(); // Envía el formulario si hay texto en el input
        }
    } // <--- Cierre del bloque else principal
});

document.addEventListener('click', (event) => {
    // Es recomendable usar .closest() para evitar fallos si el usuario hace clic exactamente en el <img> de la lupa
    if(!searchWrapper.contains(event.target) && !event.target.closest('#btnBuscar')) {
        searchWrapper.classList.remove('activo');
    }
});

