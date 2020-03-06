
var num = 4
var lista = [1,2,3,4,7,3,7]

function determinarExistencia(numero){
    for (let index = 0; index < lista.length; index++) {
        if(lista[index] == numero){
            return true;
        }
    }
}

if(determinarExistencia(num)){
    console.log("El numero "+num+" se encuentra en el conjunto")
    console.log(true)
}else{
    console.log("El numero "+num+" no se encuentra en el conjunto")
    console.log(false)
}