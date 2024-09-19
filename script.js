function convert() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const unitFrom = document.getElementById('unitFrom').value;
    const unitTo = document.getElementById('unitTo').value;

    if (isNaN(inputValue)) {
        document.getElementById('result').innerText = 'Por favor, ingrese un valor numérico.';
        return;
    }

    let result;

    // Conversión de unidades
    if (unitFrom === 'meters') {
        if (unitTo === 'kilometers') {
            result = inputValue / 1000;
        } else if (unitTo === 'miles') {
            result = inputValue * 0.000621371;
        } else if (unitTo === 'centimeters') {
            result = inputValue * 100;
        } else {
            result = inputValue;
        }
    } else if (unitFrom === 'kilometers') {
        if (unitTo === 'meters') {
            result = inputValue * 1000;
        } else if (unitTo === 'miles') {
            result = inputValue * 0.621371;
        } else if (unitTo === 'centimeters') {
            result = inputValue * 100000;
        } else {
            result = inputValue;
        }
    } else if (unitFrom === 'miles') {
        if (unitTo === 'meters') {
            result = inputValue / 0.000621371;
        } else if (unitTo === 'kilometers') {
            result = inputValue / 0.621371;
        } else if (unitTo === 'centimeters') {
            result = inputValue / 0.0000062137;
        } else {
            result = inputValue;
        }
    } else if (unitFrom === 'centimeters') {
        if (unitTo === 'meters') {
            result = inputValue / 100;
        } else if (unitTo === 'kilometers') {
            result = inputValue / 100000;
        } else if (unitTo === 'miles') {
            result = inputValue * 0.0000062137;
        } else {
            result = inputValue;
        }
    }

    document.getElementById('result').innerText = `Resultado: ${result} ${unitTo}`;
    console.log(`Resultado: ${result} ${unitTo}`);
}