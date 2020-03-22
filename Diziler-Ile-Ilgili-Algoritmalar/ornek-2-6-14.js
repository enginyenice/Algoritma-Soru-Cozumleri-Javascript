/**
 * 10 elemanli bir dizide tek ve cift olan sayilarin adetini bulmak
 */
let dizi = [10, 8, 3, 6, 5, 4, 7, 2, 9, 1]
let tekSayi = 0
let ciftSayi = 0

tekCiftSayiBul(dizi)

function tekCiftSayiBul(dizi = []) {
    dizi.forEach(sayi => {
        if (sayi % 2 == 0)
            ciftSayi += 1
        else
            tekSayi += 1
    });
    console.log("Tek sayi: ", tekSayi, " Cift sayi: ", ciftSayi)
}