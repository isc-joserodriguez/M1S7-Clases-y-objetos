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


let persona = { "Nombre": "Esmeralda", "edad": "35", "ocupacion": "Desarrollador" };

function agregarValor(propiedad, valor) {
    persona[propiedad] = valor;
}

agregarValor("apellido", "Robledo");


let nuevoArreglo = ['uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis'];
let [segundo, tercero, cuarto, primero, quinto, sexto] = nuevoArreglo;

/* let primerValor = nuevoArreglo[0];
let segundoValor = nuevoArreglo[1];
let tercerValor = nuevoArreglo[2];
let cuartoValor = nuevoArreglo[3];
let quintoValor = nuevoArreglo[4];
let sextoValor = nuevoArreglo[5]; */

let objetoNuevo = {
    propiedad1: 'valor1',
    propiedad2: 'valor2',
    propiedad3: 'valor3',
    propiedad4: 'valor4',
    propiedad5: 'Hola'
}

/* let primerValor = objetoNuevo.propiedad1;
let segundoValor = objetoNuevo["propiedad2"];
let tercerValor = objetoNuevo.propiedad3;
let cuartoValor = objetoNuevo.propiedad4; */

let { propiedad4: cuartoValor, propiedad5 = 'Default' } = objetoNuevo;

function miFuncion(val1, val2, val3) {
    console.log(`Mi primer valor es ${val1}`);
    console.log(`Mi segundo valor es ${val2}`);
    console.log(`Mi tercer valor es ${val3}`);
}

function miFuncion2({ val1, val2, val3 }) {
    console.log(`Mi primer valor es ${val1}`);
    console.log(`Mi segundo valor es ${val2}`);
    console.log(`Mi tercer valor es ${val3}`);
}

class User {
    constructor(username, password, name, lastname, age) {
        this.usuario = username;
        this.contra = password;
        this.nombre = name;
        this.apellido = lastname;
        this.edad = age;
    }
    nombreCompleto() {
        return this.nombre + " " + this.apellido;
    }
}

const ramon = new User("ramoncito40", "1234", "Ramón", "Jimenez", 55);