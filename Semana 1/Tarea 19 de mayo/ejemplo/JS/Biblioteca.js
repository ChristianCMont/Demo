class Biblioteca {
    constructor(nombre, direccion) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.coleccion = [];
    }

    agregarItem(item) {
        this.coleccion.push(item);
        this.mostrarColeccion();
    }

    mostrarColeccion() {
        const coleccionLista = document.getElementById('coleccion-lista');
        coleccionLista.innerHTML = '';
        this.coleccion.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item.getDescripcion();
            coleccionLista.appendChild(li);
        });
    }
}
