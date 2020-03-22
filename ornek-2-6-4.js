/**
 * 10 Elemanli bir dizide negatif sayilarin toplamini bulan algoritma
 */

let dizi = [2, -16, 1, -9, 2, 7, -1, 66, 4, 2]
let negatifToplam = 0
dizi.forEach(sayi => {
    if (sayi < 0)
        negatifToplam += sayi
});
console.log("Negatif sayilarin toplami: ", negatifToplam)