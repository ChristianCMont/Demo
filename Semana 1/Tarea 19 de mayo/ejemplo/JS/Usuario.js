class Usuario {
    constructor(nombre) {
        this.nombre = nombre;
        this.prestamos = [];
    }

    prestarLibro(libro, biblioteca) {
        const libroEncontrado = biblioteca.coleccion.find(item => item.titulo === libro);
        if (libroEncontrado) {
            this.prestamos.push(libroEncontrado);
            biblioteca.coleccion = biblioteca.coleccion.filter(item => item.titulo !== libro);
            biblioteca.mostrarColeccion();
            this.mostrarPrestamos();
        } else {
            alert('Libro no encontrado en la biblioteca');
        }
    }

    mostrarPrestamos() {
        const prestamosLista = document.getElementById('prestamos-lista');
        prestamosLista.innerHTML = '';
        this.prestamos.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item.getDescripcion();
            prestamosLista.appendChild(li);
        });
    }
}
