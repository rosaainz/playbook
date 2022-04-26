const Ajolonauta = require('./../app/Ajolonauta')

describe("Pruebas de unidad de Ajolonauta", () =>{
    test('Caso de prueba 1: Creación de objeto', () =>{
        //codigo que queramos usar 
        const woopa = new Ajolonauta("Woopa")

        //validar el reultado esperado
        expect(woopa.name).toBe("Woopa");
    });
})