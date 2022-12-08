//puedo crear un tipo, y darle a la variable flash, ese tipo

type Heroe ={
    nombre:string,
    edad:number,
    poderes:any[],
    getNombre:()=>string
};

let flash:Heroe = {
    nombre: "Barry Allen",
    edad: 24,
    poderes: ["Puede correr por el tiempo", 123],
    getNombre() {
        return this.nombre;
    },
}