"use strict";
var calcularBinarioADecimal = function (numero) {
    return parseInt("" + numero, 2);
};
var calcularDecimalABinario = function (numero) {
    var binario = 0;
    var resto, i = 1;
    while (numero != 0) {
        resto = numero % 2;
        numero = parseInt("" + numero / 2);
        binario = binario + resto * i;
        i = i * 10;
    }
    return binario;
};
document.getElementById('calcularDecimal').addEventListener('click', function () {
    var binario = Number(document.getElementById('valorBinario').value);
    if (!binario || !(/^[0-1]*$/.test(String(binario)))) {
        document.getElementById('resultado1').innerHTML = 'Valor inválido.';
    }
    else {
        var resultado = calcularBinarioADecimal(binario);
        document.getElementById('resultado1').innerHTML = String(resultado);
    }
});
document.getElementById('calcularBinario').addEventListener('click', function () {
    var decimal = Number(document.getElementById('valorDecimal').value);
    if (!decimal) {
        document.getElementById('resultado2').innerHTML = 'Valor inválido.';
    }
    else {
        var resultado = calcularDecimalABinario(decimal);
        document.getElementById('resultado2').innerHTML = String(resultado);
    }
});
