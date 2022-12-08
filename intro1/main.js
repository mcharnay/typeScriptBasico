function Saludador(saludo) {
    this.saludo = saludo;
}
Saludador.prototype.decirHola = function () {
    return "Hola " + this.saludo;
};
var saludador = new Saludador("Mundo");
var boton = document.createElement('button');
boton.textContent = "Decir hola";
boton.onclick = function () {
    alert(saludador.decirHola());
};
document.body.appendChild(boton);
//para compilar en terminal y transformar el ts a js
// tsc main.ts
