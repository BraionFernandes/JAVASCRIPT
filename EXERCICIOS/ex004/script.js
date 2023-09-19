function tabuada() {
    num = document.getElementById('num')
    tabu1 = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por Favor, dígite um número!')
    } else {
        num1 = Number(num.value)
        tabu1.innerHTML = ''
        for (c = 1; c <=10; c++ ) {
            item = document.createElement('option')
            item.text = `${num1} x ${c} = ${num1*c}`
            item.value = `tab${c}`
            tabu1.appendChild(item)
        }
    }
} 