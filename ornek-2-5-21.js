/**
 * Verilen bir tamsayinin hanelerindeki en buyuk sayiyi bulan algoritma
 */

let sayi = 284651
let enBuyuk = 0


while (sayi != 0) {
    let B = sayi - parseInt(sayi / 10) * 10
    if (enBuyuk < B)
        enBuyuk = B

    sayi = parseInt(sayi / 10)
}
console.log(enBuyuk)