function contador() {
    num = document.getElementById('num')
    numf = document.getElementById('numf')
    passo = document.getElementById('passo')
    msg = document.getElementById('divconta')

    num1 = Number(num.value)
    numf1 = Number(numf.value)
    passo1 = Number(passo.value)

    if (num1 == 0 || numf1 == 0 || passo1 == 0){
        msg.innerHTML = 'IMPOSSIVEL CONTAR!'
        if (passo1 <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            passo1 = 1
        }
    } else {
        msg.innerHTML = `Contando: <br>`
        if (num1 < numf1) {
            for(var c = num1; c <= numf1; c += passo1) {
                msg.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            for(c = num1; c >= numf1; c-= passo1) {
                msg.innerHTML += `${c} \u{1F449}`
            }
        }
        msg.innerHTML += `\u{1F3C1}`
    }
}