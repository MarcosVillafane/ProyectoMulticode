// Función para sumar dos números
function sumar(a, b) {
    return a + b;
}

// Función para restar dos números
function restar(a, b) {
    return a - b;
}

// Función para multiplicar dos números
function multiplicar(a, b) {
    return a * b;
}

// Función para dividir dos números
function dividir(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return a / b;
}

// Ejemplos de uso
console.log("Suma: " + sumar(10, 10)); 
console.log("Resta: " + restar(10, 10)); 
console.log("Multiplicación: " + multiplicar(10, 10)); 
console.log("División: " + dividir(10, 10));