// ?1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.
// let meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
// document.write("<h2>Lista de Meses</h2>")

// for(let i=0;i<=meses.length;i++){
//     document.write(`<li>${meses[i]}</li>`)
// }
//? 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:
// let guardar=[]
// do{
//   var nameCity=prompt("Ingrese nombre de 5 ciudades Famosas ") 
//   if(nameCity){
//       guardar.push(nameCity)
//   }

// }while(nameCity)
//     console.log(guardar)
//  document.write(`<h3>La longitud del Arreglo Es de ${guardar.length}</h3>`)
//  document.write(`<li> los elementos de la primer posicion ${guardar[0]}`)
//  document.write(`<li> los elementos de la Tercer posicion ${guardar[3]}`)
//  document.write(`<li> los elementos de la ultima posicion ${guardar[-1]}`)
//  document.write(`<h3>Arreglo de Ciudades </h3>`)


//  for(let i=0;i<=guardar.length;i++){
//     document.write(`<li>Elemento: ${guardar[i]}`)
//  }
// ? 3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.
let lanzamientoResultado=[]

for(let i=1;i<=50;i++){
    let dado1=Math.floor(Math.random()*6)+1
    
    let dado2=Math.floor(Math.random()*6)+1
   
    let suma=dado1+dado2
    lanzamientoResultado.push(suma)
   
    

}
let filtrado=lanzamientoResultado.filter((item,index)=>{
  return lanzamientoResultado.indexOf(item)===index
})

// console.log(repitiendo)
console.log(lanzamientoResultado)
lanzamientoResultado.pop()

let frecuencia=lanzamientoResultado.reduce((acc,valorActual)=>{
    acc[valorActual]=(acc[valorActual]?? 0)+1
    return acc
},[])


let eliminar=frecuencia.splice(0,2)
console.log(eliminar)
console.log(frecuencia)

document.write(`<table><h3>Suma 🎲🎲<h3><tbody>`)


for(let i=0;i<filtrado.length;i++){
    document.write(`<tr>`)
    document.write(`<td>${filtrado[i]}</td>`)
   document.write(`</tr>`)
}

document.write(`</tbody></table>`)

document.write(`<table><tbody>`)


for(let i=0;i<frecuencia.length;i++){
    document.write(`<tr>`)
    if(frecuencia[i]===8){
        frecuencia[i]="ganaste"
    }
   document.write(`<td>${frecuencia[i]}</td>`)
   document.write(`</tr>`)
}


document.write(`</tbody></table>`)
document.write("<h3>Apariciones<h3>")




//? 4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
// let num=parseInt(prompt("Escribe un numero"))
// const par=(num)=>{
//  if(num%2==0){
//     alert(`El numero ${num} es par`)
//  }else{
//     alert(`El numero ${num} es impar`)
//  }
// }

// par(num)

// ?5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

// let texto=prompt("Escribe una oracion")

// const Determinar=(text)=>{
 
// if(text===text.toUpperCase()){
//     alert(`${text} :Letras Mayuscula`)
// }else if(text===text.toLowerCase()){
//     alert(`${text} :Letras minusculas`)
// }else{
//     alert(`${text} :Es mescla de ambas`)
// }
// }
// Determinar(texto)
// ?6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

// let lado1=parseInt(prompt("Lado a"))
// let lado2=parseInt(prompt("lado b"))

// const Parametro=(a,b)=>{
// let perímetro=2*(a+b)
// alert("EL perimetro es de "+perímetro)
// }
// Parametro(lado1,lado2)


//? 7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

// let tabla=parseInt(prompt("Escribe tabla multiplicar"))
// document.write(`<h1>La tabla elegida es de ${tabla}</h1>`)
// const Tabla=(num)=>{
// for(let i=1;i<=10;i++){
//   document.write(`<li>${num} X ${[i]} = ${num*[i]}</li>`)
// }
// }
// Tabla(tabla)

