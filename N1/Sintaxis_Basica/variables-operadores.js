// Inicio de proyecto
console.log('hola mundo')

// !=== Variables ===

/**
 * Una variable es un contenedor para un valor, como un número que podríamos usar
 * en una suma, o una cadena que podríamos usar como parte de una oración.
 * Pero una cosa especial acerca de las variables es que los valores que contienen pueden cambiar.
 * * https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/Variables
 */

// * Declarar variables
/**
 * Para los nombres de las variables e suele usar la convencion de camelCase
 * Deben ser nombres claros e intuitivos que describan su utilidad
 * No se debe usar palabras reservadas como  var, function, let y for
 */
var miNombre
var miEdad

// * Iniciar variables
miEdad = 27
miNombre = 'Daniel'

// * Iniciar y declarar variable
var estado = true

// >> Vamos a mostrarlo <<
console.log(miEdad)
console.log(miNombre)
console.log(estado)
console.log('la edad de ' + miNombre + 'es ' + miEdad)

// * Diferencia entre var y let

/**
 * Con var puedes iniciar una variable y luego intentar inicializarla, no genera error
 * A demás puedes declararla cuantas veces quieras y no genera error
 */
ciudad = 'Chiclayo'
console.log(ciudad)

var ciudad = 'Lima'
var ciudad = 'Ica'

/**
 * Con let no puedes declarar una variable y luego intentar inicializar, esto si genera error
 * Esto es bueno — declarar una variable después de iniciarla resulta en un código confuso y más difícil de entender.
 * En cambio con let no puedes declarar una misma variable varias veces en un mismo espacio de bloque, salta un error en la misma IDE
 */
let libro = 'El marciano'
autorLibro = 'Andy Weir'
console.log('el libro que me gusta es: ' + libro)
let = 'Proyecto Hail Marry' // Esto si es posible por que se esta actualizando el valor de una variable previamente declarada
// let autor // Esto generará un error por que previamente la variable let ya ha sido inicializada
// let libro = 'La luna roja' // Esto generará un error por que previamente la variable let ya ha sido declarada

/**
 * Por estas y otras razones, se recomienda utilizar let tanto como sea posible en tu código, en lugar de var
 */

//  !=== Tipos de Variables ===

/**
 * * https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/Variables
 */

/**
 * * Números
 * Ya sea números enteros como 30 (también llamados enteros — "integer") o números decimales como 2.456 (también llamados números flotantes o de coma flotante — "number").
 */

let cantidadSoles = 100
let equivalenciaDolar = 3.7
console.log(
  cantidadSoles +
    ' Soles a dolares es ' +
    cantidadSoles * equivalenciaDolar +
    'USD'
)

/**
 * * Cadenas de caracteres o String
 * Son piezas de texto
 */
let peliculaFavorita = 'Harry Potter y el misterio del príncipe'
console.log('Mi peli favorita es ' + peliculaFavorita)

/**
 * * Booleanos
 * son valores verdadero/falso — pueden tener dos valores, true o false. Estos, generalmente se utilizan para probar una condición
 */
let estadoHabilitado = true
console.log('Estado: ' + estadoHabilitado)

/**
 * * Arreglos
 * es un objeto único que contiene múltiples valores encerrados entre corchetes y separados por comas.
 */
let distritosCircuitoPlayas = [
  'Barranco',
  'Chorrillos',
  'San Isidro',
  'Miraflores',
  'Magdalena',
  'San Miguel'
]
console.log(
  'Distritos del circuito de playas de Lima: ',
  distritosCircuitoPlayas
)

console.log(
  'Distritos más conocido del circuito de playas de Lima: ',
  distritosCircuitoPlayas[3]
) // puedes acceder a cada valor por su ubicación dentro del arreglo

/**
 * * Objeto
 * es una estructura de código que modela un objeto de la vida real.
 */
let autor = {
  nombre: 'Andy',
  apellido: 'Weir',
  genero: 'Ciencia Ficción',
  edad: 45,
  libros: ['El marciano', 'Proyecto Hail Marry', 'Artemise'],
  activo: true
}
console.log(
  'El autor ' +
    autor.nombre +
    ' es del genero literario de ' +
    autor.genero +
    ' y a escrito: ' +
    autor.libros
)
console.log('De este autor mi libro favorito es: ' + autor.libros[0]) //Para recuperar la información almacenada en el objet

// Ojo para identificar que tipo de valor es puede usar lo siguiente typeof
console.log('Descubre ... el tipo de valor es: ' + typeof peliculaFavorita)

// * Constantes
// es un valor que, una vez declarado no se puede cambiar.
const moneda = 'PEN' // A la constante siempre se debe iniciar con un valor al declararlo
//  moneda = "USD" // La constante no puede variar luego

//  !=== Operadores Aritmeticos ===
/**
 * + adición
 * - sustracción
 *  multiplicacion
 * / división
 * % sobrante
 *
 * * https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/Math
 */
let num1 = 10
let num2 = 50

const resultado = num2 + num1 / 8 + 2
console.log(resultado) // Es el resultado que esperabas?

/**
 * La precedencia de operadores en JavaScript es la misma que en las matemáticas de la escuela —
 * La multiplicación y la división se resuelven siempre primero,
 * luego la suma y resta (la suma siempre se evalua de izquierda a derecha).
 */

// Operadores de incremento y decremento

/**
 * Algunas veces necesitarás repetidamente sumar o restar uno de/a una variable numérica.
 * Esto puede hacerse convenientemente usando los operadores de incremento (++) y decremento (--)
 */

let numeroIncremento = 5
numeroIncremento++
console.log('incrementar', numeroIncremento)

let numeroDecremento = 5
numeroDecremento--
console.log('incrementar', numeroDecremento)

// Operadores de asignación

/**
 * += Adición asignación
 * -= Resta asignación
 * *= Multiplicación asignación
 * /= División asignación
 */

let x = 3 // x contiene el valor 3
let y = 4 // y contiene el valor 4
let z = 10 // z contiene el valor 10
x *= y // x ahora contiene el valor 12
z += y
console.log('el nuevo valor de x es:' + x)
console.log('el nuevo valor de z es:' + z)

// Operadores de comparación

/**
 * ===	Igual estricto (evalua el tipo de dato también) - Comprueba si los valores izquierdo y derecho son idénticos entre sí	5 === 2 + 4
 * !==	Igual no-estricto - Comprueba si los valores izquierdo y derecho no son idénticos entre sí	5 !== 2 + 3
 * <	Menor que	- Comprueba si el valor izquierdo es menor que el derecho.	10 < 6
 * >	Mayor que	- Comprueba si el valor izquierdo es mayor que el derecho.	10 > 20
 * <=	Menor o igual a	- Comprueba si el valor izquierdo es menor o igual que el derecho.	3 <= 2
 * >=	Mayor o igual a - Comprueba si el valor izquierdo es mayor o igual que el derecho.. 5 >= 4
 */

// !=== Propiedades y métodos con cadenas STRING ===

/**
 * Consideremos que todo es un objeto.
 * Por tal motivo una cadena STRING, se comporta como un objeto, el cual cuenta con su constructor, propiedades y métodos que podriamos usar
 * * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String
 */

// Longitud de una cadena - propiedad Length
let cadena = 'apple pencil'
console.log('Mi cadena tiene ' + cadena.length + ' caracteres') //Ojo el espacio lo considera como un caracter

// Extraer un caracter en específico
console.log('La primera letra de la palabra es', cadena[0]) // Como todo en computación se inicia desde 0 tomando como posición que es el primer caracter
console.log('La ultima letra será: ' + cadena[cadena.length - 1])

// Encontrar una subcadena y extraerla
console.log(cadena.indexOf('pencil')) // Aqui nos indica en que posición comienza la subcadena consultada
console.log(cadena.indexOf(' ')) // Si queremos determinar en que posición esta el espacio entre ambas palabras
console.log(cadena.indexOf('mini')) // Esto dará un resultado -1 por que esa sub cadena no ha sido encontrada

console.log(cadena.slice(0, 5)) // Si quiero extraer una parte de la cadena puedo indicar como el primer parametro es la posición del caracter en la que comenzar a extraer, y el segundo parámetro es la posición del caracter posterior al último a ser extraído.
console.log(cadena.slice(6)) // Si se desea extraer todo lo que esta justo despues del valor inidicado se puede omitir el segundo parametro

let posicionEspacio = cadena.indexOf(' ')
console.log(cadena.slice(0, posicionEspacio)) // Otra forma de extraer el primera palabra
console.log(cadena.slice(posicionEspacio + 1)) // Otra forma de extraer el segunda palabra

// Cambiar todo a mayuscula o todo a miniscula
console.log(cadena.toLocaleLowerCase()) // Método para cambiar todo a miniscula
console.log(cadena.toUpperCase()) // Método para cambiar todo a MAYUSCULA

// Cambiar o reemplazar una parte de una cadena
/**
 * En una cadena puedes reemplazar una subcadena por otra usando el método replace(). Esto funciona de manera muy simple a un nivel básico
 * Toma dos parámetros — la cadena que deseas reemplazar, y la cadena con la que deseas reemplazarla.
 */
let cadenaNueva = cadena.replace('pencil', 'pencil USB C')
console.log(cadenaNueva)

/**
 * TODO: Para practicar
 * * https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/Useful_string_methods
 */
