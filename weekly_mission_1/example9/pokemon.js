//creacion de clase con su constructor
class Pokemon{
    constructor (name){
        this.name = name;
    }

    //funcion sayHello()
sayHello(){
    console.log("Mi pokemon " +this.name+ " te saluda!!!")
}

//funcion sayMessage()
sayMessage(message){
    console.log("Mi pokemon " +this.name+ " dice: " +message )
}
}

//exportamos la clase para que la reciba main.js
module.exports = Pokemon
