function enviar() {
    nome = document.getElementById('nome')
    nomef = String(nome.value)
    idade = document.getElementById('idade')
    idadef = Number(idade.value)
    sex = document.getElementsByName('sexo')
    msg = document.getElementById('msg1')
    envia = document.getElementById('enviar')
    if (sex[0].checked) {
        msg.innerHTML = `Seja bem vindo ${nomef}, você tem ${idadef} anos. e você è um Homem`
    } else {
        msg.innerHTML = `Seja bem vindo ${nomef}, você tem ${idadef} anos. e você è uma Mulher`
    }
}

function escola() {
    n1 = document.getElementById('n1')
    n2 = document.getElementById('n2')
    n3 = document.getElementById('n3')
    n4 = document.getElementById('n4')
    msg1 = document.getElementById('media')

    n1f = Number(n1.value)
    n2f = Number(n2.value)
    n3f = Number(n3.value)
    n4f = Number(n4.value)

    media = (n1f + n2f + n3f + n4f) / 4
    msg1.innerHTML = `Sua media e ${media.toFixed(1)}`

}