/**
 * Verilen bir tamsayidaki tekrar eden hanelerdeki sayilari bulma
 */
let sayi = 13211999
let rakam = 0
let tempSayi = sayi
for (rakam; rakam <= 9; rakam++) {
    let tekrar = 0
    while (sayi != 0) {
        let basamak = sayi - parseInt(sayi / 10) * 10
        if (basamak == rakam)
            tekrar = tekrar + 1
        sayi = parseInt(sayi / 10)
    }
    sayi = tempSayi
    console.log("Rakam: ", rakam, " Tekrar Sayisi: ", tekrar)
}