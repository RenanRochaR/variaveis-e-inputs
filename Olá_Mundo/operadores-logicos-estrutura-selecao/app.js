const readLine = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});

console.log('Esse programa vai checar se você é maior de 18 anos e tem habilitação para saber se você pode entrar no kart');
console.log('além da sua verificação, precisamos verificar se você está na lista de presença do horário');

readLine.question('Qual o ano do seu nascimento?', ano => {
    if(ano > 2004){
        console.log('voce nao tem 18 anos');
    }else{
        readLine.question("voce tem habilitacao? (Sim/Não)", temHabilitacao => {
            if(!(temHabilitacao.toUpperCase() === "SIM")){
                console.log('voce nao tem habilitacao para entrar no kart');
            }else{
                readLine.question("Qual seu nome?", nome =>{
                    switch(nome){
                        case 'Douglas' :
                            console.log('Bem vindo ao Kart Douglas');
                            break;
                        case 'Rafael' :
                            console.log('bem vindo ao Kart Rafael');
                        default:
                            console.log('Seu Nome nao foi identificado na lista de presenca');
                    }
                });
            }
        })
    }
})
