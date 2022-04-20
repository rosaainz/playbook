const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
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
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

   //2.1 Imprime el nombre de cada explorer en la lista
   // usa FOREACH
   console.log("Ejercicio 2.1:")
   explorers.forEach(explorer => console.log(explorer.name))
//objeto.forEach(nombreYoleDe => console.log(nombreYoleDe.caracteristica)))

//2.2 Imprime el stack de cada explorer, usa FOR EACH
console.log("\nEjercicio 2.2")
explorers.forEach(item => console.log(item.stack))

//2.3 Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
console.log("\nEjercicio 2.3")
const explorers_stacks = explorers.map(list_explorer => (list_explorer.stack)) //map ayuda a crear una nueva lista apartir de otra, para extraer info
console.log(explorers_stacks) 

//2.4 Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
console.log("\nEjercicio 2.4")
const explorers_with_js = 
explorers.filter(list_explorer => 
    list_explorer.stack.includes("js")) //filter tambien trae info de otra lista y la guarda en una nueva E INCLUDES, hace que busque especificamente 
console.log(explorers_with_js)

//2.5 Busca el primer explorer que sea de la CDMX, usa FIND
console.log("\nEjercicio 2.5")
const first_explorer_in_cdmx = explorers.find(list_explorer => list_explorer.city === "CDMX")
console.log(first_explorer_in_cdmx)

//2.6 Obtén la suma de todos los exercises_completed, usa REDUCE
console.log("\nEjercicio 2.6")
const all_exercises = explorers.reduce((acc, my_explorer_in_list) => acc + my_explorer_in_list.exercises_completed, 0)
    //(acumulador, variable) => acumulador + variable.deDondeLoSacaras, inicializar el acc))
    // el acumulador inicia en 0 y => se le suma lo que hay en my_explorer_in_list.exercises_completed
console.log(all_exercises)

//2.7 Obtén la validación si al menos uno de los explorers tiene la propiedad
// exercisesFinished en frontend como true, usa SOME
console.log("\nEjercicio 2.7")
const frontend_true = explorers.some(list_explorer => list_explorer.missions.frontend.exercisesFinished === true)
console.log(frontend_true)

//2.8 Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding
// como true. Usa EVERY.
console.log("\nEjercicio 2.8")
const all_onboarding_finished = explorers.every(list_explorers => list_explorers.missions.onboarding.excercisesFinished === true)
console.log(all_onboarding_finished)

