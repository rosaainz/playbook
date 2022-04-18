console.log("Examples 1")

const names = ["Carlo", "Juan", "Pedro", "Pablo", "Jorge"]
console.log(names)

const explorers = [
    {
        name: "Explorer 1",
        exercises_completed: 10,
        city: "CDMX",
        rate: 99,
        stack: [ "js", 'C#' ],
        missions: {
            onbording: {
                isFinished: true,
                excercisesFinished: true 
            },
            frontend:{
                isFinished: true,
                excercises_completed: true
            }
        }
    },

    {
        name: "Explorer 2",
        exercises_completed: 9,
        city: "Veracruz",
        rate: 50,
        stack: [
            "js"
        ],
        missions: {
            onbording: {
                isFinished: false,
                excercisesFinished: false 
            },
            frontend:{
                isFinished: false,
                excercises_completed: false
            }
        }
    },
    {
        name: "Explorer 3",
        excercises_completed: 3,
        city: "Sonora",
        rate: 100,
        stack:[
            "elixir"
        ],
        missions:{
            onboarding:{
                isFinished: true,
                excercisesFinished: true
        },
            frontend:{
                isFinished: false,
                exercisesFinished: false
            }
        }
    }
]

console.log(explorers)

//Ejercicio 2 live
console.log("Ejercicio 2.1")

//usamos el metodo forEach, que nos permite recorrer 
explorers.forEach(explorer => console.log(explorer)) //imprime los explorers completos, ya con missions


//para imprimir solo una carcateristica:
explorers.forEach(explorer => console.log(explorer.name))
//objeto.forEach(nombreYoleDe => console.log(nombreYoleDe.caracteristica)))


console.log("Ejercicio 2.2")
explorers.forEach(item => console.log(item.stack))

//crea una lista de listas usando el metodo map
//va a la lista de explorers, trae el stack y los pone en una nueva lista
console.log("Ejercicio 2.3")
const explorers_stacks = explorers.map(my_explorer_in_list => (my_explorer_in_list.stack)) //map ayuda a crear una nueva lista apartir de otra, para extraer info
console.log(explorers_stacks) 


//Obten la lista de los explorers que tengan en su lista "js" 
console.log("Ejercicio 2.4")
const explorers_with_js = explorers.filter(my_explorer_in_list => my_explorer_in_list.stack.includes("js")) //filter tambien trae info de otra lista y la guarda en una nueva E INCLUDES, hace que busque especificamente 
console.log(explorers_with_js)