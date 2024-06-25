class Revista extends Libro {
    constructor(titulo, autor, genero, anio, numeroEdicion) {
        super(titulo, autor, genero, anio);
        this.numeroEdicion = numeroEdicion;
    }

    getDescripcion() {
        return `${super.getDescripcion()}, Edición: ${this.numeroEdicion}`;
    }
}
