
let calcularBinarioADecimal = (numero: number): number => {
    return parseInt(""+numero, 2);
}

let calcularDecimalABinario = (numero: number): number => {
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
    if (!binario || /^[0-9]*$/.test(String(binario))) {
        document.getElementById('resultado1')!.innerHTML = 'Valor inválido.';
        return;
    }
    let resultado: number = calcularBinarioADecimal(binario);
    document.getElementById('resultado1')!.innerHTML = String(resultado);
});

document.getElementById('calcularBinario')!.addEventListener('click', () => {
    let decimal: number = Number((<HTMLInputElement>document.getElementById('valorDecimal')).value);
    if (!decimal) {
        document.getElementById('resultado2')!.innerHTML = 'Valor inválido.';
        return;
    }
    let resultado: number = calcularDecimalABinario(decimal);
    document.getElementById('resultado2')!.innerHTML = String(resultado);
});

