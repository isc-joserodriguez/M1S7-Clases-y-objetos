/* fizzbuzz();

console.log(mensaje); */

function saludo() {
    var mensaje = 'Hola que tal?';
    if (true) {
        var mensaje = 'Adiós';
        console.log(mensaje);
    }
    console.log(mensaje);
}

saludo();
console.log('#########');
function saludoLet() {
    let mensaje = 'Hola que tal?';
    if (true) {
        let mensaje = 'Adiós';
        console.log(mensaje);
    }
    console.log(mensaje);
}

saludoLet();

let cadena1 = 'Hola'
let cadena2 = 'Adiós';

console.log(
    cadena1 + 'Fulano,' + 'te despido' + cadena2
)

console.log(
    `${cadena1} Fulano, 
    
        
    
    te despido ${cadena2}`
)



let arreglo = ['Pedro', 'Samuel', 'Roberto'];
arreglo[0]
/*
0 =>Pedro
1 =>Samuel
2=> Roberto
 */

let perros = [
    {
        "nombre": "Firulais",
        raza: "Labrador",
        edad: 10,
        "tipo sangre": "O",
        trucos: ['Dar patita', 'Acostarse', 'Sentarse', 'Dar la vuelta'],
        "Salud dental": {
            "Diente 1": "Correcto",
            "Diente 2": "Caries"
        },
        5: 'Hoola'
    },
    {
        "nombre": "Firulais",
        raza: "Labrador",
        edad: 10,
        "tipo sangre": "O",
        trucos: ['Dar patita', 'Acostarse', 'Sentarse', 'Dar la vuelta'],
        "Salud dental": {
            "Diente 1": "Correcto",
            "Diente 2": "Caries"
        },
        5: 'Hoola'
    },
    {
        "nombre": "Firulais",
        raza: "Labrador",
        edad: 10,
        "tipo sangre": "O",
        trucos: ['Dar patita', 'Acostarse', 'Sentarse', 'Dar la vuelta'],
        "Salud dental": {
            "Diente 1": "Correcto",
            "Diente 2": "Caries"
        },
        5: 'Hoola'
    },
    {
        "nombre": "Firulais",
        raza: "Labrador",
        edad: 10,
        "tipo sangre": "O",
        trucos: ['Dar patita', 'Acostarse', 'Sentarse', 'Dar la vuelta'],
        "Salud dental": {
            "Diente 1": "Correcto",
            "Diente 2": "Caries"
        },
        5: 'Hoola'
    },
    {
        "nombre": "Firulais",
        raza: "Labrador",
        edad: 10,
        "tipo sangre": "O",
        trucos: ['Dar patita', 'Acostarse', 'Sentarse', 'Dar la vuelta'],
        "Salud dental": {
            "Diente 1": "Correcto",
            "Diente 2": "Caries"
        },
        5: 'Hoola'
    },
    {
        "nombre": "Firulais",
        raza: "Labrador",
        edad: 10,
        "tipo sangre": "O",
        trucos: ['Dar patita', 'Acostarse', 'Sentarse', 'Dar la vuelta'],
        "Salud dental": {
            "Diente 1": "Correcto",
            "Diente 2": "Caries"
        },
        5: 'Hoola'
    },
    {
        "nombre": "Firulais",
        raza: "Labrador",
        edad: 10,
        "tipo sangre": "O",
        trucos: ['Dar patita', 'Acostarse', 'Sentarse', 'Dar la vuelta'],
        "Salud dental": {
            "Diente 1": "Correcto",
            "Diente 2": "Caries"
        },
        5: 'Hoola'
    },
    {
        "nombre": "Firulais",
        raza: "Labrador",
        edad: 10,
        "tipo sangre": "O",
        trucos: ['Dar patita', 'Acostarse', 'Sentarse', 'Dar la vuelta'],
        "Salud dental": {
            "Diente 1": "Correcto",
            "Diente 2": "Caries"
        },
        5: 'Hoola'
    },
    {
        "nombre": "Firulais",
        raza: "Labrador",
        edad: 10,
        "tipo sangre": "O",
        trucos: ['Dar patita', 'Acostarse', 'Sentarse', 'Dar la vuelta'],
        "Salud dental": {
            "Diente 1": "Correcto",
            "Diente 2": "Caries"
        },
        5: 'Hoola'
    }
];

let perro = {
    "nombre": "Firulais",
    raza: "Labrador",
    edad: 10,
    "tipo sangre": "O",
    trucos: ['Dar patita', 'Acostarse', 'Sentarse', 'Dar la vuelta'],
    "Salud dental": {
        "Diente 1": "Correcto",
        "Diente 2": "Caries"
    },
    5: 'Hoola'
};
console.log(perro);
console.log(perro.raza);
console.log(perro["raza"]);
let variable = "raza";
console.log(perro[variable]);

//Asignación de valor
let variable2 = "edad";
perro[variable2] = "Diez años";
perro.edad = 12
perro["edad"] = "Otro valor";

/*
JSON
JavaScript Object Notation
*/


let objeto = {};