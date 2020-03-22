/**
 * 10 elemanli bir dizidan negatif elemanları pozitif alarak toplamini bulan algoritma
 */

let dizi = [2, -16, 1, -9, 2, 7, -1, 66, 4, 2]
let toplam = 0
dizi.forEach(sayi => {
    (sayi < 0) ? toplam += (sayi * -1): toplam += sayi
});
console.log("Toplam: ", toplam)