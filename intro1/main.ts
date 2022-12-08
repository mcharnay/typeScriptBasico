        function Saludador(saludo:string){
            this.saludo = saludo;
        }

        Saludador.prototype.decirHola = function(){
            return "Hola " + this.saludo;
        }

        let saludador = new Saludador("Mundo");

        let boton = document.createElement('button');

        boton.textContent = "Decir hola";

        boton.onclick = function(){
            alert(saludador.decirHola());
        }

        document.body.appendChild(boton);

        //para compilar en terminal y transformar el ts a js
        // tsc main.ts