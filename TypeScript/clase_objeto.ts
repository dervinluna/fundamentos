class Jugador{
    nombre:string;
    constructor(nuevoNombre:string){
        this.nombre = nuevoNombre;
    }
    decirMiNombre(){
        console.log(this.nombre);
    }
}
let nombreJugador = new Jugador("hallan");
console.log(nombreJugador.decirMiNombre());