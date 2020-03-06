
var numeros = [5,12,3,4], aux = numeros[0]
console.log("Hay un conjunto formado por los siguientes numeros")
for (let index = 0; index < numeros.length; index++) {
    if(aux < numeros[index]) aux = numeros[index]
    console.log(numeros[index])
}
console.log("El numero "+aux+" es el mayor del conjunto")