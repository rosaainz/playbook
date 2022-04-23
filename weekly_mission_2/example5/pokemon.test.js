import Pokemon from './pokemon'   //importa una clase 

test('1) Create a new object pokemon', () => {
  const myPokemon = new Pokemon('Pikachu')   //instanciamos la clase (creamos un objeto)
  expect(myPokemon.name).toBe('Pikachu'); // Corrige esta prueba

  //expect(A).toBe(B);   compara A con B 
});
