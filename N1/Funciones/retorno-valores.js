// ! === Valores de retorno en funciones ===

/**
 * Los valores de retorno son exactamente como suenan: los valores devueltos por la función cuando se completa
 * * https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Return_values
 */

// ? Por ejemplo vamos a crear 3 funciones (cuadrado, cubo y factorial de un número)
// ? los cuales van a retonar un valor de acuerdo a lo que se requiere
// ? estas nuevas funciones me ayudarán en otra función cuando los invoque

function alCuadrado(num) {
  return num * num
}

function alCubo(num) {
  return num * num * num
}

function factorial(num) {
  var x = num
  while (x > 1) {
    num *= x - 1
    x--
  }

  return num
}

function operaciones(num) {
  console.log('El número es: ' + num)

  const res1 = alCuadrado(num)
  console.log('su cuadrado es:' + res1)

  const res2 = alCubo(num)
  console.log('su cubo es:' + res2)

  const res3 = factorial(num)
  console.log('su factorial es:' + res3)
}

//? llamamos a la anterior funcion
operaciones(8)
