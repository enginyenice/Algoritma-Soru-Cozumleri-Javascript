/**
 * 10 elemanli bir dizideki negatif ve pozitif sayıların ayrı dizilere aktarılması algoritmasi
 */

let dizi = [2, -16, 1, -9, 2, 7, -1, 66, 4, 2]
let negatifDizi = []
let pozitifDizi = []

dizi.forEach(sayi => {
    (sayi < 0) ? negatifDizi.push(sayi): pozitifDizi.push(sayi)
});

console.log("Negatif Dizi: ", negatifDizi.toString())
console.log("Pozitif Dizi: ", pozitifDizi.toString())