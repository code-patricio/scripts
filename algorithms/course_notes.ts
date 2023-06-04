// LinearSearch from @theprimeagen algorithms course

// Grow from input
// Drop CONSTANT
// Worst Scenerio

// "Oh of N = alg > linear based of input

// #Breeze
function sum_char_codes(n: string): number {
    let sum = 0;
    for (let i = 0; i < n.length; ++i) {
        sum += n.charCodeAt(i);
    }
    
    return sum;
}

// n: string -- tiene un largo y una serie de caracteres asociados
// for ... -- tiene que ejecutar segun el largo de la cadena otorgada
// si el input crece, nuestro algoritmo tambien

function sum_char_codes(n: string): number {
    let sum = 0;
    for (let i = 0; i < n.length; ++i) {
        sum += n.charCodeAt(i);
    }
    
    for (let i = 0; i < n.length; ++i) {
        sum += n.charCodeAt(i);
    }

    return sum;
}

// el segundo "for" hace lo mismo lo cual significa que multiplica el tiempo
// que toma al algoritmo ejecutarse
// teoricamente hablando 2 of N
// No estamos buscando medir el tiempo exacto por lo tanto las constantes "2"
// no se toma en cuenta
// Por lo que sigue siendo N


function sum_char_codes(n: string): number {
    let sum = 0;
    for (let i = 0; i < n.length; ++i) {
        sum += n.charCodeAt(i);
        // Capital E
        if (charCode === 69) {
            return sum;
        }

        sum += charCode;
    }
    
    return sum;
}

// En BigO se considera los peores casos posibles
// y en eso nos basamos para la medicion
// En el ejemplo anterior el peor caso es que la cadena no tenga "E"
// por lo que ejecutamos todo = N
// Si "E" se encuentra al final, o un caracter antes del ultimo eso significa
// N - 1 -- tiramos las constantes lo cual sigue siendo N


// O(1) -- constant with time no importa el input
// O(logn) -- log2
// O(n) -- linear
// O(nlogn) -- common
// O(n^2) -- grows blazilyng fast
// O(2^n) -- Antman where are u?!
// O(n!) -- God?

// # O(N^2)

function sum_char_codes(n: string): number {
    let sum = 0;
    for (let i = 0; i < n.length; ++i) {
        for (let j = 0; j < n.length; ++j) {
            sum += charCode;
        }
    } 

    return sum;
}
// Por cada caracter(i) ejecutamos(j) por cada caracter

// # O(N^3)

function sum_char_codes(n: string): number {
    let sum = 0;
    for (let i = 0; i < n.length; ++i) {
        for (let j = 0; j < n.length; ++j) {
            for (let k = 0; k < n.length; ++k) {
                sum += charCode;
            }
        }
    } 

    return sum;
}
// Por cada caracter(i) ejecutamos(j) por cada caracter por cada carecter(k)
// Es como multiplicar matrices


// # O(nlogn) -- QuickSort
// # O(logn) -- Binary search trees
// # O(sqrt(n)) -- Mind Expand!!


// Grow from input
// Drop CONSTANT
// Worst Scenerio

// Arrays -- Data Structures

const a = []

// Una array es un espacio de memoria irrompible
// solo contiene numeros 010011
// la maquina es quien lo interpreta segun el compilador utilizado
// y lo convierte en el tipo de dato buscado
// a + width * offset ?
// getting index -- posicion en el espacio de memoria 
// insert index -- no inserta valores en la memoria sino que la sobreescribe
// deletion index -- no elimina algo en una memoria irrompible lo sobreescribe como 0

// BUSQUEDA A LO INDIANA JONES

// LinearSearch

{
for (let i = 0; i < haystack.length; ++i) { 
        if (haystack[i] === needle) {
            return true;
        }
    }
    
    return false;
}
// 

// BinarySearch -- Sorted Array

{
let lo = 0;
    let hi = haystack.length;

    do {
        const m = Math.floor(lo + (hi - lo) / 2);
        const v = haystack[m];

        if (v === needle) {
            return true;
        } else if (v > needle) {
            hi = m;
        } else {
            lo = m + 1;
        }

    } while (lo < hi);

    return false;
}
//


// Sorting


