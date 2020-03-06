var listaDatos =[1,2,3,4,5,6,7,8]
var primerAux
var segundoAux = true
var resultado
var iterador = 0
do {
    if(listaDatos[iterador]<listaDatos[iterador+1]) primerAux=true;
    else segundoAux=false;
    iterador++
} while(iterador<listaDatos.length-1)
resultado = primerAux && segundoAux
if(resultado) {
    console.log("La lista es ordenada")
    console.log(resultado)
}else {
    console.log("La lista no es ordenada")
    console.log(resultado)
}
