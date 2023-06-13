try{
    const listaDeProdutosDisponiveis = [
        "Pao",
        "Leite",
        "Cafe",
        "Laranja",
        "Macarrao",
        "Sabonete",
        "Detergente",
    ];
    
    const listaDeArgumentos = process.argv.slice(2);
    
    const listaDeProdutosSolicitadosDisponiveis = listaDeProdutosDisponiveis.filter(produto =>{
        return listaDeArgumentos.find(argumento => argumento === produto);
    })
    listaDeProdutosSolicitadosDisponiveis.forEach(produto => console.log(`Nós temos estes produtos: ${produto}`));
    
    const listaDeProdutosSolicitadosNaoDisponiveis = listaDeArgumentos.filter(argumento => {
        return !listaDeProdutosDisponiveis.find(produto => produto === argumento);
    })
    listaDeProdutosSolicitadosNaoDisponiveis.forEach(produto => console.log(`Nós não temos estes produtos: ${produto}`));
    
    listaDeProdutosDisponiveis.sort(produto => produto);
    listaDeProdutosDisponiveis.forEach(produto => console.log(`Este produto está disponível: ${produto}`));
}catch(e){
    console.log('Nao foi possivel executar o pedido de compra');
}

const listaDeProdutosDisponiveis = [
    "Pao",
    "Leite",
    "Cafe",
    "Laranja",
    "Macarrao",
    "Sabonete",
    "Detergente",
];

const listaDeArgumentos = process.argv.slice(2);

const listaDeProdutosSolicitadosDisponiveis = listaDeProdutosDisponiveis.filter(produto =>{
    return listaDeArgumentos.find(argumento => argumento === produto);
})
listaDeProdutosSolicitadosDisponiveis.forEach(produto => console.log(`Nós temos estes produtos: ${produto}`));

const listaDeProdutosSolicitadosNaoDisponiveis = listaDeArgumentos.filter(argumento => {
    return !listaDeProdutosDisponiveis.find(produto => produto === argumento);
})
listaDeProdutosSolicitadosNaoDisponiveis.forEach(produto => console.log(`Nós não temos estes produtos: ${produto}`));

listaDeProdutosDisponiveis.sort(produto => produto);
listaDeProdutosDisponiveis.forEach(produto => console.log(`Este produto está disponível: ${produto}`));