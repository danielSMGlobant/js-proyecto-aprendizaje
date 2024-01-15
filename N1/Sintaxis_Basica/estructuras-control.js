// ! === Condicionales ===

/**
 * Los seres humanos (y otros animales) toman decisiones todo el tiempo que afectan sus vidas
 * * https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/conditionals
 */

//* Declaraciones if ... else

let precioIpad10 = 2300
let precioIpadMini = 2100
let precioIpadAir5 = 3000
let ahorroDinero = 2100
let porcentajeBateria = 80
let conectadoCargador = false

if (porcentajeBateria === 100) {
  console.log('Bateria totalmente cargada')
} else {
  console.log('Bateria cargando ...')
}

//* Anidando if ... else

if (porcentajeBateria === 100) {
  console.log('Bateria totalmente cargada')
} else if (porcentajeBateria > 10) {
  console.log('Bateria en uso ...')
} else {
  console.log('Bateria descargada, porfavor conectar a cargador ...')
}

//* Operadores lógicos: AND, OR y NOT

/**
 * Si quieres probar multiples condiciones sin escribir declaraciones if...elseanidados,
 * los operadores lógicos pueden ayudarte.
 */

/**
 * && — AND; le permite encadenar dos o más expresiones para que todas ellas se tengan
 *           que evaluar individualmente true para que expresión entera retorne true.
 * || — OR; le permite encadenar dos o más expresiones para que una o más de ellas se tengan
 *          que evaluar individualmente true para que expresión entera retorne true.
 */

if (porcentajeBateria === 100 && conectadoCargador) {
  console.log('Bateria totalmente cargada')
} else if (porcentajeBateria < 100 && conectadoCargador) {
  console.log('Bateria cargando ...')
} else {
  console.log('Necitas conectarlo al cargador')
}

//* Declaraciones con switch

// switch (expresion) {
//   case choice1:
//     ejecuta este código
//     break

//   case choice2:
//     ejecuta este código
//     break

//   Se pueden incluir todos los casos que quieras

//   default:
//      por si acaso, corre este código
// }

switch (ahorroDinero) {
  case precioIpad10:
    console.log('Puedes comprarte un Ipad 10')
    break

  case precioIpadMini:
    console.log('Puedes comprarte un Ipad Mini')
    break

  case precioIpadAir5:
    console.log('Puedes comprarte un Ipad Air')
    break

  default:
    console.log('No puedes comprarte un Ipad')
    break
}

// * Operador Ternario

/**
 * El operador ternario o condicional es una pequeña sintaxis que prueba una condición
 * y devuelve un valor/expresión, si es true, y otro si es false —
 * Esto puede ser útil en algunas situaciones, y puede ocupar mucho menos código
 * que un bloque if...else si simplemente tienes dos opciones que se eligen a
 * través de una condición true/false
 */

// ( condición ) ? ejecuta este código : ejecuta este código en su lugar

//? En este ejemplo vamos a evaluar si aprobo o no el examen de manejo por los puntos restados
function resultadoExamenManejo(puntosRestados) {
  const estado = puntosRestados >= 60 ? 'Desaprobado' : 'Aprobado'
  console.log('Resultados examen de manejo: ' + estado)
}
resultadoExamenManejo(70)

// TODO: Para practicar
/**
 * Aprendizaje activo: Un calendario simple
 * * https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/conditionals
 */
