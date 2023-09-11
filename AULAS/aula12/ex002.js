agora = new Date()
hora = agora.getHours() 
console.log(`Agora são ${hora} Horas.`)
if (hora > 5 && hora < 12) {
    console.log('Bom dia');
} else if (hora >= 12 && hora < 19) {
    console.log('Boa Tarde');
} else {
    console.log('Boa noite')
}
    