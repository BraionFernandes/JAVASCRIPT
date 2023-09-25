pedidos = [
    {id: 420, nome: 'Dener', alimento: 'Sanbubão de Bacon', bebida: 'Suco Limão'},
    {id: 152, nome: 'Braion', alimento: 'Sanbubão de Frango', bebida: 'Refrigerante'},
    {id: 29, nome: 'Marcio', alimento: 'Coxinha', bebida: 'Suco Uva'},
    {id: 12, nome: 'Tailon', alimento: 'Cachorro Quente', bebida: 'Refrigerante'},
    {id: 72, nome: 'Augusto', alimento: 'Frango Frito', bebida: 'Suco de Laranja'}
];

let filter = pedidos.filter(pedido => {
    return pedido.bebida == 'Refrigerante';
});

console.log(filter)