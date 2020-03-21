/**
 * Uc basamakli bir sayinin yuzler onlar ve birler basamagini bulan algoritma
 */

let sayi = 987,
    yuzler, onlar, birler
console.log("Sayi ", sayi)
yuzler = parseInt(sayi / 100) * 100
sayi = sayi - yuzler
onlar = parseInt(sayi / 10) * 10
sayi = sayi - onlar
birler = sayi

console.log("Yuzler", yuzler, "\nOnlar", onlar, "\nBirler", birler)