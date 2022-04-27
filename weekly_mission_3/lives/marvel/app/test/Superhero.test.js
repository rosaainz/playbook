const Superhero = require()

describe("Unit Test for Superhero", () =>{
	test('Case 1: Get a superhero', () => {
		const ironman = new Superhero("Iron Man", "Tony Stark", "Robert Downey Jr.")
		
		expect(ironman.name).toBe("Iron Man")
		expect(ironman.actor).toBe("Robert Downey Jr.")
		expect(ironman.heroName).toBe("Tony Stark")
 });
})

//Para realizar esta prueba necesitamos una clase llamada Superhero 
// con las propiedades: name, actor y heroName