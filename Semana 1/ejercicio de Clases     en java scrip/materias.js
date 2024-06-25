export class Materia {
    constructor(nombre, creditos, profesor) {
        this.nombre = nombre;
        this.creditos = creditos;
        this.profesor = profesor;
    }

    mostrarInformacion() {
        return `Materia: ${this.nombre}, Créditos: ${this.creditos}, Profesor: ${this.profesor}`;
    }
}

export const datosMaterias = 'Lista de materias del semestre actual';
