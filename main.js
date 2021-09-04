/*
Crear un método que imprima en consola los números del 1 al 100
tomando en cuenta lo siguiente:

** Si el número es múltiplo de 3, 
    imprimirá ‘Fizz’.
** Si el número es múltiplo de 5, 
    imprimirá ‘Buzz’.
** Si el número es múltiplo de 3 y de 5, 
    imprimirá ‘FizzBuzz’.
** Si el número no es múltiplo de 3 ni de 5, 
    imprimirá el número.
*/

function fizzbuzz() {
    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}

fizzbuzz();