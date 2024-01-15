// !=== BUCLES ===

/**
 * Los bucles se tratan de hacer lo mismo una y otra vez.
 * A menudo, el código será ligeramente diferente cada vez que dure el bucle,
 * o se ejecutará el mismo código pero con diferentes variables.
 * * https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Looping_code
 */

// * Recorriendo colecciones con un bucle for ... of

const almacenamientos = [32, 64, 128, 256]

/**
 * for .. of se encarga de repetir hasta que hayas recorrido toda la colección
 */
for (const item of almacenamientos) {
  console.log('Almacenamiento del ipad: ' + item)
}

// * map()

/**
 * Puede usar map() para hacer algo con cada elemento de una colección y crear una nueva colección que contenga los elementos modificados
 */

// ? Con este ejemplo modificamos cada uno de los elementos, creando una nueva colección agregando Gb al final
const almacenamientoDescripcion = almacenamientos.map((valor) => {
  return valor + ' Gb'
})
console.log(almacenamientoDescripcion)

// Con este ejemplo vamos a indicar el valor de almacenamiento real disponible
const almacenamientoOS = 12

function calcularAlmacenamientoReal(valor, index) {
  return index + '.: ' + (valor - almacenamientoOS) + ' Gb'
}
const almacenamientoReal = almacenamientos.map(calcularAlmacenamientoReal)
console.log(almacenamientoReal)

// * filter()
/**
 * para probar cada elemento de una colección y
 * crear una nueva colección que contenga solo elementos que coincidan
 * con el metodo del filtro
 */

// ? Con este ejemplo buscamos filtrar los almacenamientos mayores a 100 gb

function mayores100(valor) {
  return valor >= 100
}
const almacenamientoMayor = almacenamientos.filter(mayores100)
console.log('Valores de almacenamiento mayores a 100 gb:', almacenamientoMayor)

/**
 * Esto se parece mucho a map(), excepto que la función que pasamos devuelve un booleano: si devuelve true,
 * entonces el elemento se incluye en el nuevo arreglo.
 */

// * El bucle estándar for

/**
 * for (inicializador; condición; expresión-final) {
 *  código a ejecutar
 * }
 */

// ? En este ejemplo vamos a calcular el área de 10 cuadrados comenzando por 1metro cada lado hasta el de 10m

function calcularAreaCuadrados() {
  let resultados = []
  for (let i = 1; i <= 10; i++) {
    const resultado = i * i
    resultados.push(resultado)
  }

  console.log('areas de cuadrados: ' + resultados)
}
// Ejecutamos funcion
calcularAreaCuadrados()

// Recorriendo colecciones con un bucle for ... of DE OTRA MANERA

for (let i = 0; i < almacenamientos.length; i++) {
  console.log('Forma2: Almacenamiento del ipad: ' + almacenamientos[i])
}
// aun que funcione muy bien ahora se trabaja mucho con for ... of para las colecciones

// * Saliendo de bucles con break

/**
 * Si desea salir de un bucle antes de que se hayan completado
 * todas las iteraciones, puede usar la instrucción break.
 *
 * Una instrucción break saldrá inmediatamente del bucle y
 * hará que el navegador pase a cualquier código que lo siga.
 */

// ? Veamos un ejemplo donde ingrese como parametro un nombre
// ? y me devuelva su celular; sino encuentra coincidencia se muestra un mensaje

const contactos = [
  { nombre: 'Juan Pérez', celular: '999-999-999', postal: 51 },
  { nombre: 'María García', celular: '888-888-888', postal: 51 },
  { nombre: 'Pedro López', celular: '777-777-777', postal: 74 },
  { nombre: 'Ana Sánchez', celular: '666-666-666', postal: 51 },
  { nombre: 'José Rodríguez', celular: '555-555-555', postal: 74 }
]

function buscarCelular(nombre) {
  let resultado = ''
  for (const contacto of contactos) {
    let nombreBuscado = nombre.toUpperCase()
    if (contacto.nombre.toUpperCase().includes(nombreBuscado)) {
      resultado =
        'El celular de ' + nombre.toUpperCase() + 'es: ' + contacto.celular
      console.log(resultado)
      break
    }
  }

  if (resultado.length === 0) {
    console.log('No se encontro en la lista de contactos ... ')
  }
}

buscarCelular('Pedro')

// * Omitir iteraciones con continue

/**
 * La instrucción continue funciona de manera similar a break, pero en lugar de salir
 * del bucle por completo, salta a la siguiente iteración del bucle.
 */

// ? En este ejemplo se busca los números que coinciden con el código postal y se enumera la cantidad que no coinciden
function buscarPorCodigoPostal(codigo) {
  let resultado = []
  let cantidadNoCoincidencia = 0

  for (const contacto of contactos) {
    if (contacto.postal !== codigo) {
      cantidadNoCoincidencia += 1
      continue //Si es distinto salta a la siguiente iteracción
    }
    resultado.push(contacto.celular)
  }

  console.log('Se encontro: ' + resultado)
  console.log('La cantidad que no coincidieron son: ' + cantidadNoCoincidencia)
}

buscarPorCodigoPostal(51)

// * while y do...while

/**
 * Primero, echemos un vistazo al bucle while. La sintaxis de este bucle se ve así:
 */

// inicializador
// while(condición) {
//  código a ejecutar

//   expresión-final
// }

/**
 * Es muy parecido al bucle for solo que la disposición del
 * inicializador, condición y expresión final es diferente pero en el mismo orden
 */

// Ahora intentemos hacer el mismo ejercicio de calcular el area de cuadrados
// ? En este ejemplo vamos a calcular el área de 10 cuadrados comenzando por 1metro cada lado hasta el de 10m

function calcularAreaCuadrados(numerosCuadrados) {
  let resultados = []
  i = 1
  while (i <= numerosCuadrados) {
    const resultado = Math.pow(i, 2) //Otra manera de tener el número elevado al cuadrado
    resultados.push(resultado)

    i++
  }

  console.log('Los cuadrados obtenidos: ' + resultados)
}

calcularAreaCuadrados(10)

/**
 * Advertencia: Con while y do...while, como con todos los bucles, debe asegurarse
 * de que el inicializador se incremente o, según el caso, se disminuya,
 * para que la condición finalmente se vuelva falsa.
 * Si no, el bucle continuará para siempre y el navegador lo obligará a detenerse o se bloqueará.
 * Esto se llama un bucle infinito.
 */

// ? ¿Qué tipo de bucle debes usar?
/**
 * Si se esta intentando iterar un arreglo o algún otro objeto, donde no sea necesario
 * acceder a la posición del indice, me conviene usar for ... of
 */

// for (const elemento of arreglo) {
//   código a ejecutar
// }

/**
 * Para otros usos, puedo recorrer con bucles for, while y do while
 * Resulven el mismo problema, solo cambia la posición de su inicializador,
 * condición y expresión final. En este caso depende de la preferencia de cada uno
 */

// for
// for (inicializador; condición; expresión-final) {
//   código a ejecutar
// }

// while
// inicializador
// while(condición) {
//   código a ejecutar

//   expresión-final
// }

// do ... while
// inicializador
// do {
//   código a ejecutar

//   expresión-final
// } while (condición)

// TODO: Para practicar
/**
 * Aprendizaje activo: iniciar cuenta regresiva
 * Aprendizaje activo: rellenar una lista de invitados
 * * https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Looping_code#aprendizaje_activo_iniciar_cuenta_regresiva
 * Más ejercicios
 * * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Loops
 */
