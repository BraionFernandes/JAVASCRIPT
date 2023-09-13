function verificar() {
    data = new Date ()
    ano = data.getFullYear()
    anof = document.getElementById('ano')
    verif = document.getElementById('verif')
    msg = document.getElementById('msg')
    if (anof.value.length == 0 || anof.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        sexo = document.getElementsByName('sex')
        idade = ano - Number(anof.value)
        genero = ''
        img = document.getElementById('img')
        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                img.src = 'bebe-homem.webp'
            } else if (idade < 21) {
                img.src = 'jovem-homem.webp'
            } else if (idade < 50) {
                img.src = 'adulto-homem.webp'
            } else {
                img.src = 'idoso-homem.jpeg'
            }
        } else if (sexo[1].checked) {
            genero = 'Feminino'
            if (idade >=0 && idade < 10) {
                img.src = 'bebe-mulher.webp'
            } else if (idade < 21) {
                img.src = 'jovem-mulher.webp'
            } else if (idade < 50) {
                img.src = 'adulto-mulher.jpeg'
            } else {
                img.src = 'idoso-mulher.jpeg'
            }
        }
            msg.style.textAlign = 'center'
            msg.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}