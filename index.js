console.log("sugar tururururu")

// sugar syntax 

//término para referirse a una sintaxis diseñada para que algunas construcciones de código sean más fáciles de leer o expresar

// es lo mismo que un código más largo

// OPERADORES 

let acc = 5
let accSegunda = 5

// OPERADOR ++ (SUMA 1)

// for (let i = 0; i < 10; i++) {
//     console.log(acc = acc + i)
//     // console.log(i)
// }

// OPERADOR += (ES UNA REDUCCIÓN DE LA EXPRESIÓN ACC = ACC + i)

for (let i = 0; i < 10; i+=2) {
    console.log(i)
    console.log(acc += 5)
    console.log(accSegunda = accSegunda + 5)

}

// OPERADOR -- (RESTA 1)

for(let i = 10; i > 0 ; i--) {
    console.log(i)
}

// OPERADOR -= (TENEMOS QUE ACLARAR CUANTO QUEREMOS RESTAR)

for (let  index = 0; index < 4; index++) {
    console.log(acc-=2)
}

///////////////////////////////////////////////////////

// OPERADOR TERNARIO

if ( 14 >= 18 ){
    console.log("Es mayor")
} else {
    console.log("Es menor")
}

// CONDICION ? TRUE : FALSE

const resultador = 14 >= 18 ? "Es mayor" : "Es menor"
console.log(resultador)

const mayorOTienePermiso = (edad, tienePermiso) =>  edad >= 18 && tienePermiso === true ? true : false

console.log(mayorOTienePermiso(20, true))
console.log(mayorOTienePermiso(15, false))
console.log(mayorOTienePermiso(11, true))

const tipoDeDato = (valor) => typeof valor === "string" ? "aslkjdsad" : "123213213"
console.log(tipoDeDato(10))

console.log(typeof 10 === typeof "ñasldipsoadjapsojdwq10")

// TYPEOF ES PARA SABER CON QUÉ TIPO DE VALOR ESTOY TRABAJANDO

// OPERADOR DE CORTO CIRCUITO

const nombre = "Ana Paula"

// if (nombre) {
//     console.log(`Hola ${nombre}`)
// }

// SI EL PRIMER OPERANDO ES EVALUADO COMO TRUE, SE EJECUTA LA INSTRUCCIÓN QUE DEVIENE LUEGO DEL && (AND)
// NO HAY UNA RESPUESTA EN EL CASO DE QUE SEA FALSE

!!nombre && console.log(`Hola ${nombre}`)

// OR (ES LA O) 
// SI EL PRIMER OPERANDO SE CUMPLE Y ES EVALUADO COMO TRUE, ENTONCES ES TRUE
// SI EL PRIMER OPERANDO ES FALSE, ENTONCES VAMOS A VISUALIZAR EL SEGUNDO
// SI NO SE CUMPLE NINGUN OPERANDO, SE VISUALIZA EL VALOR DEL SEGUNDO, SEA TRUE O FALSE

const estadoBooleandoTrue = true // true
const estadoBooleandofalse = false // false

console.log(estadoBooleandoTrue || estadoBooleandofalse)
console.log(estadoBooleandofalse || estadoBooleandoTrue)
console.log(false || null)

// OPERADOR NULLISH

// devuelve la segunda expresión cuando la primera es null

console.log(null ?? console.log("Hola"))
console.log(null === undefined)

// undefined denota un valor que no se definió
// null denota un valor porque nosotros quisimos que sea así


// DESTRUCTURING

const persona = {
    nombreEstudiante: "Jesica",
    gustoDeHelado: "americano",
    esEstudiante: true,
    numerosFavoritos: [1, 2, 3, 4, 5, 6]
}

const { nombreEstudiante, esEstudiante, edad, numerosFavoritos }  = persona

console.log(esEstudiante)
console.log(persona.nombre)
console.log(edad)
console.log(numerosFavoritos)
// para destructurar objetos tengo que:
// declarar una variable y utilizar { } en caso de ser un objeto
// coincidir con el nombre de la propiedad

console.log(`Hola ${nombreEstudiante}`)

// DESTRUCTURING DE ARRAYS

const frutas = [ "anana", "pera", "kiwi", "banana"]

console.log(frutas[0])
console.log(frutas[3])

// PARA PODER DESTRUCTURAR UN ARRAY, PRECISO TENER EN CUENTA LA POSICIÓN LÓGICA DEL ELEMENTO QUE ME INTERESA

const [frutaFavorita,,frutaQueMeDaAlergia] = frutas

console.log(frutaFavorita, frutaQueMeDaAlergia)

// ALIAS DESTRUCTURING

const { gustoDeHelado : helado } = persona
console.log(helado)

//////////////////////////////////////////////////////

// SPREAD OPERATOR

const nombresEstudiantes = ["Patricio", "Alejo", "Mitchell"]

// COPIA PLATA DEL ARRAY, TODO LO QUQE HAGAMOS SOBRE ALGUNO DE ESTOS DOS, SE VERÁ REFLEJADO EN EL OTRO

const nuevosEstudiantes = nombresEstudiantes

// COPIA SEGURA DEL ARRAY
// GENERA UNA NUEVA REFERENCIA

const nuevaReferenciaAEstudiantes = [...nombresEstudiantes]

nombresEstudiantes.push("Mateo")

console.log(nombresEstudiantes)
console.log(nuevosEstudiantes)
console.log(nuevaReferenciaAEstudiantes)

// map, filter, reduce, new Array

// OBJETOS

const panka = {
    nombre: "panka",
    raza: "ovejera",
    tamaño: "grande",
}

const pankaPanka = {...panka}
const pankaRobot = panka

pankaPanka.robot = false
pankaRobot.ataque = 1000

console.log(panka)
console.log(pankaRobot)
console.log(pankaPanka)

// PARÁMETROS SPREAD

const pankaRobotAlAtaque = ({nombre, raza, ataque}) => {
    return console.log(`${nombre}, ${ataque}`)
}

pankaRobotAlAtaque({...pankaRobot})


