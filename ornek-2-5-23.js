/**
 * Verilen herhangi bir tamsayiyi hanelerine ayir
 */

let sayi = 56414
let basamak = 0
let temp = sayi
let d, c
while (sayi != 0) {
    sayi = parseInt(sayi / 10)
    basamak = basamak + 1
}
sayi = temp
while (basamak > 0) {
    d = Math.pow(10, basamak - 1)
    c = parseInt(sayi / d) * d
    console.log(c)
    basamak = basamak - 1
    sayi = sayi - c
}