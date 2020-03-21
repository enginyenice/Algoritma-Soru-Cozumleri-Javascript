/**
 * Ondalikli kismi iki haneli girilen pozitif bir rasyonel sayinin tamsayi degerinin en yakin tamkare sayiya uzaklıgını bulun
 */

let sayi = 17.32

let tamKisim = parseInt(sayi)
let ondalik = sayi - tamKisim
let fark = 0
let yakinOlanSayi = 0
ondalik = Math.round(ondalik * 100)

console.log(ondalik)
let i = 2
for (i; i < ondalik; i++) {
    if (i == 2) {
        fark = Math.abs(ondalik - i * i)
        yakinOlanSayi = i * i
    }

    if (fark > Math.abs(ondalik - i * i)) {
        fark = Math.abs(ondalik - i * i)
        yakinOlanSayi = i * i
    }
}
console.log("Ondalik Kisim: ", ondalik)
console.log("Yakin olunan sayi: ", yakinOlanSayi)
console.log("En Kucuk Fark: ", fark)