// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}


const fromDollarToYen = (valueInEuro) =>{
    let valueInYen = valueInEuro * 127.9;
    return valueInYen
}
const fromYenToPound =(valueInEuro) =>{
    let valueInPound = valueInEuro * 0.8;
    return valueInPound
}
module.exports = {  fromEuroToDollar, fromDollarToYen, fromYenToPound }