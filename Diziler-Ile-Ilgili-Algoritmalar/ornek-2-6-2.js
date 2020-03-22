/**
 * 10 elemanli bir sayi dizisinin elemanlarinin toplamini bulan algoritma
 */

let dizi = [2, 6, 1, 9, 2, 7, 1, 66, 4, 2]
let toplam = 0
dizi.forEach(sayi => {
    toplam += sayi
});

console.log("Dizinin toplami: ", toplam)