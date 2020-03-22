/**
 * 10 elemanli bir sayi dizinde en buyuk elemani bulan algoritma
 */

let dizi = [2, 6, 1, 9, 2, 7, 1, 66, 4, 2]
let enBuyuk = null

dizi.forEach(sayi => {
    if (enBuyuk == null || sayi > enBuyuk)
        enBuyuk = sayi
});
console.log("En buyuk sayi", enBuyuk)