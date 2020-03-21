/**
 * Verilen bir sayinin tam kare olup olmadigini bulan algoritma
 */

let sayi = 36
let B = Math.pow(sayi, 0.5)
let TamB = parseInt(B)
console.log((B - TamB == 0) ? "Tam Kare" : "Tam Kare Degil")