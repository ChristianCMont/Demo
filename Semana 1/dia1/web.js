export class Animal{
    // definir los atributos
    tipo = "Desconocido"
    nombre="Sin nombre"

    // metodos o funciones del Animal
    hacerSonido(){
        console.log(`${this.nombre} hace un sonido`)
        //console.log(this.nombre+" hace un sonido")
    }

    //metodo estatico
    static describir(){
        console.log('Esta es una clase Animal')
    }
}
export const datoAnimal ='Es un ser vivo'
// exportar mi clase animal
//export default Animal