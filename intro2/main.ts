//esto es propio de typescript
interface Avenger{
    nombre:string;
    edad:number;
}

function desplegar(vengador){
    console.log("Desplegando a : " + vengador.nombre);
}

var thor:Avenger = {
    nombre:"Thor",
    edad: 800
};

desplegar(thor);