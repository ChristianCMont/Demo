class Libro {
    constructor(titulo, autor, genero, anio) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.anio = anio;
    }

    getDescripcion() {
        return `${this.titulo} por ${this.autor}, Género: ${this.genero}, Año: ${this.anio}`;
    }
}
