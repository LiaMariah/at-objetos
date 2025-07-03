document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculate');
    const resultDiv = document.getElementById('result');

    function calculo(num1, num2, operacao) {
        switch (operacao) {
            case 'soma':
                return num1 + num2;
            case 'subtracao':
                return num1 - num2;
            default:
                throw new Error('Operação inválida');
        }
    }

    calculateBtn.addEventListener('click', function() {
        try {
            // Obter valores dos inputs
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            const operation = document.getElementById('operation').value;

            // Validações
            if (isNaN(num1)) throw new Error('Primeiro número inválido');
            if (isNaN(num2)) throw new Error('Segundo número inválido');

            // Cálculo e exibição do resultado
            const resultado = calculo(num1, num2, operation);
            resultDiv.innerHTML = `O resultado é: <span class="result-value">${resultado}</span>.`;
            
        } catch (error) {
            // Exibição de erros
            resultDiv.innerHTML = `<span class="error">Erro: ${error.message}</span>`;
            console.error('Erro no cálculo:', error);
        }
    });
});