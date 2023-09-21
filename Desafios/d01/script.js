//Mostre os primeiros 10 números da sequência de Fibonacci
//1,1,2,3,5,8,13,21,34,55

n0 = 0
n1 = 1

console.log(n1)

for (i = 1; i < 10; i++) {
    temp = n1;
    n1 = n0 + n1
    n0 = temp
    console.log(n1)
}