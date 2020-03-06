
function defMapaDatos(){
    mapaDatos = new Map()
    mapaDatos.set(1,"Real Madrid")
    mapaDatos.set(2,"Barcelona")
    mapaDatos.set(3,"Atletico de Madrid")
    mapaDatos.set(4,"Atletico de Bilbao")
    mapaDatos.set(5,"Valencia")
    mapaDatos.set(6,"Villareal")
    mapaDatos.set(7,"Real Sociedad")
    mapaDatos.set(8,"Real Betis")
    return mapaDatos
}
tablaLaLiga = defMapaDatos()
claveBuscada = 8
console.log("El valor asociado a la clave "+claveBuscada+" es: "+tablaLaLiga.get(claveBuscada))

