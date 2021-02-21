"use strict";
function calcularBinarioADecimal(numero) {
    return parseInt("" + numero, 2);
}
function calcularDecimalABinario(numero) {
    var binario = 0;
    var resto, i = 1;
    while (numero != 0) {
        resto = numero % 2;
        numero = parseInt("" + numero / 2);
        binario = binario + resto * i;
        i = i * 10;
    }
    return binario;
}
document.getElementById('calcularDecimal').addEventListener('click', function () {
    var binario = Number(document.getElementById('valorBinario').value);
    var resultado = calcularBinarioADecimal(binario);
    document.getElementById('resultado1').innerHTML = String(resultado);
});
document.getElementById('calcularBinario').addEventListener('click', function () {
    var decimal = Number(document.getElementById('valorDecimal').value);
    var resultado = calcularDecimalABinario(decimal);
    document.getElementById('resultado2').innerHTML = String(resultado);
});
