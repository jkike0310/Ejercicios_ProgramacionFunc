
var primerConjunto = new Set(["Mexico","USA","Argentina","Peru"])
var segundoConjunto = new Set(["Peru","Mexico","Uruguay","Colombia"])

function definirUnion(primerConjunto,segundoConjunto) {
    var union = new Set([...primerConjunto, ...segundoConjunto])
    return union;
}

function defInterseccion(primerConjunto,segundoConjunto) {
    let intersection = new Set([...primerConjunto].filter(x => segundoConjunto.has(x)));
    return intersection;
}

function definirDiferencia(primerConjunto,segundoConjunto) {
    let difference = new Set([...primerConjunto].filter(x => !segundoConjunto.has(x)));
    return difference;
}
console.log(definirDiferencia(primerConjunto,segundoConjunto));
console.log(defInterseccion(primerConjunto,segundoConjunto));
console.log(definirUnion(primerConjunto,segundoConjunto));