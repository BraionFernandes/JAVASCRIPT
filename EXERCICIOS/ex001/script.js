function carregar() {
    msg = document.getElementById('msg')
    msg2 = document.getElementById('msg2')
    img = document.getElementById('imagem')
    data = new Date()
    hora = data.getHours()
    msg.innerHTML = `<h2>Agora são ${hora} horas.</h2>`
    if (hora > 5 && hora < 12) {
        img.src = 'dia.jpg'
        msg2.innerHTML = '<h2>Bom Dia!</h2>'
        document.body.style.backgroundColor = '#e2cd9f'
    } else if (hora >= 12 && hora < 19) {
        img.src = 'tarde.jpg'
        msg2.innerHTML = '<h2>Boa Tarde!</h2>'
        document.body.style.backgroundColor = '#b9896f'
    } else {
        img.src = 'noite.jpg'
        msg2.innerHTML = '<h2>Boa Noite!</h2>'
        document.body.style.backgroundColor = '#515154'
    }
}
