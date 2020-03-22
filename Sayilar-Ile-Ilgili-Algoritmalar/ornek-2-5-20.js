/**
 * Girilen rasyonel sayinin tam kisminin basamak sayisini bulunuz
 */

let sayi = 123.6547
let tamBasamakSayisi = 0
let tamKisim = Math.round(sayi)
let i = 1
while (tamKisim > 0) {
    tamKisim = parseInt(tamKisim / 10)

    tamBasamakSayisi += 1
}

console.log("Tam Basamak Sayisi: ", tamBasamakSayisi)