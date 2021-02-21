
function calcularBinarioADecimal(numero: number): number {
    return parseInt(""+numero, 2);
}

function calcularDecimalABinario(numero: number): number {
    let binario = 0;
    let resto, i = 1;
    while (numero != 0) {
        resto = numero % 2;
        numero = parseInt(""+numero / 2);
        binario = binario + resto * i;
        i = i * 10;
    }
    return binario;
}

document.getElementById('calcularDecimal')!.addEventListener('click', () => {
    let binario: number = Number((<HTMLInputElement>document.getElementById('valorBinario')).value);
    let resultado: number = calcularBinarioADecimal(binario);
    document.getElementById('resultado1')!.innerHTML = String(resultado);
});

document.getElementById('calcularBinario')!.addEventListener('click', () => {
    let decimal: number = Number((<HTMLInputElement>document.getElementById('valorDecimal')).value);
    let resultado: number = calcularDecimalABinario(decimal);
    document.getElementById('resultado2')!.innerHTML = String(resultado);
});

