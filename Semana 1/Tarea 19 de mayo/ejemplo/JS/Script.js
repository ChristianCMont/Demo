document.addEventListener('DOMContentLoaded', () => {
    const biblioteca = new Biblioteca('Biblioteca Central', 'Calle Principal 123');

    document.getElementById('agregar-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const titulo = document.getElementById('titulo').value;
        const autor = document.getElementById('autor').value;
        const genero = document.getElementById('genero').value;
        const anio = document.getElementById('anio').value;
        const numeroEdicion = document.getElementById('numeroEdicion').value;

        let item;
        if (numeroEdicion) {
            item = new Revista(titulo, autor, genero, anio, numeroEdicion);
        } else {
            item = new Libro(titulo, autor, genero, anio);
        }

        biblioteca.agregarItem(item);

        document.getElementById('agregar-form').reset();
    });

    document.getElementById('prestamo-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const nombreUsuario = document.getElementById('usuario').value;
        const tituloLibro = document.getElementById('libro').value;

        const usuario = new Usuario(nombreUsuario);
        usuario.prestarLibro(tituloLibro, biblioteca);

        document.getElementById('prestamo-form').reset();
    });
});
