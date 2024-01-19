// ! === Funciones ===

/**
 * Otro concepto esencial en la codificación son las funciones,
 * que le permiten almacenar un fragmento de código que realiza una
 * sola tarea dentro de un bloque definido y luego llamar a ese código cuando lo necesite usando un solo comando corto,
 * en lugar de tener que escribir el mismo código varias veces.
 * * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions
 */

// * Funciones vs Métodos

/**
 * Las funciones que forman parte de los objetos se denominan métodos.
 *
 * Una función en JavaScript es un bloque de código diseñado para realizar
 * una tarea específica. Puede aceptar parámetros y devolver un valor.
 * Las funciones pueden ser declaradas o expresadas.
 *
 * Un método es una función que está asociada a un objeto y se llama en el
 * contexto de ese objeto.
 * Los métodos son propiedades de un objeto que contienen funciones
 */

// Función
function suma(a, b) {
  return a + b
}

let resultado = suma(3, 5) // Llamada a la función
console.log(resultado)

// Método
let objeto = {
  nombre: 'Ejemplo',
  mostrarNombre: function () {
    console.log(this.nombre)
  }
}

objeto.mostrarNombre()

/**
 * Comparación
 *
 * Definición:
 *  Funciones > Pueden ser independientes o parte de un objeto.
 *  Métodos > Siempre están asociados a un objeto.
 *
 * Llamada:
 *  Funciones > Se llaman directamente.
 *  Métodos > Se llaman en el contexto de un objeto.
 *
 * Context:
 *  Funciones > No dependen del contexto del objeto.
 *  Métodos >  Dependientes del contexto del objeto.
 *
 * Invocación:
 *  Funciones > Funciones()
 *  Métodos > Objeto.metodo()
 *
 * En resumen, las funciones en JavaScript son bloques de código independientes,
 * mientras que los métodos son funciones asociadas a objetos
 * y se llaman en el contexto de esos objetos.
 */

// * Invocación de funciones

/**
 * Para usar una función luego de que se haya definido, tienes que ejecutarla o invocarla.
 * Esto es posible incluyendo el nombre de la función en el código en alguna parte
 */

// Esta forma de creear una función se conoce como DECLARACIÓN de función.
// Siempre se eleva, por lo que se puede llamar a la función antes o después de la misma.

function myFunction() {
  console.log('Hola')
}

myFunction() // calls the function once

// * Diferencia entre Función DECLARADA y Función EXPRESADA

// Función Declarada

// Sintaxis
function suma(a, b) {
  return a + b
}

// Hosting
/**
 * Las declaraciones de funciones son elevadas (hoisted) al inicio de su contexto de ejecución.
 * Esto significa que puedes llamar a la función antes de su declaración en el código.
 */

resultado = suma(3, 5)

function suma(a, b) {
  return a + b
}

console.log(resultado) // Resultado: 8

// Visibilidad
/**
 * Las declaraciones de funciones son visibles en todo el ámbito en el que están declaradas,
 * lo que significa que pueden ser llamadas desde cualquier parte del código,
 * incluso antes de la declaración.
 */

// Función Expresada

// Sintáxis
let resta = function (a, b) {
  return a - b
}

// Hoisting
/**
 * Las funciones expresadas no son elevadas al inicio de su contexto de ejecución.
 * Debes declarar la variable antes de llamar a la función,
 * de lo contrario, obtendrás un error.
 */
// resultado = resta2(8, 3) //ERROR

let resta2 = function (a, b) {
  return a - b
}

// Visibilidad
/**
 * Las funciones expresadas solo son visibles después de su declaración en el código.
 * No se pueden llamar antes de la declaración,
 * ya que la variable que las contiene aún no existe.
 */

// * Parametros de una función

/**
 * Algunas funciones requieren que se especifiquen parámetros cuando se invocan.
 * estos son valores que deben incluirse dentro de los paréntesis de la función
 */

function validarActivacionToken(hasCelular, hasClave6) {
  let estado = hasCelular && hasClave6 ? true : false

  return estado
}

let respuestaValidacion = validarActivacionToken(true, false)
console.log('Puede activar su token digital? ' + respuestaValidacion)

// Aun que pueden existir funciones que no requieran parametros
const myNumber = Math.random()

// * Parametros opcionales

/**
 * Algunos parametros son opcionales. Si no se les específica la función generalmente toma un tipo de comportamiento.
 */

// ? Por ejemplo la función join() tiene la opción de agregarle o no parametros al llamarlo

const myArray = ['I', 'love', 'chocolate', 'frogs']
const madeAString = myArray.join(' ')
console.log(madeAString)
// returns 'I love chocolate frogs'

const madeAnotherString = myArray.join()
console.log(madeAnotherString)
// returns 'I,love,chocolate,frogs'

/**
 * Existen distintas maneras de creear una función con parametros opcionales
 */

// 1. Usando un objeto con propiedades predeterminadas
function crearUsuario({ nombre, edad = 25, ciudad = 'Desconocida' }) {
  console.log(`Nombre: ${nombre}, Edad: ${edad}, Ciudad: ${ciudad}`)
}

crearUsuario({ nombre: 'Carlos' }) // Edad y ciudad toman sus valores por defecto
crearUsuario({ nombre: 'Ana', edad: 30, ciudad: 'Barcelona' })

// 2. Usando parametros opcionales mediante condicional
function calcularPrecio(base, descuento) {
  const precioFinal = descuento ? base - descuento : base
  console.log(`Precio final: ${precioFinal}`)
}

calcularPrecio(100) // Descuento se considera como 0
calcularPrecio(100, 20) // Descuento especificado

//3. Manejando argumentos con el operador rest(...)
function sumar(...numeros) {
  return numeros.reduce((total, numero) => total + numero, 0)
}

console.log(sumar(1, 2, 3, 4)) // Suma de todos los argumentos

// * Parametros por defecto

/**
 * Si estas escribiendo una función y deseas establecer un parametro opcional.
 * Puedes especificar un valor por defecto agregando "=" luego del nombre del parametro
 * seguido de su valor por defecto. (Tenemos un ejemplo en el punto anterior)
 */

function hello(name = 'Chris') {
  console.log(`Hello ${name}!`)
}

hello('Ari') // Hello Ari!
hello() // Hello Chris!

// * Funciones Anònimas

/**
 * Usualemente cuando declaramos una función le agregamos un nombre
 * Pero existen casos en el no se necesita indicar un nombre a la función.
 * Estos casos pueden ser cuando se intenta pasar una función como parametro de otra función
 */

// ? Por ejemplo, la función addEventListener() tiene como primer parametro el tipo de evento
// ? y como segundo parametro puede recibir una función (aquì veremos como usar una función anónima)

// Usando una función previamente declarada
function logKey(event) {
  console.log(`You pressed "${event.key}".`)
}

// textBox.addEventListener('keydown', logKey)

// Agregando una función anónima como parámetro
// textBox.addEventListener('keydown', function (event) {
//   console.log(`You pressed "${event.key}".`)
// })

// * Arrow functions o funciones flecha

/**
 * Es una forma más concisa y más sintacticamente compactada de definir una función.
 * No es necesario definirlo agregando adelante la palabra clave function
 * Si la función tiene solo un parametro, los paréntesis al rededor sin opcionales
 */

// ? Por ejemplo podemos usarlo con el ejemplo anterior de la función anónima que pasa como parametro
// textBox.addEventListener('keydown', (event) => {
//   console.log(`You pressed "${event.key}".`)
// })

// ? Si la función tiene solo un parametro, los paréntesis al rededor sin opcionales
// textBox.addEventListener('keydown', (event) => {
//   console.log(`You pressed "${event.key}".`)
// })

// ? Si la función contiene solo una linea, puedes también omitir las llaves y la palabra clave return
const originals = [1, 2, 3]
const doubled = originals.map((item) => item * 2)

console.log(doubled) // [2, 4, 6]

/**
 * Se recomienda usar Arrow function, ya que pueden hacer que el código sea más corto y más legible
 * * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
 */

// * Function scope o Alcance de una función

/**
 * Cuando se crean una función, las variables y otras cosas definidas dentro de su propio
 * alcance separado, lo que significa que están bloqueadas en sus propios compartimentos
 * separados, inalcanzables desde el código fuera de las funciones.
 */

/**
 * El nivel superior fuera de todas las funciones se llaman de alcance global.
 * Estos valores definidos en el ámbito global son accesibles desde cualquier lugar del código
 */

// TODO: Para Practicar
// * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions
