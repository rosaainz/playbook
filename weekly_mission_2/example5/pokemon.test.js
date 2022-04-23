import Pokemon from './pokemon'   //importa una clase 

test('1) Create a new object pokemon', () => {
  const myPokemon = new Pokemon('Pikachu')   //instanciamos la clase (creamos un objeto)
  expect(myPokemon.name).toBe('Pikachu'); // Prueba

  //expect(A).toBe(B);   compara A con B 
});


/// TDD test driven development 
// 1. Escribir una prueba de lo que vamos a modelar
// 2. Correr la prueba y verla fallar
// 3. Escribir el código que haga que pase esa prueba 
