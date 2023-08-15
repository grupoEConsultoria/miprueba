//this
//contexto global
console.log(this);
//contexto funcion
function mostrarThis(){
    console.log(`this en funcion: ${this}`);
}
mostrarThis()
//use strict  ..... yo no puedo acceder ni dentro de una funcion ni en global cuando estoy en strict
function mostrarThisStrict(){
    'use strict'
    console.log(`this con strict mode: ${this}`);
}
mostrarThisStrict()
//this con objetos..... en este caso this hace referencia a saludar no hace referencia a persona
//
const persona = {
    nombre: 'Vladimir',
    saludar: ()=>{
        console.log(`this con objetos: ${this.nombre}`);
    }
}
persona.saludar()
// this en contexto de clase
function Persona(n) {
    this.name = n
}
Persona.prototype.saludar = function(){
    console.log(`el nombre de la persona es: ${this.name}`);
}

const Vladimir = new Persona('Vladimir')
Vladimir.saludar()