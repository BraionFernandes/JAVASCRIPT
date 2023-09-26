lanche = document.getElementsByName('lanchef')
bebida = document.getElementsByName('bebidaf')
pedidos = document.querySelector('#pedidos')
function enviarp(){
    if(lanche[0].checked){
        lanchef = 'Sanduiche Natural'
        lvalor = 9.99
    } else if(lanche[1].checked){
        lanchef = 'Coxinha de Frango'
        lvalor = 6.99
    } else if(lanche[2].checked){
        lanchef = 'Pizza'
        lvalor = 9.99
    } else if(lanche[3].checked){
        lanchef = 'Lasanha'
        lvalor = 12.99
    }
    if(bebida[0].checked){
        bebidaf = 'Coca-Cola'
        bvalor = 7.99
    } else if(bebida[1].checked){
        bebidaf = 'Pepsi'
        bvalor = 6.99
    } else if(bebida[2].checked){
        bebidaf = 'Suco de uva'
        bvalor = 4.99
    } else if(bebida[3].checked){
        bebidaf = 'Suco de maracuja'
        bvalor = 4.99
    }
    pedidos.innerHTML = ''
    pedidos.innerHTML += `<p>${lanchef} : R$${lvalor}</p>`
    pedidos.innerHTML += `<p>${bebidaf} : R$${bvalor}</p>`
    pedidos.innerHTML += `<p>Total a pagar : R$${lvalor + bvalor}</p>`
}

function confirmarp(){
    pedidos.innerHTML = '<p>Muito obrigado(a) pela preferência.</p>'
}