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

