var Jugador = /** @class */ (function () {
    function Jugador(nuevoNombre) {
        this.nombre = nuevoNombre;
    }
    Jugador.prototype.decirMiNombre = function () {
        console.log(this.nombre);
    };
    return Jugador;
}());
var nombreJugador = new Jugador("Halland");
console.log(nombreJugador.decirMiNombre());
