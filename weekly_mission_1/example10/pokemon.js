
    //funcion sayHello()
export function sayHello(){
}

//funcion sayMessage()
export function sayMessage(message){
    console.log(message)
}

//exportamos la clase para usarla en main.js
export default class Pokemon{
    constructor (name){
        this.name = name
    }

    sayHello () {   //definimos la funcion log que imprime un mensaje recibido:
        console.log("Mi pokemon " +this.name+ " te saluda!!!")
     }

    sayMessage(message){
        console.log("Mi pokemon " +this.name+ " dice: " +message )
    }

}

