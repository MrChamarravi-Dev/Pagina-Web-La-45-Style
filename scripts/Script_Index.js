document.addEventListener('DOMContentLoaded', () => {
    // ---- LÓGICA DEL BUSCADOR ----
    const btnBuscar = document.getElementById('btnBuscar');
    const searchWrapper = document.getElementById('searchWrapper');
    const inputBusqueda = document.getElementById('inputBusqueda');
    const formBuscador = document.getElementById('buscarModsitos45Style');

    if (btnBuscar && searchWrapper && inputBusqueda) {
        btnBuscar.addEventListener('click', (event) => {
            if(!searchWrapper.classList.contains('activo')) {
                event.preventDefault(); // Evita que el formulario se envíe
                searchWrapper.classList.add('activo');
                inputBusqueda.focus();
            } else {
                if(inputBusqueda.value.trim() === '') {
                    event.preventDefault();
                    searchWrapper.classList.remove('activo');
                } else { 
                    formBuscador.submit(); // Envía el formulario si hay texto
                }
            } 
        });
    }

    // Cerrar buscador si se hace clic fuera
    document.addEventListener('click', (event) => {
        if(searchWrapper && !searchWrapper.contains(event.target) && !event.target.closest('#btnBuscar')) {
            searchWrapper.classList.remove('activo');
        }
    });

    // ---- LÓGICA DEL MENÚ RESPONSIVE ----
    const btnHamburguesa = document.getElementById('btnHamburguesa');
    const menuAccesos = document.getElementById('menuAccesos');

    if (btnHamburguesa && menuAccesos) {
        btnHamburguesa.addEventListener('click', () => {
            // Activa o desactiva la clase que muestra el menú en móviles
            menuAccesos.classList.toggle('activo');
        });
    }
});