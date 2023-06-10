const readLine = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});

const validarNumeroInformado = (numero)  =>  {
        const resultado = Number.parseFloat(numero);
        if(!resultado){
            console.log(`O número informado não é válido`);
        }
        return resultado
}

const validarOperador = (operador  =>  {
    switch(operador){
        case '+':
        case '-':
        case '/':
        case '*':
        case '%':
            return operador;
        default:
            console.log('O Operador Informado não é Válido');
            return null;
    }
})

readLine.question('Favor, Informar um Número:', (numero1)  =>  {
const numeroValidado1 = validarNumeroInformado(numero1);

    if(numeroValidado1){
        readLine.question('Favor Informar outro Número:', (numero2)  => {
            const numeroValidado2 = validarNumeroInformado(numero2);

            if(numeroValidado2){
                readLine.question('Favor Informar o Operador:', (operador)  =>  {
                    const operadorValidado = validarOperador(operador);
                    if(operadorValidado){
                        switch(operadorValidado){
                            case '+': console.log(`Operador Selecionado Adicao Resultado =  ${numeroValidado1} + ${numeroValidado2} = ${numeroValidado1 + numeroValidado2}`);
                                break;
                            case '-': console.log(`Operador Selecionado Subtracao Resultado =  ${numeroValidado1} - ${numeroValidado2} = ${numeroValidado1 - numeroValidado2}`);
                                break;
                            case '*': console.log(`Operador Selecionado Multiplicacao Resultado =  ${numeroValidado1} * ${numeroValidado2} = ${numeroValidado1 * numeroValidado2}`);
                                break;
                            case '/': console.log(`Operador Selecionado Divisao Resultado =  ${numeroValidado1} / ${numeroValidado2} = ${numeroValidado1 / numeroValidado2}`);
                                break;
                            case '%': console.log(`Operador Selecionado Porcentagem Resultado =  ${numeroValidado1} % ${numeroValidado2} = ${numeroValidado1 % numeroValidado2}`);
                                break;
                            Default: break;
                        }
                    }
                })
            }
        });
    }
})