console.log("Creación de un objeivo con propiedades:")

const myObject = { //objeto 
    name: "Juan",  //propiedades
    age: 27,
    mission: "Node JS"
}

console.log(myObject) //imprime las propiedades del objeto

console.log("Accediendo a las propiedades del objeto: ")
console.log(myObject.age)  //imprime la propiedad del objeto que pedimos
console.log(myObject["age"])  //imprime una propiedad que indiquemos

const ajolonauta = {
    name: "Woopa",
    mission: "Node JS",
    sayHello: function(){   //creacion de funcion
        console.log("Soy el ajolonauta, que onda!") //instruccion de la funcion 
    },
    tellMeMore: function(){
        console.log('Ajolonauta: '+this.name)  //la palabra this hace referencia al contexto del objeto (lo que obtiene)
        //return 'Ajolonauta: ${this.name}' //otra manera de escribir la linea de arriba
    }
}

console.log("Ajolonauta:")
console.log(ajolonauta)
ajolonauta.sayHello() //llamada a la funcion
ajolonauta.tellMeMore()