/**
 * Sayilardan kaç tanesinin negatif(-) veya pozitif(+) olduğunu bulan algoritma
 */

let sayilar = [1, -3, 5, 6, -7, -9, 11, -25]
let pozitif = 0,
    negatif = 0
sayilar.forEach(sayi => {
    if (sayi < 0)
        negatif++
        else
            pozitif++
});

console.log("Negatif(-) Sayi", negatif, " Pozitif(+) Sayi ", pozitif)