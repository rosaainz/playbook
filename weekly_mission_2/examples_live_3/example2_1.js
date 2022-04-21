console.log("POO")

// objeto de js   Abstraer informacion
const woopa_obj_js = {
    name: "Woopa",
    mission: "Node JS",
    age: "12",
    color: "pink"
}


// Crear una clase vacia
class Ajolonauta {  //la sintaxis va con inicial mayuscula 
    //clase vacia 

}
console.log("Clase vacia:")
console.log(Ajolonauta)


// Creacion de un objeto a partir de la clase Ajolonauta
const woopa = new Ajolonauta() //el crear un objeto se le llama "instanciar"
const wooper = new Ajolonauta() //nuevo objeto 
const woopy = new Ajolonauta() //nuevo objeto

console.log("\n Imprimir los objetos de la clase vacia")
console.log(woopa)
console.log(wooper)
console.log(woopy)  //objeto que viene de una clase
console.log("\n Imprimir objeto de JS")
console.log(woopa_obj_js) //objeto de JS
 
// Metodo constructor 
class Ajolonauta_constructor {
    constructor(name, mission, age, color){  //parametros de la clase
        //inicializacion de los parametros, aqui se va a guardar lo que indiquemos al instanciar
        this.name = name              
        this. mission = mission
        this.age = age
        this.color = color
    }
}

//instanciar e imprimir objeto de clase con constructor 
console.log("\n Imprimir objeto de clase con constructor: ")
const new_woopa = new Ajolonauta_constructor("Woopa", "Node JS", 18, "Pink")
console.log(new_woopa)

// instanciar otro objeto de clase con constructor
console.log("\n Imprimir NUEVO objeto de clase con constructor: ")
const new_wooper = new Ajolonauta_constructor("Wooper", "java", 10, "Blue")
console.log(new_wooper)