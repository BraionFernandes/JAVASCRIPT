let pedidos = [
    {id: 420, nome: 'Dener', alimento: 'Sanbubão de Bacon', bebida: 'Suco Limão'},
    {id: 152, nome: 'Braion', alimento: 'Sanbubão de Frango', bebida: 'Coca Cola'},
    {id: 29, nome: 'Marcio', alimento: 'Coxinha', bebida: 'Suco Uva'},
    {id: 12, nome: 'Tailon', alimento: 'Cachorro Quente', bebida: 'Pepsi'},
    {id: 72, nome: 'Augusto', alimento: 'Frango Frito', bebida: 'Suco de Laranja'}
];

pedidos.map( pedido => {
    if (pedido.alimento == 'Coxinha'){
        return (pedido.alimento = 'Não temos no momento');
    }
});

console.log(pedidos);