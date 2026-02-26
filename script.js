function calcular(operacao) {
    const valor1 = parseFloat(document.getElementById("valor1").value);
    const valor2 = parseFloat(document.getElementById("valor2").value);
    const saida = document.getElementById("saida");

    if (isNaN(valor1) || isNaN(valor2)) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    let resultado;

    switch (operacao) {
        case '+':
            resultado = valor1 + valor2;
            break;
        case '-':
            resultado = valor1 - valor2;
            break;
        case '*':
            resultado = valor1 * valor2;
            break;
        case '/':
            if (valor2 === 0) {
                alert("Não é possível dividir por zero.");
                return;
            }
            resultado = valor1 / valor2;
            break;
    }

    resultado = Number(resultado.toFixed(2));

    const formatador = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    saida.textContent = formatador.format(resultado);
}